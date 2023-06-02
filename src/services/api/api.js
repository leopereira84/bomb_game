import axios from "axios";

const api = axios.create({
  baseURL: "http://10.1.11.102:8080",
});

export default api;
