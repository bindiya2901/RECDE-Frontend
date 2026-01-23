import { io } from "socket.io-client";

export const socket = io("https://recde-backend.onrender.com", {
  transports: ["websocket"] // ✅ force websocket
});
