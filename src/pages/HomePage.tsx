import Header from "../components/header/Header";
import Profil from "../components/profil/Profil";
import Projet from "../components/projet/Projet";
import Footer from "../components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import { LangProvider } from "../context/LanguageContext";
import Test from "../components/test";
export default function HomePage() {
	return (
		<LangProvider>
			<ThemeProvider>
				<Header />
				<Profil />
				<Projet />
				<Test />
				<Footer />
			</ThemeProvider>
		</LangProvider>
	);
}
