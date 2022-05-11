//Liens
import { NavLink } from "react-router-dom";


//Images
import logo from '../assets/images/logo.jpg';

//CSS
import '../styles/Header.css';
import '../styles/responsive/Header.css';

function Header()
{
    return (
        <header>
            <img className="header__image" src={logo} alt="Kasa"/>
            <nav className="header__navbar">
                <ul className="header__navbar__list">
                    <li className="header__navbar__list__item"><NavLink className="header__navbar__list__item__link" to="/">Accueil</NavLink></li>
                    <li className="header__navbar__list__item"><NavLink className="header__navbar__list__item__link" to="/a-propos">A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header