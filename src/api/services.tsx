import ApiService from './api'
import axios from 'axios'

export const apiLoginService = async (name:string) => {
const  { initgGameEndpoint } = ApiService()
return axios.post(initgGameEndpoint, {
 name: name,
})
.then(function (response) {
return response.data;
})
.catch(function (error) {
 throw error;
});
}