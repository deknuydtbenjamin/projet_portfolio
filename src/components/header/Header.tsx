import { navlinks, logoLang } from "./index";
import type { NavLinkType, LogoLangType } from "./index";
import style from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LanguageContext";
import translate from "./header.json";
type Translate = {
	[lang in "fr" | "en"]: {
		about: string;
		projects: string;
		contact: string;
		webDeveloper: string;
	};
};
const typedTranslations: Translate = translate;

type TranslationKey = keyof Translate["fr"];

export default function Header() {
	const { theme, toggleTheme } = useTheme();
	const { lang, toggleLang } = useLang();
	const t = (key: TranslationKey): string => {
		return typedTranslations[lang][key];
	};

	return (
		<header className={theme === "dark" ? style.darkTheme : style.lightTheme}>
			<nav className={style.nav}>
				<ul className={style.list}>
					{navlinks.map((elem: NavLinkType) => {
						const key = elem.label.replace("nav.", "") as TranslationKey;
						return (
							<li key={elem.id}>
								<a href={elem.link} className={style.li}>
									{t(key)}
								</a>
							</li>
						);
					})}
				</ul>
				<button
					type="button"
					onClick={toggleLang}
					className={style.button}
					aria-label={`Switch to ${lang === "en" ? "French" : "English"}`}
				>
					<span className={style.defaultEmoji} role="img" aria-hidden="true">
						🌍
					</span>
					<span className={style.hoverEmoji} role="img" aria-hidden="true">
						🌏
					</span>
				</button>
				<label className={style.toggle}>
					<input
						type="checkbox"
						onClick={toggleTheme}
						className={style.checkbox}
					/>
					<div className={style.slider}> {theme === "dark"}</div>
				</label>
			</nav>
			<div className={style.div}>
				<section className={style.hero}>
					<h1 className={style.title}>Benjamin Deknuydt</h1>
					<h2 className={style.titlebis}>{t("webDeveloper")}</h2>
				</section>
				<section className={style.container}>
					{logoLang.map((l: LogoLangType) => (
						<div key={l.id} className={style.logolang}>
							<img src={l.logo} alt={l.name} className={style.logo} />
							<h3 className={style.titlelogo}>{l.name}</h3>
						</div>
					))}
				</section>
			</div>
		</header>
	);
}
