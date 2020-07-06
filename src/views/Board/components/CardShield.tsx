import React from 'react';
import shieldIcon from '../../../assets/shield.svg'



interface props {
    shield?:number;
}

const CardPlayer =({ shield }:props):JSX.Element=>{
return (
    <div className="shieldContainer" >
    
    <div>
    <img src={shieldIcon} className="shield-icon imgCenter" alt="Icon" />
    </div>
    <div className="textCenter" >
    <h4>SHIELD: {shield}  </h4>  
    </div>
    </div>
    )
}


export default CardPlayer;