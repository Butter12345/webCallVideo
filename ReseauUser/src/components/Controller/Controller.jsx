import React, {useState} from 'react';
import './Controller.css'

const Controller = (props) => {
    const[micro, setmicro]=useState(true)

    const Micro = ()=>{
        {(document.querySelector('.EmetteurVideo').volume === 0)? document.querySelector('.EmetteurVideo').volume = 0.5: 
        document.querySelector('.EmetteurVideo').volume = 0 }
        {(micro)?setmicro(false):setmicro(true)}
    }

    const[video, setvideo]=useState(true)

    const Video = ()=>{
        {(video)?setvideo(false):setvideo(true)}
    }

    return (
        <div className='Controller'>
            {(micro)?<i className='fa-solid fa-microphone' onClick={Micro}></i>:
            <i className='fa-solid fa-microphone-slash' onClick={Micro}></i>}
            <i className='fa-solid fa-phone' onClick={props.TerminerAppel}></i>
            {(video)?<i className='fa-solid fa-video' onClick={Video}></i>:
            <i className='fa-solid fa-video-slash' onClick={Video}></i>}
        </div>
    );
};

export default Controller;