import React from 'react';
import './Contacts.css'

const BarContacts = (props) => {
    return (
        <div className='BarContact'>
            <div className='user'>
                <i className='fa-solid fa-user-large'></i>
                <p>{props.text}</p>  
            </div>
            <button className='btnContact' onClick={props.contacter}>Contacter</button> 
        </div>
    );
};

export default BarContacts;