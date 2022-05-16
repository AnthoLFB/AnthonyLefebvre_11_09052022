//Images
import logoBlanc from "../assets/images/logoBlanc.png";

//CSS
import "../styles/components/Footer.css";
import "../styles/responsive/components/Footer.css";

function Footer()
{
    return (
        <footer className="footer">
            <img className="footer__image" src={logoBlanc} alt="Kasa - Logo entreprise"/>
            <p className="footer__catchphrase">© 2022 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer