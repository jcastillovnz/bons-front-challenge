import { createSelector } from 'reselect';
import get from 'lodash/get';

export const gameData = (state) => state;
export const getGameData = createSelector(gameData, (data) => {
return {
     id: get(data,'id', ''),
     name: get(data,'name', ''),
     currentTurn: get(data,'currentTurn',''),
     maxTurns: get(data,'maxTurns',''),
     turnsLeft: get(data,'turnsLeft',''),
    }
  });
