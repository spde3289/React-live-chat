import axios from "axios";
export const getApiBase = () => import.meta.env.VITE_BASE_URL;

const client = axios.create({
  timeout: 3000,
  baseURL: getApiBase(),
});

export default client;
