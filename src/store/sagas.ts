import { takeLatest, all, put, call, delay } from 'redux-saga/effects';

import {
    INIT_GAME,
    PLAY_TURN,
} from './actionTypes';
import {
    setGame as setGameAction,
    setPlayer as setPlayerAction,
    setMonster as setMonsterAction,
    setCards as setCardsAction,
    showLoader as showLoaderAction,
    setPlayerTurn as setPlayerTurnAction,
    setMonsterEffect as setMonsterEffectAction,
    setIsDisableBoard as setIsDisableBoardAction,
    setPlayerSelectedCard as setPlayerSelectedCardAction

} from './actions';
import {
    apiGetPlayerByGameIdService,
    apiGetMonsterByGameIdService,
    apiGetPlayersCardsByPlayerIdService,
    apiPlayNextTurnService,
    apiGetPlayerByIdService,
    apiGetMonterByIdService,
    apiGetGameByIdService
} from './../api'

// WORKERS
function* initGame(action: {
    type: string; payload: {
        id: string,
        currentTurn: number,
        maxTurns: number,
        turnsLeft: number,

    }
}) {


    yield put(showLoaderAction({ showLoader: true }))
    yield put(setGameAction(action.payload))
    const playerData = yield call(apiGetPlayerByGameIdService, action.payload.id);
    yield put(setPlayerAction(playerData))
    const monsterData = yield call(apiGetMonsterByGameIdService, action.payload.id);
    yield put(setMonsterAction(monsterData));
    const playerCardsData = yield call(apiGetPlayersCardsByPlayerIdService, playerData.id);
    yield put(setCardsAction(playerCardsData))
    yield put(showLoaderAction({ showLoader: false }))
}


function* playTurn(action: {
    type: string; payload: {
        gameId: string, playerSelectedCard?: string, value: number,
        effect: string, currentTurn: number, playerId, monsterId
    }
}) {
    const turnPlayerGameData = yield call(apiPlayNextTurnService,
        action.payload.gameId,
        action.payload.playerSelectedCard);
    yield put(setIsDisableBoardAction({ isDisableBoard: true }))
    yield put(setGameAction(turnPlayerGameData.game))
    const playerData = yield call(apiGetPlayerByIdService, action.payload.playerId);
    yield put(setPlayerAction(playerData))
    const turnMonsterGameData = yield call(apiPlayNextTurnService,
        action.payload.gameId);
    const gameData = yield call(apiGetGameByIdService, action.payload.gameId);
    yield put(setGameAction(gameData))
    const monsterData = yield call(apiGetMonterByIdService, action.payload.monsterId);
    yield put(setMonsterAction(monsterData))
    const playerCardsData = yield call(apiGetPlayersCardsByPlayerIdService, action.payload.playerId);
    yield put(setCardsAction(playerCardsData))
    yield put(setIsDisableBoardAction({ isDisableBoard: false }))
    yield put(setMonsterEffectAction(turnMonsterGameData.monsterEffect))
    yield put(setPlayerSelectedCardAction({ cardId: null }))
    yield delay(3000);
    yield put(setMonsterEffectAction({ value: null, effect: null }))

}

// WATCHERS
export function* onInitGame() {
    yield takeLatest(INIT_GAME, initGame);
}
export function* onPlayTurn() {
    yield takeLatest(PLAY_TURN, playTurn);
}

function* sagas() {
    yield all([call(onInitGame), call(onPlayTurn)]);
}


export default function* rootSaga() {
    yield all([call(sagas)]);
}
