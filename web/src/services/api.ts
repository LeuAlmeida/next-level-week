import axios from "axios";

const api = axios.create({
  baseURL: "http://157.245.136.205:3333",
});

export default api;
