//Composants
import Collapse from '../components/Collapse';

//CSS
import  "../styles/components/AccommodationDescription.css"
import  "../styles/responsive/components/AccommodationDescription.css"

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