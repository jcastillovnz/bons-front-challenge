import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { getGameData } from './../../store/selector';

import Board from './Board'
const Container = (props): JSX.Element => {
    const gameData = useSelector(getGameData);
    console.log("GAME DATA: ", gameData);
    return <Board {...gameData} {...props}  />
}

export default Container;