import { createSelector } from 'reselect';
import get from 'lodash/get';

export const gameData = (state) => state;
export const getGameData = createSelector(gameData, (data) => {
  return {
    id: get(data, 'id', ''),
    currentTurn: get(data, 'currentTurn', ''),
    maxTurns: get(data, 'maxTurns', ''),
    turnsLeft: get(data, 'turnsLeft', ''),
    cards: get(data, 'cards', ''),
    showLoader: get(data, 'showLoader', ''),
    playerTurn: get(data, 'playerTurn', ''),
    isDisableBoard: get(data, 'isDisableBoard', ''),
    /* PLAYER DATA */
    playerId: get(data, 'playerId', ''),
    playerName: get(data, 'playerName', ''),
    playerHp: get(data, 'playerHp', ''),
    playerMaxHp: get(data, 'playerMaxHp', ''),
    playerShield: get(data, 'playerShield', ''),
    playerSelectedCard: get(data, 'playerSelectedCard', ''),
    /* MONSTER DATA */
    monsterId: get(data, 'monsterId', ''),
    monsterName: get(data, 'monsterName', ''),
    monsterImage: get(data, 'monsterImage', ''),
    monsterHp: get(data, 'monsterHp', ''),
    monsterMaxHp: get(data, 'monsterMaxHp', ''),
    monsterShield: get(data, 'monsterShield', ''),
    monsterEffect: get(data, 'monsterEffect', ''),

  }
});

export const isLoggedIn = createSelector(gameData, (data) => {
  return get(data, 'id', '') ? true : false
});