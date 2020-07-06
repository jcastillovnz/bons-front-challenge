import React from 'react';
interface props {
    current?: number;
    past?: number;
    left?: number;
}

const BoardTurn = ({ current, past, left }: props): JSX.Element => {
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


            <button className='buttonSm ' >END TURN</button>
        </div>
    )
}


export default BoardTurn;