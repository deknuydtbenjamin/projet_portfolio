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
							Bonjour, je m'appelle Benjamin Deknuydt, et je suis en
							reconversion professionnelle, spécialisé dans le développement
							web. Passionné par l'informatique et les nouvelles technologies,
							j'ai choisi ce domaine pour allier rigueur et créativité dans la
							résolution de problématiques concrètes.
						</p>

						<p className={style.text}>
							Récemment diplômé en tant que Développeur Web et Web Mobile
							(DWWM), et également titulaire d’un diplôme de Concepteur Designer
							UI, je possède une double compétence en design UX/UI et en
							développement web full stack. Je maîtrise des technologies telles
							que HTML, CSS, JavaScript, React, et bien d'autres.
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
