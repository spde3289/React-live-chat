import { memo, useEffect, useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 스크롤 하단으로 내려줌
    scrollRef.current!.scrollIntoView();
  }, [chatLog]);

  return (
    <>
      <div className="flex h-[655px] flex-col p-5 overflow-y-scroll">
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
