import dotProp from 'dot-prop-immutable';
import {
  SET_PLAYER,
  SET_MONSTER,
  SET_GAME_CARDS,
  SET_GAME,
  SHOW_LOADER,
  SET_SELECTED_CARD,
  SET_PLAYER_TURN,
  SET_MONSTER_EFFECT,
  SET_PLAYER_EFFECT,
  SET_PLAYER_SELECTED_CARD
} from './actionTypes'

const initState = (): object => {
  return {
    name: '',
    id: '',
    currentTurn: -1,
    playerTurn: 'PLAYER',
    maxTurns: 0,
    turnsLeft: 0,
    playerName: '',
    playerHp: 0,
    playerShield: 0,
    playerMaxHp: 0,
    monsterName: '',
    monsterImage: '',
    monsterHp: 0,
    monsterShield: 0,
    monsterMaxHp: 0,
    cardId:'',
    playerSelectedCard:'',
    cards:[],
    playerEffect:{value:0, effect:'', cardId:''}


  }
}

function gameReducer(state = initState, action: {
  type: string,
  payload: {
    id: string,
    currentTurn: number,
    maxTurns: number,
    turnsLeft: number,
    name: string,
    hp: number,
    shield?: number,
    maxHp?: number,
    image?: string,
    cards: Array<object>,
    cardId:string,
    showLoader:boolean,
    playerTurn:string,
    monsterEffect:{value:number, effect:string},
    playerEffect:{value?:number, effect?:string, cardId:string},
    playerSelectedCard:string
  }
}) {
  switch (action.type) {
    case SET_GAME:
      state = dotProp.set(state, 'id', action.payload.id);
      state = dotProp.set(state, 'currentTurn', action.payload.currentTurn);
      state = dotProp.set(state, 'maxTurns', action.payload.maxTurns);
      state = dotProp.set(state, 'turnsLeft', action.payload.turnsLeft);
      return state;
    case SET_PLAYER:
      state = dotProp.set(state, 'playerId', action.payload.id);
      state = dotProp.set(state, 'playerName', action.payload.name);
      state = dotProp.set(state, 'playerHp', action.payload.hp);
      state = dotProp.set(state, 'playerShield', action.payload.shield);
      state = dotProp.set(state, 'playerMaxHp', action.payload.maxHp);
      return state;
    case SET_MONSTER:
      state = dotProp.set(state, 'monsterId', action.payload.id);
      state = dotProp.set(state, 'monsterName', action.payload.name);
      state = dotProp.set(state, 'monsterImage', action.payload.image);
      state = dotProp.set(state, 'monsterHp', action.payload.hp);
      state = dotProp.set(state, 'monsterShield', action.payload.shield);
      state = dotProp.set(state, 'monsterMaxHp', action.payload.maxHp);
      return state
      case SET_PLAYER_TURN:
      state = dotProp.set(state, 'playerTurn', action.payload.playerTurn);
      return state;
        case SET_GAME_CARDS:
      case SET_GAME_CARDS:
        state = dotProp.set(state, 'cards', [...action.payload.cards]);
      return state;
      case SET_PLAYER_SELECTED_CARD:
        state = dotProp.set(state, 'playerSelectedCard', action.payload.cardId);
      return state;
      case SET_MONSTER_EFFECT:
        state = dotProp.set(state, 'monsterEffect', action.payload.monsterEffect);
      return state;
      case SHOW_LOADER:
        state = dotProp.set(state, 'showLoader', action.payload.showLoader);
      return state;
    default:
      return state
  }
}


export default gameReducer

