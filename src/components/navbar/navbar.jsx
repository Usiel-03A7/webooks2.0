import Image from "next/image";
import Link from "next/link";
import navbarcss from "./navbar.module.css";
export default function Navbar() {
	return (
		<div className={navbarcss.navbar}>
			<Image width={200} height={100} src="/webooks-logo.webp" alt="" />

			<ul className={navbarcss.navbar__options}>
				<li>
					<Link className={navbarcss.a} href="/">
						Inicio
					</Link>
				</li>
				<li>
					<Link href="/books">Libros</Link>
				</li>
				<li>
					{" "}
					<Link href="#">Quienes somos</Link>{" "}
				</li>
				<li>
					<Link href="#">Invitame un cafe</Link>
				</li>
			</ul>
		</div>
	);
}
