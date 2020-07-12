import React from 'react';
interface props {
    iconPlayer:string;
    namePlayer:string;
    hp:number;
    maxHp:number;
}

const CardPlayer =({iconPlayer, namePlayer, maxHp, hp}:props ):JSX.Element=>{
return (
    <div className="cardContainer" >
    
    <div>
    <img src={iconPlayer} className="player-icon" alt="Icon card" />
    </div>
    <div style={{marginLeft:40}}>
    <h4> {namePlayer}</h4>  
    </div>
    <div style={{marginRight:'10px', marginLeft:'10px'}}>
    <h4> |  </h4>  
    </div>
    <div>
    <h4>HP {maxHp} / {hp} </h4>  
    </div>
    </div>
    )
}


export default CardPlayer;