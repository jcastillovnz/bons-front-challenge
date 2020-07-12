import {
  PLAY_TURN,
  INIT_GAME,
  SET_MONSTER,
  SET_PLAYER, SET_GAME,
  SET_GAME_CARDS,
  SET_SELECTED_CARD,
  SET_PLAYER_TURN,
  SHOW_LOADER,
  SET_PLAYER_EFFECT,
  SET_MONSTER_EFFECT,
  SET_PLAYER_SELECTED_CARD
} from './actionTypes';
import {
  apiGetGameByIdService,
  apiGetMonterByIdService,
  apiGetPlayerByIdService,
  apiGetPlayersCardsByPlayerIdService,
  apiGetPlayerByGameIdService,
  apiPlayNextTurnService
} from '../api'
import { apiGetMonsterByGameIdService, apiLoginService } from 'src/api/services';

export function init(data: {
  id: string,
  currentTurn: number,
  maxTurns: number,
  turnsLeft: number
}) {
  return {
    type: INIT_GAME,
    payload: data
  };
}

export function playTurn(data: {
  gameId: string,
  cardId?: string,
  playerId: string,
  monsterId: string,
  playerSelectedCard?: string,
  value?: number,
  currentTurn: number,
  effect?: string,
}) {
  return {
    type: PLAY_TURN,
    payload: data
  };
}

export function setPlayerTurn(data: {
  playerTurn: string,
}) {
  return {
    type: SET_PLAYER_TURN,
    payload: data
  };
}

export function showLoader(data: { showLoader: boolean }) {
  return {
    type: SHOW_LOADER,
    payload: data
  };
}

export function setPlayerSelectedCard(data: {
  cardId: string,
}) {
  return {
    type: SET_PLAYER_SELECTED_CARD,
    payload: data
  };
}

export function setMonsterEffect(data: {
  value: number,
  effect: string,
}) {
  return {
    type: SET_MONSTER_EFFECT,
    payload: data
  };
}

export function setPlayerEffect(data: {
  cardId: string,
  value?: number,
  effect?: string,
}) {
  return {
    type: SET_PLAYER_EFFECT,
    payload:{monsterEffect:data}
  };
}


export function setGame(data: {
  id: string,
  currentTurn: number,
  maxTurns: number,
  turnsLeft: number
}) {
  return {
    type: SET_GAME,
    payload: data
  };
}



export function setPlayer(data: {
  name?: string,
  hp?: number,
  shield?: number,
  maxHp?: number
}) {
  return {
    type: SET_PLAYER,
    payload: data
  };
}

export function setMonster(data: {
  name: string,
  image: string,
  hp: number,
  shield: number,
  maxHp: number
}) {
  return {
    type: SET_MONSTER,
    payload: data
  };
}

export function setCards(data: [{
  id: string,
  value: string,
  effect: string,
}]) {
  return {
    type: SET_GAME_CARDS,
    payload: { cards: data }
  };
}





export function loginGame(name: string, onCallBack: any) {
  return function (dispatch) {
    apiLoginService(name).then((gameData: {
      id: string,
      currentTurn: number,
      maxTurns: number,
      turnsLeft: number
    }) => {
      dispatch(init(gameData))
      return onCallBack()
    }).catch((reason) => {
      console.log(reason)
      alert("Opps hubo un error")
    })
  }
}

export function getPlayerByGameId(gameId: string) {
  return function (dispatch) {
    apiGetPlayerByGameIdService(gameId).then((playerData) => {
      dispatch(setPlayer(playerData))
    }).catch((reason) => {
      console.log(reason)
      alert("Opps hubo un error")
    })
  }
}

export function getMonsterByGameId(gameId: string) {
  return function (dispatch) {
    apiGetMonsterByGameIdService(gameId).then((monsterData) => {
      dispatch(setMonster(monsterData))
    }).catch((reason) => {
      console.log(reason)
      alert("Opps hubo un error")
    })
  }
}



export function getPlayerCardsByPlayerId(playerId: string, callBack?: void) {
  return function (dispatch) {
    apiGetPlayersCardsByPlayerIdService(playerId).then((response) => {

    }).catch((reason) => {
      console.log(reason)
      alert("Opps hubo un error")
    })
  }
}

export function getMonsterByMonsterId(monsterId: string) {
  return apiGetMonterByIdService(monsterId).then((response) => {

  }).catch((reason) => {
    console.log(reason)
    alert("Opps hubo un error")
  })
}


export function getPlayerByPlayerId(playerId: string) {
  return apiGetPlayerByIdService(playerId).then((response) => {

  }).catch((reason) => {
    console.log(reason)
    alert("Opps hubo un error")
  })
}


export function getGameByGameId(gameId: string) {
  return function (dispatch) {
    apiGetGameByIdService(gameId).then((response) => {
      return dispatch(init(response))
    }).catch((reason) => {
      console.log(reason)
      alert("Opps hubo un error")
    })
  }
}

export function PlayNextTurnByGameId(gameId: string, cardId?: string) {
  return function (dispatch) {
    return apiPlayNextTurnService(gameId, cardId ? cardId : null).then((gameData) => {
      console.log("apiPlayNextTurnService: ", gameData)
      dispatch(setGame(gameData.game))
    }).catch((reason) => {
      console.log(reason)
      alert("Opps hubo un error")
    })
  }
}