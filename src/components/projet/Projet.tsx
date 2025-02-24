import style from "../projet/Projet.module.css";
import type { ProjetType } from "./index";
import { projetlink } from ".";
import { useTheme } from "../../context/ThemeContext";

export default function Projet() {
	const { theme } = useTheme();
	return (
		<section className={theme === "dark" ? style.darkTheme : style.lightTheme}>
			<section className={style.projet} id="projets">
				<h3 className={style.title}>Projets</h3>
				<ul className={style.container}>
					{/* <div className={style.containerprojet}> */}
					{projetlink.map((pro: ProjetType) => (
						<li key={pro.id} className={style.li}>
							<img src={pro.image} alt={pro.title} className={style.image} />
							<div className={style.content}>
								<a href={pro.lien} className={style.span}>
									<h3 className={style.cardTitle}>{pro.title}</h3>
								</a>
							</div>
						</li>
					))}
					{/* </div> */}
				</ul>
			</section>
		</section>
	);
}
