import { INIT } from './actionTypes'


export function init(data: {
  name: string,
  id: string,
  currentTurn: number,
  maxTurns: number,
  turnsLeft: number
}) {
  return {
    type: INIT,
    payload:data
  };
}

