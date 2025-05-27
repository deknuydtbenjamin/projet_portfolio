import github from "../../assets/image/github-logo.png";
import mail from "../../assets/image/mail.png";
import linkedin from "../../assets/image/linkedin-logo.png";
import style from "./Footer.module.css";
import { useLang } from "../../context/LanguageContext";
import translate from "./footer.json";

type Translate = {
	[lang in "fr" | "en"]: {
		contact: string;
	};
};
const typedTranslations: Translate = translate;

type TranslationKey = keyof Translate["fr"];

export default function Footer() {
	const { lang } = useLang();
	const t = (key: TranslationKey): string => {
		return typedTranslations[lang][key];
	};
	return (
		<footer id="contact" className={style.footer}>
			<h2 className={style.title}>{t("contact")}</h2>
			<section className={style.contact}>
				<div className={style.logo}>
					<a href="mailto:deknuydtbenjamin@hotmail.fr" className={style.mail}>
						<img src={mail} alt="mail" className={style.link} />
					</a>
				</div>
				<div className={style.logo}>
					<a href="https://github.com/deknuydtbenjamin">
						<img src={github} alt="github" className={style.link} />
					</a>
				</div>
				<div className={style.logo}>
					<a
						href="https://www.linkedin.com/in/benjamin-deknuydt/"
						className={style.link}
					>
						<img src={linkedin} alt="linkedin" className={style.link} />
					</a>
				</div>
			</section>
			<p className={style.mail}>&copy; B.Deknuydt-2025 </p>
		</footer>
	);
}
