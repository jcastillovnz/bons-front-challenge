import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {  Link } from 'react-router-dom'


const Welcome = (): JSX.Element => {

    return (<div className="App">
        <header className="App-header">
            <p style={{fontSize:40}}>
                WELCOME TO
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{fontSize:25}}>
                GAME CHALLENGE
            </p>
           < Link to="/login" >

            <a style={{fontSize:25}}
                className="App-link 
                blinks"
            
                rel="noopener noreferrer"
            >
                PLAY GAME
            </a>
            </Link>
        </header>
    </div>);


}


export default Welcome;