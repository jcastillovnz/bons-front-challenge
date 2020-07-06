import React from 'react';
import IconManager from './IconManager'

interface props {
    card?: string
}
const CardGame = ({ card }: props): JSX.Element => {

    return (
        <div className="cardContainer hoverSelectedCard" >
            <div className="centerContent" style={{ flexDirection: 'column', margin: '35px' }}>
                <div>
                    {IconManager(card)}
                </div>
                <p>
                    DAMAGE
    </p>
            </div>
        </div>
    )
}


export default CardGame;