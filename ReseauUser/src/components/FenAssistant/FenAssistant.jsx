import React from 'react';
import './FenAssistant.css'
import Notifications from '../Notifications/Notifications';
import ContactAdmin from '../ContactAdmin/ContactAdmin';

const FenAssistant = (props) => {
    return (
        <div className='FenAssistant'>
            <div className='Closed'><i className='fa-solid fa-angle-down' onClick={props.visibility}></i></div>
            <h2>Notifications</h2>
            <Notifications/>
            <Notifications/>
            <Notifications/>
            <ContactAdmin LancerAppel={props.LancerAppel}/>
        </div>
    );
};

export default FenAssistant;