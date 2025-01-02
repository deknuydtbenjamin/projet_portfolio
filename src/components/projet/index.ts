export type ProjetType = {
	id: number;
	lien: string;
	image: string;
	title: string;
};

import mibnews from "../../assets/image/mibnews.png";
import trombi from "../../assets/image/trombinoscope.png";

export const projetlink: ProjetType[] = [
	{
		id: 1,
		lien: "https://mib-projet-wcs.vercel.app/",
		image: mibnews,
		title: "M.I.B News",
	},
	{
		id: 2,
		lien: "/",
		image: trombi,
		title: "Trombinoscope",
	},
];
