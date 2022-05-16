//Composants
import Star from "./Star";

//CSS
import "../styles/components/AccommodationHost.css";
import "../styles/responsive/components/AccommodationHost.css";

function AccommodationHost({host, rating})
{
    return (
        <section className="accommodation-information__host">
            <div className="accommodation-information__host__personal-data-container">
                <p className="accommodation-information__host__personal-data-container__name">{host.name}</p>
                <img className="accommodation-information__host__personal-data-container__image" src={host.picture} alt={`Profil de ${host.name}`}/>
            </div>
            <p className="accommodation-information__host__rating-container">{<Star rating={rating} maxRating={5}/>}</p>
        </section>
    )
}

export default AccommodationHost