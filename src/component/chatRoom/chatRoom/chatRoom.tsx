import { useState, useEffect, memo } from "react";
import { socket } from "../../../soket/soket";
import MsgContainer from "./msgContainer";
import InputBox from "./inputBox";

export type ChatLogType = {
  user: string;
  msg: string;
}[];

interface ChatRoomInterface {
  roomId: String;
}

export default memo(function CharRoom({ roomId }: ChatRoomInterface) {
  const [chatLog, setChatLog] = useState<ChatLogType>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    socket.connect();
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    socket.emit("new member");
    // 소켓 연결
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    // 소켓 끊김
    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });

    socket.on("chat message", (remsg: any) => {
      setChatLog((currentMsg) => [
        ...currentMsg,
        { user: remsg.user, msg: remsg.msg },
      ]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat message");
      socket.off("disconnect");
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

  /** 채팅 입력시 메세지, id값 보냄 */
  const data = () => {
    socket.emit("chat message", msg, socket.id);
    setMsg("");
  };

  return (
    <section className="flex flex-col m-auto shadow-lg h-[824px] w-[100%] mx-0">
      <div>
        <header className="flex items-center bg-white h-20 border-slate-300 ">
          <h2 className="text-4xl pl-5 font-bold">{roomId}</h2>
        </header>
        <div className="h-2 bg-gradient-to-b from-gray-200"></div>
      </div>
      <div className="flex h-[100%] justify-between flex-col">
        <MsgContainer user={socket.id} chatLog={chatLog} />
        <InputBox
          msg={msg}
          onChange={onChange}
          handleKeypress={handleKeypress}
        />
      </div>
    </section>
  );
});
