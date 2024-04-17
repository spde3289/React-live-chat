import { useState, useEffect } from "react";
import { socket } from "../../../soket/soket";
import User from "./user";

interface ParticipantCounterType {
  roomId: string;
}

export default function ParticipantCounter({ roomId }: ParticipantCounterType) {
  const [userList, setUserList] = useState<string[]>([]);

  useEffect(() => {
    // 참여유저 리스트
    socket.on("user list", (List) => {
      setUserList(List);
    });
    return () => {
      socket.off("user list");
    };
  }, []);

  return (
    <section className="w-[360px] px-3 m-auto mx-0 h-full min-w-[200px] border-l-2 text-3xl">
      <h2 className="mb-3 py-5 h-[80px]">{roomId} 참여인원</h2>
      <div>
        {userList!.map((user: any, index: any) => (
          <User user={user} key={index} />
        ))}
      </div>
    </section>
  );
}
