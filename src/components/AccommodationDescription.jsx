//Composants
import Collapse from '../components/Collapse';

//CSS
import  "../styles/AccommodationDescription.css"
import  "../styles/responsive/AccommodationDescription.css"

function AccommodationDescription({description, equipments})
{
    return (
        <section className='description'> 
            <Collapse title="Description" width="small" text={description}/>
            <Collapse title="Équipements" width="small" text={equipments.map((name, index) => <li className='description__equipments-list' key={`${name}-${index}`}>{name}</li>)}/>
            
        </section>
    )
}

export default AccommodationDescription