//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import AccommodationsList from '../../components/AccommodationsList';
import Footer from '../../components/Footer';

//Images
import coastalLandscape from '../../assets/images/coastalLandscape.jpg';


function Home() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Banner image={coastalLandscape} itHaveText={true} text="Chez vous, partout et ailleurs"/>
        <AccommodationsList/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
