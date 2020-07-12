import React from 'react';
interface props {
    current?: number;
    maxTurns?: number;
    left?: number;
    onPlayTurn: any;
}

const BoardTurn = ({ current, left, onPlayTurn, maxTurns }: props): JSX.Element => {
    return (
        <div className="boardTurnContainer" >
            <div className="header">
                <h3>TURNS</h3>
            </div>
            <div className="contentTurns">
                <h4>MAX TURN</h4>
                <div>{maxTurns}</div>
                <h4>CURRENT</h4>
                <div>{current}</div>

                <h4>LEFT</h4>
                <div>{left}</div>

            </div>
            <button onClick={onPlayTurn} className='buttonSm'>END TURN</button>
        </div>
    )
}


export default BoardTurn;