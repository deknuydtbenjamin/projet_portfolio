import { useState, useContext, createContext, useEffect } from "react";
import type { ReactNode } from "react";

type LanguageContextType = {
	lang: "fr" | "en";
	toggleLang: () => void;
};

const langContext = createContext<LanguageContextType | undefined>(undefined);

type LangProviderProps = {
	children: ReactNode;
};

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
	const [lang, setLang] = useState<"fr" | "en">("fr");

	// useEffect(() => {
	// 	document.body.className = lang;
	// }, [lang]);
	useEffect(() => {
		document.body.classList.remove("fr", "en");
		document.body.classList.add(lang);
	}, [lang]);

	const toggleLang = () => {
		setLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
	};
	return (
		<langContext.Provider value={{ lang, toggleLang }}>
			{children}
		</langContext.Provider>
	);
};
export const useLang = () => {
	const context = useContext(langContext);
	if (!context) {
		throw new Error("useLang must be used within a LangProvider");
	}
	return context;
};
