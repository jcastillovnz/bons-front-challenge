import React from 'react';
import IconDamage from '../../../assets/fire.svg'
import IconShield from '../../../assets/shield.svg'
import IconHeal from '../../../assets/medicine.svg'

const IconManager =(icon:string): JSX.Element =>{

    switch(icon) {
    case 'damage':
    return(
    <div>
    <img src={IconDamage} className="player-icon" alt="logo"/>
    </div>)
    case 'shield':
    return(
    <div>
    <img src={IconShield} className="player-icon" alt="logo"/>
    </div>)
    case 'heal':
            return(
            <div>
            <img src={IconHeal} className="player-icon" alt="logo"/>
            </div>)

    }

}

export default IconManager;