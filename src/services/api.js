import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-food-explorer-xy7h.onrender.com/'
});