import photo from "../../assets/image/benjamin.jpg";
import style from "../profil/Profil.module.css";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";
import translate from "./profil.json";
type Translate = {
	[lang in "fr" | "en"]: {
		about: string;
		profil_intro: string;
		profil_experience: string;
		profil_contact_start: string;
		profil_contact_email: string;
		profil_contact_middle: string;
		profil_contact_linkedin: string;
		profil_contact_end: string;
	};
};
const typedTranslations: Translate = translate;

type TranslationKey = keyof Translate["fr"];

export default function Profil() {
	const { theme } = useTheme();
	const { lang } = useLang();
	const t = (key: TranslationKey): string => {
		return typedTranslations[lang][key];
	};
	return (
		<section className={theme === "dark" ? style.darkTheme : style.lightTheme}>
			<section id="apropos" className={style.container}>
				<h3 className={style.title}>{t("about")}</h3>
				<div className={style.profil}>
					<img src={photo} alt=" benjamin" className={style.photo} />
					<div>
						<p className={style.text}>{t("profil_intro")}</p>

						<p className={style.text}>{t("profil_experience")}</p>
						<p className={style.text}>
							{t("profil_contact_start")}
							<a
								href="mailto:deknuydtbenjamin@hotmail.fr"
								className={style.lien}
							>
								{t("profil_contact_email")}
							</a>
							{t("profil_contact_middle")}
							<NavLink
								to="https://www.linkedin.com/in/benjamin-deknuydt/"
								className={style.lien}
							>
								{t("profil_contact_linkedin")}
							</NavLink>
							{t("profil_contact_end")}
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
