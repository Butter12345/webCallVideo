import React from 'react';
import './FenAppel.css'
import Controller from '../Controller/Controller';


const FenAppel = (props) => {
    return (
        <div className='FenAppel'>
            <div className='Emetteur'>
                <video controls className='EmetteurVideo'></video>
                <textarea id='offer'></textarea>
            </div> 
            <div className='Recepteur'>
                <video controls className='RecepteurVideo'></video>
                <div>
                    <textarea id='incomming'></textarea>
                    <div><button id='recevoir'>recevoir</button></div>
                </div>
            </div>
            <Controller TerminerAppel={props.TerminerAppel}/>
        </div>
    );
};

export default FenAppel;