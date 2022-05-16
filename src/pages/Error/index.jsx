//React
import React from 'react';

//Composant
import Header from '../../components/Header';
import Error from "../../components/Error";
import Footer from "../../components/Footer";

function ErrorPage() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Error errorCode={"404"} errorMessage={"Oups! La page que vous demandez n'existe pas."}/>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
  
  export default ErrorPage;
  