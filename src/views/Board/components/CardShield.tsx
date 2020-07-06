import React from 'react';
import shieldIcon from '../../../assets/shield.svg'



interface props {
    namePlayer?:string;
}

const CardPlayer =({ namePlayer}:props):JSX.Element=>{
return (
    <div className="shieldContainer" >
    
    <div>
    <img src={shieldIcon} className="shield-icon imgCenter" />
    </div>
    <div className="textCenter" >
    <h4>SHIELD: 20  </h4>  
    </div>
    </div>
    )
}


export default CardPlayer;