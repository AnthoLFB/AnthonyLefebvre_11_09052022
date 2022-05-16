//ReactRouter
import {Link} from "react-router-dom";

//CSS
import "../styles/components/Error.css";
import "../styles/responsive/components/Error.css";

function Error ({errorCode, errorMessage})
{
    return  (
        <section className="error">
            <h1 className="error__code">{errorCode}</h1>
            <h2 className="error__message">{errorMessage}</h2>
            <Link className="error__link" to="/">Retourner sur la page d’accueil</Link>
        </section>
    )
}

export default Error