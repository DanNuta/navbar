import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TownCityContext from "../src/context/TownCityContext";


ReactDOM.render(

    <TownCityContext>

            <App/>

    </TownCityContext>
    
,

document.getElementById('root'));


