export type ProjetType = {
	id: number;
	lien: string;
	image: string;
	title: string;
	description: string;
};

import mibnews from "../../assets/image/mibnews.png";
import trombi from "../../assets/image/trombinoscope.png";
import movie from "../../assets/image/movieproject.png";
import greenshare from "../../assets/image/greenshare.png";
import eatingnamnam from "../../assets/image/eating.png";

export const projetlink: ProjetType[] = [
	{
		id: 1,
		lien: "https://mib-projet-wcs.vercel.app/",
		image: mibnews,
		title: "mibnews_title",
		description: "mibnews_description",
	},
	{
		id: 2,
		lien: "https://film-project-one.vercel.app/",
		image: movie,
		title: "movie_title",
		description: "movie_description",
	},
	{
		id: 3,
		lien: "https://github.com/deknuydtbenjamin/project_trombinoscope",
		image: trombi,
		title: "trombi_title",
		description: "trombi_description",
	},
	{
		id: 4,
		lien: "https://github.com/deknuydtbenjamin/greenshare",
		image: greenshare,
		title: "greenshare_title",
		description: "greenshare_description",
	},
	{
		id: 5,
		lien: "https://github.com/deknuydtbenjamin/eatingnamnam",
		image: eatingnamnam,
		title: "eating_title",
		description: "eating_description",
	},
];
