import ApiService from './api'


export const loginService = async (name:string) => {
      try {
        const response = fetch(`${ApiService().gameEndpoint}`, {
          method: 'POST',
          body: JSON.stringify({ name }),
          headers: {
            'Content-type': 'application/json'
          },
        });
        const login = await response;
        return login;

      } catch (error) {
        console.error(error);
      }
    }