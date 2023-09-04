import http from "../utils/http";

export const getAllTodo = (options) => http.get("/todos", options);

export const getTodo = (todoId, options) =>
  http.get(`/todos/${todoId}`, options);

export const addTodo = (todo, options) => http.post("/todos/", todo, options);

export const updateTodo = (todoId, todo, options) =>
  http.put(`/todos/${todoId}`, todo, options);

export const deleteTodo = (todoId, options) =>
  http.delete(`/todos/${todoId}`, options);
