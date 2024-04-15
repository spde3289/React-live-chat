import { memo } from "react";
import ChatHistory from "./chatHistory";

export default memo(function ContentContainer(props: any) {
  return (
    <>
      <div className="flex h-[655px] flex-col p-5 overflow-y-scroll">
        {props.chat.map((el: any, idx: any) => {
          return (
            <ChatHistory
              key={idx}
              userType={el.user === props.user ? "me" : "other"}
              chat={el}
            />
          );
        })}
      </div>
    </>
  );
});
