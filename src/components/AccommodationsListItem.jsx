//Liens
import {Link} from 'react-router-dom'

//CSS
import '../styles/AccommodationsList.css'
import '../styles/responsive/AccommodationsList.css'  

function AccommodationsListItem({id, title, cover})
{
    return (
        <Link className="accommodationsList__card__link" to={`logement/${id}`}>
            <img className="accommodationsList__card__link__image" src={cover} alt={title}/>
            <div className="accommodationsList__card__link__container">
                <h1 className="accommodationsList__card__link__container__title">{title}</h1>
            </div>
        </Link> 
    );
}

export default AccommodationsListItem