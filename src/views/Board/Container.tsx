import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import './styles.css';
import {
    getGameByGameId,
    setPlayerSelectedCard,
    playTurn,
    setPlayerTurn
} from '../../store/actions'
import { Loader } from './components';
import { useSelector } from 'react-redux';
import { getGameData } from './../../store/selector';
import { Modal } from './components'
import Board from './Board';
const Container = (props): JSX.Element => {
    const gameData = useSelector(getGameData);
    const dispatch = useDispatch()
    const [showGameOverModal, setShowGameOverModal] = useState(false)
    const [showWinnerGameModal, setshowWinnerGameModal] = useState(false)
    const { currentTurn,
        playerId,
        monsterId,
        showLoader,
        playerSelectedCard } = gameData
    useEffect(() => {
        dispatch(getGameByGameId(gameData.id))
    }, [])

    useEffect(() => {
        const newPlayerTurn = currentTurn % 2 === 0 ? 'PLAYER' : 'MONSTER';
        dispatch(setPlayerTurn({ playerTurn: newPlayerTurn }))
        if (currentTurn === 20) {
            setShowGameOverModal(true)
        }
    }, [currentTurn])

    const handlePlayCard = (cardId) => {
        dispatch(setPlayerSelectedCard({ cardId }))
    }

    const handleEndTurn = () => {

        dispatch(playTurn({
            currentTurn,
            gameId: gameData.id,
            value: 2,
            effect: 'effect',
            playerSelectedCard,
            playerId,
            monsterId
        }))

    }

    return (
        <div>
            <Modal show={showWinnerGameModal} handleClose={() => setshowWinnerGameModal(false)}  >
            <h3>
                
            CONGRATULATION!
                    YOU WIN!
                
                </h3>
            </Modal>
            <Modal show={showGameOverModal} handleClose={() => setShowGameOverModal(false)}  >
            <h3>UPS... YOU LOSE! </h3>
            </Modal>


            {showLoader ? (<Loader type="loader-lg" />) :
                (<Board
                    onPlayTurn={() => handleEndTurn()}
                    onPlayCard={(cardId) => handlePlayCard(cardId)}
                    {...gameData}
                    {...props} />)}
        </div>
    )
}

export default Container;