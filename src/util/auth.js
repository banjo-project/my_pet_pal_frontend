import axios from 'axios'
import { SecureStore } from 'expo'
const BASE_URL = 'https://banjo-project.herokuapp.com'

export const postLogin = (body) => {
  return axios.post(`${BASE_URL}/login`, body)
}

export const getUserId = () => {
  return SecureStore.getItemAsync('token')
    .then((token) => {
      return axios.get(`${BASE_URL}/login`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
    })
}