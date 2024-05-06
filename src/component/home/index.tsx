import { useState, ChangeEvent, KeyboardEvent } from "react";
import { CreateRoom } from "@/fetch/roomFatch";
import newId from "@/util/newId";
import InputContainer from "../common/inputContainer";

const HomePageComponent = () => {
  const [value, setValue] = useState<string>("");

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleKeypress = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    //Enter을 누르게 되면 실행
    console.log(e.shiftKey);

    if (e.key === "Enter" && !e.shiftKey) {
      const data = {
        id: newId(),
        name: value,
        userList: [],
        status: "ongoing",
      };
      CreateRoom(data).then((res) => {
        console.log(res);
      });
    }
  };

  /** 채팅 입력시 메세지, id값 보냄 */
  // const SendMsg = () => {};

  return (
    <main className="w-full">
      <div className="w-[60%] flex-col justify-center items-center h-full pb-5 flex m-0 mx-auto">
        <div className="flex-col justify-center items-center h-full flex">
          자유롭게 이용해주세요!
        </div>
        <InputContainer
          onChangeMsg={onChangeMsg}
          msg={value}
          handleKeypress={handleKeypress}
        />
      </div>
    </main>
  );
};

export default HomePageComponent;
