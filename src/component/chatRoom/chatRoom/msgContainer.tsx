import { memo, useEffect, useRef, useState } from "react";
import { socket } from "../../../soket/soket";
import Msg from "./msg";
import { ChatLogType } from "./chatRoom";

interface MsgContainerPropsInterface {
  chatLog: ChatLogType;
  user: string | undefined;
}

export default memo(function MsgContainer({
  chatLog,
  user,
}: MsgContainerPropsInterface) {
  const [newMember, setNewMember] = useState<any>();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 스크롤 하단으로 내려줌
    scrollRef.current!.scrollIntoView();
    // 참여유저 리스트
    socket.on("user list", (list) => {
      setNewMember(list[list.length - 1]?.user + " 님이 입장하셨습니다. ");
    });

    return () => {
      socket.off("user list");
    };
  }, [chatLog]);
  console.log(newMember);

  return (
    <>
      <div className="flex h-[655px] flex-col p-5 overflow-y-scroll scrollBar">
        {chatLog.map((el: any, idx: any) => {
          return (
            <Msg
              key={idx}
              userType={el.user === user ? "me" : "other"}
              chat={el}
            />
          );
        })}
        <div ref={scrollRef} />
      </div>
    </>
  );
});
