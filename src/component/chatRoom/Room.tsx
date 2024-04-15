import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { socket } from "../../soket/soket";
// import io from "socket.io-client";
// import client from "../../fetch/backEnd";
import CharRoom from "./chatRoom/chatRoom";
import ParticipantCounter from "./ParticipantCounter/ParticipantCounter";

export interface IMsg {
  user: string;
  msg: string;
}

export default function Room() {
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    socket.connect();
    return () => {
      if (socket) {
        socket.disconnect();
        console.log("끊김" + socket.connected);
      }
    };
  }, []);

  useEffect(() => {
    socket.on("connect", () => {});

    socket.on("chat message", (remsg: any) => {
      setChat((currentMsg) => [
        ...currentMsg,
        { user: remsg.user, msg: remsg.msg },
      ]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat message");
    };
  }, []);

  const onChange = (e: any) => {
    setMsg(e.target.value);
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      //Enter을 누르게 되면 실행한다
      if (msg) {
        data(); // 메시지가 있으면 보낸다.
      }
    }
  };

  const data = () => {
    socket.emit("welcome", socket.id);
    socket.emit("chat message", msg);
    setMsg("");
  };

  const path: string = location.pathname.replace("/", "");
  const decodedParameter = decodeURIComponent(path);

  return (
    <div className="shadow-xl w-full mx-2 text-8xl ">
      <div className="w-full flex bg-white h-full">
        <CharRoom
          chat={chat}
          user={socket.id}
          msg={msg}
          onChange={onChange}
          handleKeypress={handleKeypress}
          room={decodedParameter}
        />
        <ParticipantCounter room={decodedParameter} />
      </div>
    </div>
  );
}
