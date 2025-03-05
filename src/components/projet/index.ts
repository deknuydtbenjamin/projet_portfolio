export type ProjetType = {
	id: number;
	lien: string;
	image: string;
	title: string;
	description?: string;
};

import mibnews from "../../assets/image/mibnews.png";
import trombi from "../../assets/image/trombinoscope.png";
import movie from "../../assets/image/movieproject.png";
import greenshare from "../../assets/image/greenshare.png";

export const projetlink: ProjetType[] = [
	{
		id: 1,
		lien: "https://mib-projet-wcs.vercel.app/",
		image: mibnews,
		title: "M.I.B News",
		description:
			" M.I.B News est un projet réalisé dans le cadre de ma formation en développement web. L'objectif était de créer un site de visualisation d'articles de presse en utilisant l'API de The Guardian. Le projet met en œuvre des articles d'actualité en temps réel, permettant aux utilisateurs de consulter les derniers titres publiés sur cette source de renom. Ce projet avait également pour but de m'aider à renforcer mes compétences en React et en gestion d'API.",
	},
	{
		id: 2,
		lien: "https://film-project-one.vercel.app/",
		image: movie,
		title: "Movie Project",
		description:
			"Movie est une application web dédiée aux films et séries, développée dans le cadre de ma formation, permettant aux utilisateurs de parcourir des films et series et de trier les contenus par type (film ou série)",
	},
	{
		id: 3,
		lien: "/",
		image: trombi,
		title: "Trombinoscope",
		description:
			"Trombinoscope interactif, développé dans le cadre de ma formation, permettant aux utilisateurs de consulter les profils des membres d'une équipe, avec photos, informations de contact et descriptions, une interface conviviale pour favoriser la collaboration et renforcer les liens au sein des groupes.",
	},
	{
		id: 4,
		lien: "/",
		image: greenshare,
		title: "GreenShare",
		description:
			"GreenShare est une plateforme de partage de plantes, développée dans le cadre de ma formation, permettant aux utilisateurs de télécharger des photos de leurs plantes, ajouter des descriptions et des conseils de culture, ainsi que commenter les contributions des autres membres pour échanger des astuces et découvrir de nouvelles variétés.",
	},
];
