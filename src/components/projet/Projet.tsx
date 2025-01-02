import style from "../projet/Projet.module.css";
import type { ProjetType } from "./index";
import { projetlink } from ".";

export default function Projet() {
	return (
		<section className={style.projet} id="projets">
			<h3 className={style.title}>Projets</h3>
			<div className={style.containerprojet}>
				{projetlink.map((pro: ProjetType) => (
					<div key={pro.id} className={style.card}>
						<img
							src={pro.image}
							alt="M.I.B Newus site de news via l'api de Theguardians"
							className={style.image}
						/>
						<h4 className={style.cardTitle}>
							<a href={pro.lien} className={style.link}>
								{pro.title}
							</a>
						</h4>
					</div>
				))}
			</div>
		</section>
	);
}
