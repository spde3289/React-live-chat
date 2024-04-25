import { memo } from "react";

const user: any = {
  me: "rounded-[26px_26px_0_26px] bg-blue-600 ",
  other: "rounded-[26px_26px_26px_0] bg-gray-300",
  system: ""
};

export default memo(function Msg({ userType, chat }: any) {
  const type = userType === "me" ? "float-right" : "float-left";
  return (
    <>
      <div className="mb-4">
        <div className={type}>
          <div className="text-xl">{chat.user}</div>
          <div
            className={`${user[userType]} break-words w-auto max-w-md text-2xl p-2`}
          >
            {chat.msg}
          </div>
        </div>
      </div>
    </>
  );
});
