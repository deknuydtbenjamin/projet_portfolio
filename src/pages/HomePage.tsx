import Header from "../components/header/Header";
import Profil from "../components/profil/Profil";
import Projet from "../components/projet/Projet";
import Footer from "../components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
export default function HomePage() {
	return (
		<ThemeProvider>
			<Header />
			<Profil />
			<Projet />
			<Footer />
		</ThemeProvider>
	);
}
