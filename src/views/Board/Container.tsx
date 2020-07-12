import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './styles.css';
import {
    getGameByGameId,
    getPlayerCardsByPlayerId,
    setPlayerSelectedCard,
    PlayNextTurnByGameId,
    setPlayerEffect,
    playTurn,
    setPlayerTurn
} from '../../store/actions'
import  { Loader } from './components'
import { useSelector } from 'react-redux';
import { getGameData } from './../../store/selector';
import Board from './Board';
const Container = (props): JSX.Element => {
    const gameData = useSelector(getGameData);
    const dispatch = useDispatch()
    const { currentTurn, playerId, monsterId, showLoader, 
        playerSelectedCard, monsterEffect } = gameData

    useEffect(() => {
        dispatch(getGameByGameId(gameData.id))
    }, [])


    useEffect(() => {
      const newPlayerTurn =  currentTurn%2===0? 'PLAYER': 'MONSTER';
      dispatch(setPlayerTurn({playerTurn:newPlayerTurn}))
    }, [currentTurn])

    useEffect(() => {
        console.log("monsterEffect: ", monsterEffect)
        }, [monsterEffect])


    const handlePlayCard = (cardId) => {
    dispatch(setPlayerSelectedCard({cardId}))
    }

    const handleEndTurn = () => {

     dispatch(playTurn({currentTurn, 
        gameId: gameData.id, 
        value:2,
        effect:'effect', 
        playerSelectedCard, 
        playerId, 
        monsterId }) ) 

  }



    return(
        <div>
      {showLoader? ( <Loader type="loader-lg"/>):
       ( <Board
       onPlayTurn={()=> handleEndTurn() }
        onPlayCard={(cardId) => handlePlayCard(cardId)}
        {...gameData}
        {...props} />)}
        </div>
        )
}

export default Container;