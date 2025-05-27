import style from "../projet/Projet.module.css";
import type { ProjetType } from "./index";
import { projetlink } from ".";
import { useTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LanguageContext";
import translate from "./projet.json";

type Translate = {
	[lang in "fr" | "en"]: {
		project: string;
		mibnews_title: string;
		mibnews_description: string;
		movie_title: string;
		movie_description: string;
		trombi_title: string;
		trombi_description: string;
		greenshare_title: string;
		greenshare_description: string;
		eating_title: string;
		eating_description: string;
	};
};
const typedTranslations: Translate = translate;

type TranslationKey = keyof Translate["fr"];

export default function Projet() {
	const { theme } = useTheme();
	const { lang } = useLang();
	const t = (key: TranslationKey): string => {
		return typedTranslations[lang][key];
	};
	return (
		<section className={theme === "dark" ? style.darkTheme : style.lightTheme}>
			<section className={style.projet} id="projets">
				<h3 className={style.title}>{t("project")}</h3>
				<ul className={style.container}>
					{projetlink.map((pro: ProjetType) => (
						<li key={pro.id} className={style.li}>
							<img src={pro.image} alt={pro.title} className={style.image} />
							<section className={style.card}>
								<a href={pro.lien} className={style.span}>
									<h3 className={style.cardTitle}>
										{pro.title ? t(pro.title as TranslationKey) : ""}
									</h3>
								</a>
								<div className={style.content}>
									<p className={style.description}>
										{pro.description
											? t(pro.description as TranslationKey)
											: ""}
									</p>
								</div>
							</section>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}
