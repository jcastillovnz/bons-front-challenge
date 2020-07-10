interface props { 
    initgGameEndpoint :string,
    playersEndpoint :string,
    monstersEndpoint :string,
}

const apiService = (API_URL = 'http://game.bons.me/api'):props  => {
return { 
    initgGameEndpoint :`${API_URL}/games`,
    playersEndpoint   :`${API_URL}/players`,
    monstersEndpoint  :`${API_URL}/monsters`,
}

}

export default apiService;
