import React from 'react';
import IconDamage from '../../../assets/fire.svg'
import IconShield from '../../../assets/shield.svg'
import IconManager from './IconManager'

interface props {
    iconPlayer?:string;
    namePlayer?:string;
    card?:string
}
const CardGame =({iconPlayer, namePlayer, card}:props): JSX.Element=>{

return (
    <div className="cardContainer hoverSelectedCard" >
    
    <div className="centerContent" style={{flexDirection:'column', margin:'35px'}}>

    <div>
    {IconManager(card)}
    </div>

    <p>
   DAMAGE
    </p>



    </div>


    </div>
    )
}


export default CardGame;