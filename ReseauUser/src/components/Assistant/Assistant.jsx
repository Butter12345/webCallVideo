import React, {useState} from 'react';
import './Assistant.css'
import '../../assets/css/all.min.css'
import FenAssistant from '../FenAssistant/FenAssistant';
import FenAppel from '../FenAppel/FenAppel';
import SimplePeer from 'simple-peer'

const Assistant = () => {
    const [Visibility, setVisibility]=useState(false)
    const [VisibilityAppel, setVisibilityAppel]=useState(false)
    const [VisibilityBtnAssistant, setVisibilityBtnAssistant]=useState(true)

    const AssistantVisibility = ()=>{
        {(Visibility)?setVisibility(false):setVisibility(true)}
    }

    const AssistantVisibilityAppel = ()=>{
        {(VisibilityBtnAssistant)? setVisibilityBtnAssistant(false): setVisibilityBtnAssistant(true)}
        {(Visibility)? setVisibility(false): setVisibility(true)}
        {(VisibilityAppel)? setVisibilityAppel(false): setVisibilityAppel(true)}
        
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

    let p = null

    const LancerAppel = ()=>{

        AssistantVisibilityAppel()
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

    const TerminerAppel=()=>{
        AssistantVisibilityAppel()
    }
    

    return (
        <div className='Assistant'>
            {(Visibility)? <FenAssistant visibility={AssistantVisibility} LancerAppel={LancerAppel}/> : null}
            {(VisibilityAppel)? <FenAppel TerminerAppel={TerminerAppel}/> : null}
            {(VisibilityBtnAssistant)?
            
            <button className='btnAssistant'onClick={AssistantVisibility}><i className='fa-solid fa-video'></i></button>:
            null}
        </div>
        
        
    );
};

export default Assistant;