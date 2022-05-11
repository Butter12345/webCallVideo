import React from 'react';
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <>
            <li className='MenuItem' onClick={props.page}>
                <i className={props.IconsMenu}></i>
                <p>{props.MenuText}</p>
            </li>
        </>
    );
};

export default MenuItem;