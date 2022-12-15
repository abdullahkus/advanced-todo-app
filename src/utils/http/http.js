import axios from 'axios'

const http = axios.create({
  baseURL: 'https://fake-backend-advanced-todo.onrender.com/',
  timeout: 1000,
})

export default http