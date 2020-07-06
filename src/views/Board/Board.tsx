import React, {useState} from 'react';
import './styles.css';
import playerIcon from '../../assets/hacker.svg'
import EnemyIcon from '../../assets/monster.svg'
import { CardPlayer, CardShield, BoardTurn, CardGame } from './components'


const Welcome = (props): JSX.Element => {
const { name } = props.location.state;
const [activeCard, setActiveCard] = useState(0);
const handleSelectedCard = (cardId)=>{
console.log("selected card", cardId)
setActiveCard(cardId)
}

    return (
        <div className="container">

            <div className="wrapper ">
                <div className="enemy wrapperItem">
                    < CardPlayer namePlayer="Monster" iconPlayer={EnemyIcon} />
                </div>
                <div className="shield-enemy wrapperItem">
                    <CardShield shield={20} />
                </div>
                <div className="turns wrapperItem">
                    <BoardTurn />
                </div>
                <div className="player wrapperItem">
                    <CardPlayer namePlayer={name} iconPlayer={playerIcon} />
                </div>
                <div className="shield-player wrapperItem">
                    <CardShield shield={20} />
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