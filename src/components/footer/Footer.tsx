import github from "../../assets/image/github-logo.png";
import mail from "../../assets/image/mail.png";
import linkedin from "../../assets/image/linkedin-logo.png";
import style from "./Footer.module.css";

export default function Footer() {
	return (
		<footer id="contact" className={style.footer}>
			<h2 className={style.title}>Contactez moi</h2>
			<section className={style.contact}>
				<div className={style.logo}>
					<a href="mailto:deknuydtbenjamin@hotmail.fr" className={style.mail}>
						<img src={mail} alt="mail" className={style.link} />
					</a>
				</div>
				<div className={style.logo}>
					<a href="https://github.com/deknuydtbenjamin">
						<img src={github} alt="github" className={style.link} />
					</a>
				</div>
				<div className={style.logo}>
					<a
						href="https://www.linkedin.com/in/benjamin-deknuydt/"
						className={style.link}
					>
						<img src={linkedin} alt="linkedin" className={style.link} />
					</a>
				</div>
			</section>
			<p className={style.mail}>&copy; B.Deknuydt-2025 </p>
		</footer>
	);
}
