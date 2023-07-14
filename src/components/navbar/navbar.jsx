import Image from "next/image"
import navbarcss from './navbar.module.css'
export default function Navbar() {
  return (
    <div className={navbarcss.navbar}>
    <Image width={200} height={100} src="/webooks-logo.webp" alt="" />
    
     <ul className={navbarcss.navbar__options}>
       <li><a  href="#">Inicio</a></li>
       <li><a href="/books">Libros</a></li>
       <li> <a href="#">Quienes somos</a> </li>
       <li><a href="#">Invitame un cafe</a></li>
     </ul>
    </div>
  )
}