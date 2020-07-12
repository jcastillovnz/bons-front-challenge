import React, { useState } from 'react';
import './styles.css';
import playerIcon from '../../assets/hacker.svg'
import { CardPlayer, CardShield, BoardTurn, CardGame } from './components'
import { playTurn } from 'src/store/actions';


const Board = ({
    id,
    playerName,
    playerHp,
    playerMaxHp,
    playerShield,
    monsterImage,
    monsterName,
    monsterHp,
    monsterMaxHp,
    monsterShield,
    currentTurn,
    maxTurns,
    onPlayCard,
    onPlayTurn,
    cards,
    playerTurn,
    turnsLeft }: {
        onPlayCard: any,
        onPlayTurn:any,
        id: string,
        playerName: string,
        monsterImage: string,
        playerMaxHp: number,
        playerHp: number,
        playerShield: number,
        monsterName: string,
        monsterMaxHp: number,
        monsterHp: number,
        monsterShield: number,
        currentTurn: number,
        maxTurns: number,
        turnsLeft: number,
        playerTurn:string,
        cards: [{ id: string, value: number, effect: string }]
    }): JSX.Element => {

    const [activeCard, setActiveCard] = useState('');
    const handleSelectedCard = (cardId) => {
         onPlayCard(cardId)
         setActiveCard(cardId)
    }



    return (
        <div className="container">

            <div className="wrapper ">
                <div className={`enemy wrapperItem ${playerTurn==='MONSTER'? 'active' : null}`}>
                    < CardPlayer namePlayer={monsterName}
                        hp={monsterHp}
                        maxHp={monsterMaxHp}
                        iconPlayer={monsterImage} />
                </div>
                <div className="shield-enemy wrapperItem">
                    <CardShield shield={monsterShield} />
                </div>
                <div className="turns wrapperItem">
                    <BoardTurn onPlayTurn={onPlayTurn} current={currentTurn} past={10} left={turnsLeft} />
                </div>
                <div className={`player wrapperItem ${playerTurn==='PLAYER'? 'active' : null}`}   >
                    <CardPlayer namePlayer={playerName}
                        hp={playerHp}
                        maxHp={playerMaxHp}
                        iconPlayer={playerIcon} />
                </div>
                <div className="shield-player wrapperItem">
                    <CardShield shield={playerShield} />
                </div>
                {cards.map((card, index) => (
                    <div key={card.id} onClick={() => handleSelectedCard(card.id)}
                        className={`colSm${index + 1}
                         wrapperItem ${activeCard === card.id ? 'active' : null}`}>
                        <CardGame card={card.effect} />
                    </div>))}
            </div>
        </div>);
}

export default Board;