//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import Banner from '../../components/Banner';

//Images
import coastalLandscape from '../../assets/images/coastalLandscape.jpg';
import AccommodationsList from '../../components/AccommodationsList';

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
