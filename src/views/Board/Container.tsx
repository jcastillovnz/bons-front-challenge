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
    const [showTieGameModal, setshowTieGameModal] = useState(false)

    const {
        currentTurn,
        playerId,
        monsterId,
        showLoader,
        monsterHp,
        playerHp,
        playerSelectedCard } = gameData
    useEffect(() => {
        dispatch(getGameByGameId(gameData.id))
    }, [])

    useEffect(() => {
        const newPlayerTurn = currentTurn % 2 === 0 ? 'PLAYER' : 'MONSTER';
        dispatch(setPlayerTurn({ playerTurn: newPlayerTurn }))
        if (currentTurn === 20) {
            setshowTieGameModal(true)
        }
        if (monsterHp === 0) {
            setShowGameOverModal(true)
        }
        if (playerHp === 0) {
            setshowWinnerGameModal(true)
        }
    }, [currentTurn])
    const handlePlayCard = (cardId) => {
        dispatch(setPlayerSelectedCard({ cardId }))
    }
    const handleEndTurn = () => {
        if (playerSelectedCard) {
            dispatch(playTurn({
                currentTurn,
                gameId: gameData.id,
                value: null,
                effect: null,
                playerSelectedCard,
                playerId,
                monsterId
            }))
        }
        else {
            alert("Select one card, before play ")
        }


    }

    return (
        <div>
            <Modal show={showTieGameModal} handleClose={() => setshowTieGameModal(false)}>
                <h3> TIE TRY AGAIN! 🏳</h3>
            </Modal>
            <Modal show={showWinnerGameModal} handleClose={() => setshowWinnerGameModal(false)}>
                <h3>CONGRATULATION! YOU WIN! 🎊🎉</h3>
            </Modal>
            <Modal show={showGameOverModal} handleClose={() => setShowGameOverModal(false)}  >
                <h3>UPS... YOU LOSE! 😢</h3>
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