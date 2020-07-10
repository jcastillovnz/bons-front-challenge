import dotProp from 'dot-prop-immutable';
import { INIT } from './actionTypes'

const initState = (): object => {
  return {
    name: '',
    id: '',
    currentTurn: null,
    maxTurns: null,
    turnsLeft: null

  }
}

function gameReducer(state = initState, action: {
  type: string,
  payload: {
    name: string,
    id: string,
    currentTurn: number,
    maxTurns: number,
    turnsLeft: number
  }
}) {
  switch (action.type) {
    case INIT:
     state = dotProp.set(state, 'id', action.payload.id);
     state = dotProp.set(state, 'name', action.payload.name);
     state = dotProp.set(state, 'currentTurn', action.payload.currentTurn);
     state = dotProp.set(state, 'maxTurns', action.payload.maxTurns);
     state = dotProp.set(state, 'turnsLeft', action.payload.turnsLeft);
    return state;
    default:
      return state
  }
}

export default gameReducer

