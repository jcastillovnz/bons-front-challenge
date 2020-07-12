import ApiService from './api'
import axios from 'axios'
const { gameEndpoint, playersEndpoint, monstersEndpoint } = ApiService();


export const apiLoginService = async (name: string) => {
  return axios.post(gameEndpoint, {
    name: name,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

export const apiGetPlayersCardsByPlayerIdService = async (playerId: string) => {
  return axios.get(`${playersEndpoint}/${playerId}/cards`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}

export const apiGetMonterByIdService = async (monsterId: string) => {
  return axios.get(`${monstersEndpoint}/${monsterId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}


export const apiGetMonsterByGameIdService = async (gameId: string) => {
  return axios.get(`${gameEndpoint}/${gameId}/monster`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}


export const apiGetPlayerByIdService = async (playerId: string) => {
  return axios.get(`${playersEndpoint}/${playerId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}


export const apiGetPlayerByGameIdService = async (gameId: string) => {
  return axios.get(`${gameEndpoint}/${gameId}/player`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}


export const apiGetGameByIdService = async (gameId: string) => {
  return axios.get(`${gameEndpoint}/${gameId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}


export const apiPlayNextTurnService = async (gameId:string, cardId?: string) => {
  return axios.post(`${gameEndpoint}/${gameId}/next-turn`, {
    card: cardId? cardId : null,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
}