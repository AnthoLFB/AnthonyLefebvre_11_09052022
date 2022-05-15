//React
import React from 'react';

//ReactRouter
import { useParams } from 'react-router-dom'

//Datas
import { accommodations } from '../datas/accommodations';

//Components
import Carrousel from './Carrousel';

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
    </React.Fragment>
  );
}
  
  export default AccommodationInformation;
  