import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopCtx from "../src/context/ShopCtx";


ReactDOM.render(

    <ShopCtx>
        <App/>
    </ShopCtx>
,

document.getElementById('root'));


