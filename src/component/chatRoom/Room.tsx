import { useState } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
// import client from "../../fetch/backEnd";
import CharRoom from "./chatRoom/chatRoom";
import ParticipantCounter from "./ParticipantCounter/ParticipantCounter";

export default function Room() {
  const [state, setState] = useState("dddd");
  const location = useLocation();

  const onChange = (e: any) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      //Enter을 누르게 되면 실행한다
      if (state) {
        data(); // 메시지가 있으면 보낸다.
      }
    }
  };

  const data = async () => {
    const socket = io("http://localhost:3000", { transports: ["websocket"] });
    socket.on("connect", () => {
      console.log("connected to server");
      socket.emit("chat message", state);
    });
    socket.on("disconnect", () => {
      console.log("disconnected from server");
    });
  };

  /*   useEffect(() => {
    data();
  }, [state]); */

  const path: string = location.pathname.replace("/", "");
  const decodedParameter = decodeURIComponent(path);

  return (
    <div className="shadow-xl w-full mx-2 text-8xl ">
      <div className="w-full flex bg-white h-full">
        <CharRoom
          onChange={onChange}
          handleKeypress={handleKeypress}
          room={decodedParameter}
        />
        <ParticipantCounter room={decodedParameter} />
      </div>
    </div>
  );
}
