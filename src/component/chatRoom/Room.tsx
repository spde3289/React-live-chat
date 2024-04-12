// import { useEffect } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import client from "../../fetch/backEnd";
import CharRoom from "./chatRoom/chatRoom";
import ParticipantCounter from "./ParticipantCounter/ParticipantCounter";

export default function Room() {
  const location = useLocation();

  const data = async () => {
    try {
      const s = await client.get("/");
      const socket = io("http://localhost:3000", { transports: ["websocket"] });

      socket.on("connect", () => {
        console.log("connected to server");
      });

      socket.on("disconnect", () => {
        console.log("disconnected from server");
      });
      console.log(s.data);
    } catch (err) {
      console.log(err);
    }
  };
  data();

  const path: string = location.pathname.replace("/", "");
  const decodedParameter = decodeURIComponent(path);

  return (
    <div className="shadow-xl w-full mx-2 text-8xl ">
      <div className="w-full flex bg-white h-full">
        <CharRoom room={decodedParameter} />
        <ParticipantCounter room={decodedParameter} />
      </div>
    </div>
  );
}
