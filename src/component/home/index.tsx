import { useState, KeyboardEvent, ChangeEvent } from "react";
import InputContainer from "../common/inputContainer";

const HomePageComponent = () => {
  const [msg, setMsg] = useState<string>("");

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
    setMsg("");
  };

  return (
    <main className="w-full">
      <div className="w-[60%] m-0 mx-auto">
        <InputContainer
          msg={msg}
          onChangeMsg={onChangeMsg}
          handleKeypress={handleKeypress}
        />
      </div>
    </main>
  );
};

export default HomePageComponent;
