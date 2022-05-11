import React from 'react';
import './FenContacts.css';
import BarContacts from '../Contacts/Contacts';
import Menu from '../Menu/Menu';

const FenAppel = (props) => {
        const Contacts=[
        {nom: 'AMANDA'},
        {nom:'AZOA'},
        {nom:'BAMBOU'},
        {nom:'DATTY'},
        {nom:'DORIA'},
        {nom:'FOHOM'},
        {nom:'KEGNE'},
        {nom:'MELI'},
        {nom:'NGOME'},
        {nom:'NOUAYOU'},
        {nom:'TABUEU'}
        ]
    return (
        <>
            <Menu visibilityAccueil = {props.visibilityAccueil} visibilityFenContacts={props.visibilityFenContacts}/>
            <div className='Closed'><i className='fa-solid fa-angle-down' onClick={props.visibility}></i></div>
            <div className='FenContacts'>
                {Contacts.map((contact, index)=>{
                    return(
                        <>
                        <BarContacts text={contact.nom} contacter={props.contacter} key={index}/>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default FenAppel;