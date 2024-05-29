import { io } from "socket.io-client";
export const getApiBase = () => import.meta.env.VITE_BASE_URL;

export const socket = io(getApiBase(), {
  transports: ["websocket"],
  withCredentials: true,
});
