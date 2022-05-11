//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Reset css & font
import './styles/Reset.css';
import './styles/responsive/global.css';
import './styles/Font.css';

//Pages
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';

//Router
import { BrowserRouter as Router, Routes as RoutesList, Route } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RoutesList>
        
        {/*Accueil*/}
        <Route path="/" element={<Home/>}></Route>
        
        {/*Logement*/}
        <Route path="/logement/:id" element={<Accommodation/>}></Route>

        {/*A propos*/}
        <Route path="/a-propos" element={<AboutUs/>}></Route>

        {/*Page d'erreur*/}
        <Route path="*" element={<Error/>}></Route>
        
      </RoutesList>
    </Router>
  </React.StrictMode>
);
