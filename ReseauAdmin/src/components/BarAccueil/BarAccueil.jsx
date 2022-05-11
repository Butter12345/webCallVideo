import React from 'react';
import './BarAccueil.css'

const BarAccueil = (props) => {
    return (
        <>
          <button className='BarAccueil'>{props.text}</button>  
        </>
    );
};

export default BarAccueil;