import React, {useState} from 'react';
import './FenAssistant.css'
import SimplePeer from 'simple-peer'
import Accueil from '../Accueil/Accueil';
import FenContacts from '../FenContacts/FenContacts';
import FenAppel from '../FenAppel/FenAppel';

const FenAssistant = (props) => {
    const[VisibilityAccueil, setVisibilityAccueil]=useState(true)
    const [VisibilityFenContacts, setVisibilityFenContacts] = useState(false)
    const [VisibilityFenAppel, setVisibilityFenAppel] = useState(false)
    
    const visibilityFenContacts = ()=>{
        if(VisibilityAccueil){setVisibilityAccueil(false)}
        if(!(VisibilityFenContacts)){setVisibilityFenContacts(true)}
    }
    const visibilityAccueil = ()=>{
        if(!(VisibilityAccueil)){setVisibilityAccueil(true)}
        if((VisibilityFenContacts)){setVisibilityFenContacts(false)}
    }
    const visibilityFenAppel = ()=>{
        props.BtnVisibility()
        if(!(VisibilityFenAppel)){setVisibilityFenAppel(true)}
        if((VisibilityFenContacts)){setVisibilityFenContacts(false)}
        if(VisibilityAccueil){setVisibilityAccueil(false)}
    }
    const TerminerAppel = ()=>{
        props.BtnVisibility()
        if(VisibilityAccueil){setVisibilityAccueil(false)}
        if(!(VisibilityFenContacts)){setVisibilityFenContacts(true)}
        if((VisibilityFenAppel)){setVisibilityFenAppel(false)}
    }
    function bindEvents(p){
        p.on('signal', function(data){ 
            console.log(data)
            document.querySelector('#offer').textContent = JSON.stringify(data)})

        p.on('stream', function(stream){
            let RecepteurVideo = document.querySelector('.RecepteurVideo')
            RecepteurVideo.srcObject = stream
            RecepteurVideo.play()
        })
    }

    let p =null 

    const contacter = ()=>{
        visibilityFenAppel()
        navigator.getUserMedia({
            video:true,
            audio:true 
        },function(stream){
            p = new SimplePeer({
                initiator: true,
                stream: stream,
                trickle: false
            })
            bindEvents(p)

            let EmetteurVideo = document.querySelector('.EmetteurVideo')
            EmetteurVideo.srcObject = stream
            EmetteurVideo.play()

            document.querySelector('#recevoir').addEventListener('click',function(e){
                e.preventDefault()
                if(p == null){
                    p = new SimplePeer({
                        initiator: false,
                        trickle: false
                    })
                }
                p.signal(JSON.parse(document.querySelector('#incomming').value))

            })
        },function(){ /* TODO document why this function is empty */ })
    }
    return (
        <div className='FenAssistant'>
            {(VisibilityAccueil)?
            <Accueil visibility={props.visibility} visibilityAccueil = {visibilityAccueil}
             visibilityFenContacts={visibilityFenContacts}/>:null}
            {(VisibilityFenContacts)?
            <FenContacts visibility={props.visibility} visibilityAccueil = {visibilityAccueil}
             visibilityFenContacts={visibilityFenContacts} contacter={contacter}/>:null}
            {(VisibilityFenAppel)? <FenAppel TerminerAppel={TerminerAppel}/>:null}
        </div>
    );
};

export default FenAssistant;