import React from 'react';
import IconManager from './IconManager'

interface props {
    card: string;
    value:number;
}
const CardGame = ({ card, value }: props): JSX.Element => {

    return (
        <div className="cardContainer hoverSelectedCard" >
            <div className="centerContent" style={{ flexDirection: 'column', margin: '35px' }}>
                <div>
                    {IconManager(card)}
                </div>
                <div>
                {card}
                </div>
                <div>
                {value}
                </div>
                   
            
            
            </div>
        </div>
    )
}


export default CardGame;