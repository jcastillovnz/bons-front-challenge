import React, { useState } from 'react';
import './styles.css';
import playerIcon from '../../assets/hacker.svg'
import { CardPlayer, CardShield, BoardTurn, CardGame, Loader } from './components'
import { playTurn } from 'src/store/actions';


const Board = ({
    id,
    isDisableBoard,
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
    monsterEffect,
    onPlayTurn,
    cards,
    playerTurn,
    turnsLeft }: {
        onPlayCard: any,
        onPlayTurn: any,
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
        playerTurn: string,
        isDisableBoard:boolean,
        monsterEffect: { value: number, effect: string }
        cards: [{ id: string, value: number, effect: string }]
    }): JSX.Element => {

    const [activeCard, setActiveCard] = useState('');
    const handleSelectedCard = (cardId) => {
        onPlayCard(cardId)
        setActiveCard(cardId)
    }



    return (
        <div className="container">

            <div className={`wrapper ${isDisableBoard? 'disable-board' : null}`}>
                <div className={`enemy wrapperItem ${playerTurn === 'MONSTER' ? 'active' : null}`}>
                    {playerTurn === 'MONSTER' ? (<Loader type="loader-sm" />) : null}
                    < CardPlayer namePlayer={monsterName}
                        hp={monsterHp}
                        maxHp={monsterMaxHp}
                        iconPlayer={monsterImage} />

                   {  monsterEffect.effect ?  (<div style={{ textAlign: 'center', color: 'red' }}>
                        {monsterName} has played {monsterEffect.effect} value:  {monsterEffect.value}
                    </div>):null}

                </div>
                <div className="shield-enemy wrapperItem">
                    <CardShield shield={monsterShield} />
                </div>
                <div className="turns wrapperItem">
                    <BoardTurn onPlayTurn={onPlayTurn}
                        current={currentTurn}
                        maxTurns={maxTurns}
                        left={turnsLeft} />
                </div>
                <div className={`player wrapperItem ${playerTurn === 'PLAYER' ? 'active' : null}`}   >
                    <CardPlayer namePlayer={playerName}
                        hp={playerHp}
                        maxHp={playerMaxHp}
                        iconPlayer={playerIcon} />

                </div>
                <div className="shield-player wrapperItem">
                    <CardShield shield={playerShield} />
                </div>

                {cards.slice(-3).map((card, index) => (
                    <div key={card.id} onClick={() => handleSelectedCard(card.id)}
                        className={`colSm${index + 1}
                         wrapperItem ${activeCard === card.id ? 'active' : null}`}>
                        <CardGame card={card.effect} value={card.value} />
                    </div>))}
                 
            </div>
        </div>);
}

export default Board;