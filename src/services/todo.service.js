import http from '../utils/http/http'

export const getAllTodo = () => http.get('/todos')

export const getTodo = (todoId) => http.get(`/todos/${todoId}`)

export const addTodo = (todo) => http.post('/todos/', todo, {
  headers: { 'Content-Type': 'application/json' },
})

export const updateTodo = (todoId, todo) => http.put(`/todos/${todoId}`, todo, {
  headers: { 'Content-Type': 'application/json' },
})

export const deleteTodo = (todoId) => http.delete(`/todos/${todoId}`)