//React
import React from 'react';

//Composant
import Header from '../../components/Header';
import Error from "../../components/Error";

function ErrorPage() {
    return (
      <React.Fragment>
        <Header/>
        <Error errorCode={"404"} errorMessage={"Oups! La page que vous demandez n'existe pas."}/>
      </React.Fragment>
    );
  }
  
  export default ErrorPage;
  