//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import AccommodationsList from '../../components/AccommodationsList';

//Images
import coastalLandscape from '../../assets/images/coastalLandscape.jpg';


function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Banner image={coastalLandscape} itHaveText={true} text="Chez vous, partout et ailleurs"/>
      <AccommodationsList/>
    </React.Fragment>
  );
}

export default Home;
