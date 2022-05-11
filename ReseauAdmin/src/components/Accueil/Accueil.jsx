import React from 'react';
import './Accueil.css'
import Menu from '../Menu/Menu';
import BarAccueil from '../BarAccueil/BarAccueil';

const Accueil = (props) => {
    return (
        <>
            <Menu visibilityAccueil = {props.visibilityAccueil} visibilityFenContacts={props.visibilityFenContacts}/>
            <div className='Closed'><i className='fa-solid fa-angle-down' onClick={props.visibility}></i></div>
            <div className='Accueil'>
                <BarAccueil text='Listes des groupes de lecture'/>
                <BarAccueil text='Listes des abonnés'/>
                <BarAccueil text='Listes des livres'/>
                <BarAccueil text='Listes des groupes de lecture'/>
            </div>
        </>
    );
};

export default Accueil;