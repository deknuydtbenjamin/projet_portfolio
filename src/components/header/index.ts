export type NavLinkType = {
	id: number;
	label: string;
	link: string;
};

export const navlinks: NavLinkType[] = [
	{
		id: 1,
		label: "A propos",
		link: "#apropos",
	},
	{
		id: 2,
		label: "Projets",
		link: "#projets",
	},
	{
		id: 3,
		label: "Contact",
		link: "#contact",
	},
];

import logohtml from "../../assets/image/html.png";
import logocss from "../../assets/image/css3.png";
import logojavascript from "../../assets/image/JavaScript.png";
import logoreact from "../../assets/image/React.png";
import logovite from "../../assets/image/Vitejs-logo.svg.png";
import logotypescript from "../../assets/image/Typescript.png";
import logofigma from "../../assets/image/figma.png";
import logomysql from "../../assets/image/mysql-logo.webp";
import logonode from "../../assets/image/nodejs.png";

export type LogoLangType = {
	id: number;
	name: string;
	logo: string;
};

export const logoLang: LogoLangType[] = [
	{
		id: 1,
		name: "HTML",
		logo: logohtml,
	},
	{
		id: 2,
		name: "CSS",
		logo: logocss,
	},
	{
		id: 3,
		name: "JavaScript",
		logo: logojavascript,
	},
	{
		id: 4,
		name: "REACT",
		logo: logoreact,
	},
	{
		id: 5,
		name: "VITE",
		logo: logovite,
	},
	{
		id: 6,
		name: "TypeScript",
		logo: logotypescript,
	},
	{
		id: 7,
		name: "Figma",
		logo: logofigma,
	},
	{
		id: 8,
		name: "MySQL",
		logo: logomysql,
	},
	{
		id: 9,
		name: "NodeJs",
		logo: logonode,
	},
];
