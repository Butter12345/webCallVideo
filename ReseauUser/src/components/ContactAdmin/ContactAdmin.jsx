import React from 'react';
import './ContactAdmin.css'

const ContactAdmin = (props) => {


    return (
        <div className='ContactAdmin'>
            <p>Contact the admin</p>
            <i className='fa-solid fa-video'id='btnAppel' onClick={props.LancerAppel}></i>   
        </div>
    );
};

export default ContactAdmin;