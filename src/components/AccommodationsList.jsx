//Datas
import { accommodations } from '../datas/accommodations';

//Components
import AccommodationListItem from './AccommodationsListItem';

//CSS
import '../styles/AccommodationsList.css' 

function AccommodationsList()
{
    return (
        <section className="accommodationsList">
            {accommodations.map((accommodation) =>
                <article className="accommodationsList__card" key={accommodation.id}>
                    <AccommodationListItem id={accommodation.id} title={accommodation.title} cover={accommodation.cover}/>
                </article>
            )}
        </section>
    )
}

export default AccommodationsList