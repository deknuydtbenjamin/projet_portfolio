import photo from "../../assets/image/benjamin.jpg";
import style from "../profil/Profil.module.css";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

export default function Profil() {
	const { theme } = useTheme();
	return (
		<section className={theme === "dark" ? style.darkTheme : style.lightTheme}>
			<section id="apropos" className={style.container}>
				<h3 className={style.title}>A Propos</h3>
				<div className={style.profil}>
					<img src={photo} alt=" benjamin" className={style.photo} />
					<div>
						<p className={style.text}>
							Bonjour, je m'appelle Benjamin Deknuydt, Je suis actuellement en
							reconversion professionnelle et je me spécialise dans le
							développement web. Passionné par l'informatique et les nouvelles
							technologies, j'ai décidé de me lancer dans ce domaine afin de
							combiner ma rigueur et ma créativité pour résoudre des problèmes
							concrets.
						</p>

						<p className={style.text}>
							Actuellement en formation Developpeur Web, je développe des
							compétences solides en HTML, CSS, JavaScript, React etc. Mon
							objectif est de mettre à profit mes connaissances théoriques en
							situation réelle, c'est pourquoi je recherche activement une
							alternance à partir de février 2024.
						</p>
						<p className={style.text}>
							Pour toute information complémentaire ou pour échanger sur une
							opportunité, n'hésitez pas à me contacter par{" "}
							<a
								href="mailto:deknuydtbenjamin@hotmail.fr"
								className={style.lien}
							>
								email
							</a>{" "}
							ou via
							<NavLink
								to="https://www.linkedin.com/in/benjamin-deknuydt/"
								className={style.lien}
							>
								LinkedIn.
							</NavLink>
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
