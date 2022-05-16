//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import AccommodationInformation from '../../components/AccommodationInformation';
import Footer from "../../components/Footer";

function Accommodation() 
{
  return (
    <React.Fragment>
      <Header/>
      <main>
        <AccommodationInformation/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
  
  export default Accommodation;
  