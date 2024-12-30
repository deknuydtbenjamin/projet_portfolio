import { NavLink } from "react-router-dom";
import { navlinks } from "./index";
import type { NavLinkType } from "./index";
import style from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className={theme === "dark" ? style.darkTheme : style.lightTheme}>
			<nav className={style.nav}>
				<ul className={style.list}>
					{navlinks.map((elem: NavLinkType) => (
						<li key={elem.id}>
							<NavLink to={elem.link} className={style.li}>
								{elem.label}
							</NavLink>
						</li>
					))}
				</ul>
				<label className={style.toggle}>
					<input
						type="checkbox"
						onClick={toggleTheme}
						className={style.checkbox}
					/>
					<div className={style.slider}> {theme === "dark"}</div>
				</label>
			</nav>
		</header>
	);
}
