import { memo, ChangeEvent, KeyboardEvent, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { IoIosSend } from "react-icons/io";

interface InputContainerType {
  msg?: string;
  placeholder?: string;
  isMsg?: boolean;
  required?: boolean
  onChangeMsg: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeypress?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export default memo(function InputContainer({
  msg,
  placeholder,
  isMsg = true,
  required= false,
  onChangeMsg,
  handleKeypress,
}: InputContainerType) {
  const textareaRef = useRef<any>(null);
  const fillIcon = msg?.length != 0;

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // Shift + Enter를 눌렀을 때만 줄 바꿈 처리
      e.preventDefault(); // 기본 Enter 동작을 막음
      // 여기에 추가적인 동작을 수행할 수 있음 (예: 입력된 내용 처리)
    }
  };

  return (
    <>
      <div className="flex align-middle justify-center ">
        <div className="flex relative rounded-2xl overflow-y-hidden w-[600px]">
          <TextareaAutosize
            required={required}
            placeholder={placeholder}
            onChange={(e) => {
              onChangeMsg(e);
            }}
            ref={textareaRef}
            onKeyDown={handleKeyDown}
            onKeyUp={(e) => {
              if (handleKeypress) handleKeypress(e);
              // adjustTextareaSize(e);
            }}
            value={msg}
            className={`px-4 text-xl max-h-[224px] overflow-y-scroll resize-none scrollBar py-[14px] rounded-2xl pl-6 pr-12 outline-none w-[600px] border-gray-500 border-[1px]`}
          />
          {isMsg && (
            <IoIosSend
              className={`${
                fillIcon && "fill-black"
              } absolute right-3 bottom-3 w flex items-center justify-center size-9 select-none`}
              color="#e5e5e5"
            />
          )}
        </div>
      </div>
    </>
  );
});
