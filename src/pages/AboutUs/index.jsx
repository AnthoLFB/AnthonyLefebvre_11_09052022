//React
import React from 'react';

//Composants
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import Footer from "../../components/Footer";

//Images
import mountainLandscape from '../../assets/images/mountainLandscape.jpg';


function AboutUs()
{
    return (
        <React.Fragment>
          <Header/>
          <main>
            <Banner image={mountainLandscape} itHaveText={false}/>
            <Collapse title="Fiabilité" width="large" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Collapse title="Respect" width="large" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse title="Service" width="large" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Collapse title="Sécurité" width="large" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
          </main>
          <Footer/>
        </React.Fragment>
      );
}

export default AboutUs