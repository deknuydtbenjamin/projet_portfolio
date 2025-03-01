export type ProjetType = {
	id: number;
	lien: string;
	image: string;
	title: string;
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
	},
	{
		id: 2,
		lien: "https://film-project-one.vercel.app/",
		image: movie,
		title: "Movie Project",
	},
	{
		id: 3,
		lien: "/",
		image: trombi,
		title: "Trombinoscope",
	},
	{
		id: 4,
		lien: "/",
		image: greenshare,
		title: "GreenShare",
	},
];
