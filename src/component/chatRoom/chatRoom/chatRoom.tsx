import { useState, useEffect, memo, KeyboardEvent, ChangeEvent } from "react";
import { socket } from "../../../soket/soket";
import MsgContainer from "./msgContainer";
import InputContainer from "./inputContainer";

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
    // 언마운트
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [roomId]);

  useEffect(() => {
    // 방 최초 입장
    socket.emit("join room", roomId);
    // 소켓 연결
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    // 소켓 끊김
    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });
    // 채팅 로그
    socket.on("chat message", (remsg: any) => {
      setChatLog((currentMsg) => [
        ...currentMsg,
        { user: remsg.user, msg: remsg.msg },
      ]);
    });
    // 언마운트
    return () => {
      setChatLog([])
      socket.off("connect");
      socket.off("chat message");
      socket.off("disconnect");
    };
  }, [roomId]);

  const onChangeMsg = (e: ChangeEvent<HTMLInputElement>): void => {
    setMsg(e.target.value);
  };

  const handleKeypress = (e: KeyboardEvent<HTMLInputElement>): void => {
    //Enter을 누르게 되면 실행
    if (e.key === "Enter") {
      if (msg) {
        SendMsg();
      }
    }
  };

  /** 채팅 입력시 메세지, id값 보냄 */
  const SendMsg = () => {
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
        <InputContainer
          msg={msg}
          onChangeMsg={onChangeMsg}
          handleKeypress={handleKeypress}
        />
      </div>
    </section>
  );
});
