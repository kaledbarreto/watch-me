import axios from "axios";

export const publicApi = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-type': 'aplication/json',
    'Accept': '*/*'
  },
});