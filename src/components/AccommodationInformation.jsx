//React
import React from 'react';

//ReactRouter
import { useParams } from 'react-router-dom'

//Datas
import { accommodations } from '../datas/accommodations';

//Components
import Carrousel from './Carrousel';
import AccommodationLocation from './AccommodationLocation';
import AccommodationHost from './AccommodationHost';
import AccommodationDescription from './AccommodationDescription';

//CSS
import "../styles/components/AccommodationInformation.css";
import "../styles/responsive/components/AccommodationInformation.css";


function AccommodationInformation() 
{

  //Récupération du logement grâce à son id
  const { id } = useParams();

  let currentAccommodation;

  accommodations.forEach(accommodation => {
      if(accommodation.id === id)
      {
        currentAccommodation = accommodation;
      }
  });
  
  return (
    <React.Fragment>
      <Carrousel gallery={currentAccommodation.pictures}/>
      <section className="accommodation-information">
        <AccommodationLocation title={currentAccommodation.title} location={currentAccommodation.location} tags={currentAccommodation.tags}/>
        <AccommodationHost host={currentAccommodation.host} rating={currentAccommodation.rating}/>
      </section>
      <AccommodationDescription equipments={currentAccommodation.equipments} description={currentAccommodation.description}/>
    </React.Fragment>
  );
}
  
  export default AccommodationInformation;
  