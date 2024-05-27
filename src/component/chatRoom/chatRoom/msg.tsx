import { memo } from "react";
import { ChatLogType } from "@/type/room";

interface MsgPropsType {
  userType: string;
  chat: ChatLogType;
}

interface UserTypes {
  [key: string]: string;
  me: string;
  other: string;
  system: string;
}

const user: UserTypes = {
  me: "rounded-3xl bg-[#f4f4f4]",
  other: "rounded-3xl bg-[#f4f4f4]",
  system: "",
};

export default memo(function Msg({ userType, chat }: MsgPropsType) {
  const type = userType === "me" ? "float-right" : "float-left";
  return (
    <>
      <div className="box-content ">
        <div className={type}>
          <div className={`${userType === "me" ? "text-right" : ""} text-xl`}>{chat.user}</div>
          <div
            className={`${user[userType]} px-5 py-2.5 message-container break-words w-auto max-w-md text-sm `}
          >
            {chat.msg}
          </div>
          <div className="h-6"></div>
        </div>
      </div>
    </>
  );
});
