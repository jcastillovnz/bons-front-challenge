import React from 'react';
import './styles.css'


import Board from './Board'
const Container = (props): JSX.Element => {
    return <Board {...props}  />
}

export default Container;