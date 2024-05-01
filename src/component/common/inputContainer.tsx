import { memo, ChangeEvent, KeyboardEvent } from "react";
import { IoIosSend } from "react-icons/io";

interface InputContainerType {
  msg?: string;
  onChangeMsg?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeypress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default memo(function InputContainer({
  msg,
  onChangeMsg,
  handleKeypress,
}: InputContainerType) {
  return (
    <>
      <div className="text-xl flex align-middle justify-center">
        <div className="relative w-[600px]">
          <input
            value={msg}
            onChange={onChangeMsg}
            onKeyUp={handleKeypress}
            className="px-4 pr-16 h-10 outline-none w-[600px] border-gray-500 border-[1px]"
            placeholder="Type a message here"
          />
          <IoIosSend
            className="absolute right-[4px] top-[0px] flex items-center justify-center size-10 select-none"
            color="#e5e5e5"
          />
        </div>
      </div>
    </>
  );
});
