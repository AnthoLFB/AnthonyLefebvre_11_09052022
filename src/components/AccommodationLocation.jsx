//Composants
import Tag from "./Tag";

//CSS
import "../styles/AccommodationLocation.css"
import "../styles/responsive/AccommodationLocation.css"

function AccommodationLocation({title, location, tags})
{
    return (
        <section className="accommodation-information__location">
            <h1 className="accommodation-information__location__title">{title}</h1>
            <h2 className="accommodation-information__location__address">{location}</h2>
            <ul className="accommodation-information__location__tags-list">
                {tags.map((tag, index) => <li key={`${tag}-${index}`}className="accommodation-information__location__tags-list__item">{<Tag name={tag}/>}</li>)}
            </ul>	
        </section>
    )
}

export default AccommodationLocation