import { useLang } from "../context/LanguageContext";

export default function Test() {
	const { lang, toggleLang } = useLang();
	const translate = {
		hello: {
			fr: "bonjour",
			en: "hello",
		},
	};
	return (
		<section>
			<button type="button" onClick={toggleLang}>
				{lang === "en" ? "Français" : "English"}
			</button>
			<h1>{translate.hello[lang]}</h1>
		</section>
	);
}
