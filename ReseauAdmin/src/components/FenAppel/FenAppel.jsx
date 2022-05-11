import React from 'react';
import Controller from '../Controller/Controller';
import './FenAppel.css';

const FenAppel = (props) => {

    const Ajout = ()=>{
        /*let Recepteur = document.querySelector('.Recepteur')
        let div_1 = document.createElement('div')
        let div_2 = document.createElement('div')
        let recevoir = document.createElement('button')
        console.log(recevoir)
        console.log(div_1)
        let incomming= document.createElement('textarea')
        let recepteurVideo = document.createElement('video')
        div_2.appendChild(recevoir)
        div_1.appendChild(incomming)
        div_1.appendChild(div_2)
        Recepteur.appendChild(recepteurVideo)
        Recepteur.appendChild(div_2)
        Recepteur.style.display = "flex"*/
    }
    return (
        <div className='Appel'>
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
            </div>
            <Controller TerminerAppel={props.TerminerAppel} Ajout={Ajout}/>
        </div>
    );
};

export default FenAppel;