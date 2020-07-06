import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import { useForm } from "react-hook-form";
import playerIcon from '../../assets/hacker.svg'
import EnemyIcon from '../../assets/monster.svg'
import { CardPlayer, CardShield, BoardTurn, CardGame } from './components'


const Welcome = (): JSX.Element => {

const [activeCard, setActiveCard] = useState(0);

const handleSelectedCard = (cardId)=>{
console.log("selected card", cardId)
setActiveCard(cardId)
console.log("active: ", activeCard)
}




    return (
        <div className="container">

            <div className="wrapper ">
                <div className="enemy wrapperItem">
                    < CardPlayer namePlayer="Enemy" iconPlayer={EnemyIcon} />
                </div>
                <div className="shield-enemy wrapperItem">
                    <CardShield namePlayer="Enemy wrapperItem" />
                </div>
                <div className="turns wrapperItem">
                    <BoardTurn />
                </div>
                <div className="player wrapperItem">
                    <CardPlayer namePlayer="Player" iconPlayer={playerIcon} />
                </div>
                <div className="shield-player wrapperItem">
                    <CardShield namePlayer="player" />
                </div>
                <div onClick={()=>handleSelectedCard(1)} className={`colSm1 wrapperItem ${activeCard===1? 'active': null }`}>
                <CardGame  card={'damage'} />
                 </div>
                <div onClick={()=>handleSelectedCard(2)}  className={`colSm2 wrapperItem ${activeCard===2? 'active': null }`} >
                <CardGame  card={'shield'}/>
                </div>
                <div onClick={()=>handleSelectedCard(3)}  className={`colSm3 wrapperItem ${activeCard===3? 'active': null }`}>
                <CardGame  card={'heal'}/>
                 </div>
              
            </div>






        </div>);
}

export default Welcome;