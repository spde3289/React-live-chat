import { useState, useEffect, memo, KeyboardEvent, ChangeEvent } from "react";
import { socket } from "../../../soket/soket";
import MsgContainer from "./msgContainer";
import InputContainer from "../../common/inputContainer";
import { ChatLogType } from "@/type/room";

interface ChatRoomInterface {
  roomId: String;
  user: string;
}

export default memo(function CharRoom({ roomId, user }: ChatRoomInterface) {
  const [chatLog, setChatLog] = useState<ChatLogType[]>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    socket.connect();
    // 언마운트
    return () => {
      socket.emit("나가기", user);
      if (socket) {
        socket.disconnect();
      }
    };
  }, [roomId]);
  console.log(chatLog);
  console.log(msg);
  useEffect(() => {
    // 방 최초 입장
    socket.emit("join room", user, roomId);
    // 소켓 연결
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    // 소켓 끊김
    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });
    // 채팅 입력
    socket.on("chat message", (remsg: any) => {
      console.log(remsg);
      setChatLog((currentMsg) => [
        ...currentMsg,
        { user: remsg.name, msg: remsg.text },
      ]);
    });

    socket.on("chat log", (chatLog: any) => {
      console.log(JSON.parse(chatLog));
      const aaa = JSON.parse(chatLog).map((el: any) => {
        return { user: el.name, msg: el.text };
      });
      setChatLog(aaa);
    });

    // 언마운트
    return () => {
      setChatLog([]);
      socket.off("user list");
      socket.off("chat log");
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
    socket.emit("chat message", msg, user);
    setMsg("");
  };

  return (
    <section className="scrollBarController flex bg-white flex-col m-auto shadow-xl h-[824px] w-full mx-0">
      <div>
        <header className="flex items-center bg-white h-20 border-slate-300 ">
          <h2 className="text-4xl pl-5 font-bold">{roomId}</h2>
        </header>
        <div className="h-2 bg-gradient-to-b from-gray-200"></div>
      </div>
      <div className="flex h-[100%] justify-between flex-col">
        <MsgContainer user={user} chatLog={chatLog} />
        <InputContainer
          msg={msg}
          onChangeMsg={onChangeMsg}
          handleKeypress={handleKeypress}
        />
      </div>
    </section>
  );
});
