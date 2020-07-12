import React from 'react';
interface props {
    current?: number;
    past?: number;
    left?: number;
    onPlayTurn:any;
}

const BoardTurn = ({ current, past, left, onPlayTurn }: props): JSX.Element => {
    console.log("onplay turn on board: ", onPlayTurn)
    return (
        <div className="boardTurnContainer" >
            <div className="header">
                <h3>TURNS</h3>
            </div>
            <div className="contentTurns">
                <h4>CURRENT</h4>
                <p>{current}</p>
                <h4>PAST</h4>
                <p>{past}</p>
                <h4>LEFT</h4>
                <p>{left}</p>

            </div>
            <button onClick={onPlayTurn} className='buttonSm'>END TURN</button>
        </div>
    )
}


export default BoardTurn;