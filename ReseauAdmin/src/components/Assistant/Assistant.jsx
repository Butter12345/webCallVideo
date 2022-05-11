import React, {useState} from 'react';
import './Assistant.css';
import '../../assets/css/all.min.css';
import FenAssistant from '../FenAssistant/FenAssistant';

const Assistant = () => {
    const [Visibility, setVisibility]=useState(false)
    const [VisibilityBtn, setVisibilityBtn] = useState(true)

    const AssistantVisibility = ()=>{
        {(Visibility)?setVisibility(false):setVisibility(true)}
    }
    const BtnVisibility = ()=>{
        {(VisibilityBtn)?setVisibilityBtn(false):setVisibilityBtn(true)}
    }
    return (
        <>
            {(Visibility)?<div className='Assistantvisible'><FenAssistant visibility={AssistantVisibility}
            BtnVisibility={BtnVisibility}/></div> :
             null}
            {(VisibilityBtn)?
            <button className='btnAssistant'onClick={AssistantVisibility}><i className='fa-solid fa-video'></i></button>:
            null}
            
        </>
        
    );
};

export default Assistant;