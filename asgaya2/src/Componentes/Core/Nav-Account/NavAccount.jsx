import { Link } from "react-router-dom"
import '../Nav-Account/NavAccount.css'

const NavAccount = ()=>{
    return (
        <ul className="nav-account">
            <li>
                <Link to="/profile">Mi cuenta</Link>
            </li>
            <li>
                <Link to="/apadrina">Apadrina</Link>
            </li>
            <li>
                <Link to="/favoritos">Mis favoritos</Link>
            </li>
        </ul>

    )
}

export default NavAccount