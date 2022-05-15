//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import AccommodationInformation from '../../components/AccommodationInformation';

function Accommodation() 
{
  return (
    <React.Fragment>
      <Header/>
      <AccommodationInformation/>
    </React.Fragment>
  );
}
  
  export default Accommodation;
  