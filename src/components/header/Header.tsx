import { navlinks, logoLang } from "./index";
import type { NavLinkType, LogoLangType } from "./index";
import style from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className={theme === "dark" ? style.darkTheme : style.lightTheme}>
			<nav className={style.nav}>
				<ul className={style.list}>
					{navlinks.map((elem: NavLinkType) => (
						<li key={elem.id}>
							<a href={elem.link} className={style.li}>
								{elem.label}
							</a>
						</li>
					))}
				</ul>
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
					<h1 className={style.title}>
						Benjamin <span className={style.lastname}>Deknuydt</span>
					</h1>
					<h2 className={style.titlebis}>Developpeur Web</h2>
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
