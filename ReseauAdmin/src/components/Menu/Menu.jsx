import React from 'react';
import './Menu.css'
import MenuItem from '../MenuItem/MenuItem';

const Menu = (props) => {
    return (
        <div className='Menu'>
            <ul>
                <MenuItem IconsMenu='fa-solid fa-house' MenuText='Accueil' page = {props.visibilityAccueil}/>
                <MenuItem IconsMenu='fa-solid fa-users' MenuText='Contacts' page = {props.visibilityFenContacts}/>
                <MenuItem IconsMenu='fa-solid fa-bell' MenuText='Notifiactions'/>
                <MenuItem IconsMenu='fa-solid fa-bars-progress' MenuText='Historiques'/>
                <MenuItem IconsMenu='fa-solid fa-video' MenuText='Appels manques'/>
            </ul>
        </div>
    );
};

export default Menu;