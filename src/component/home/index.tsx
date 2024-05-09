import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CreateRoom } from "@/fetch/roomFatch";
import { useRoomListContext } from "@/context/useRoomListContext";
import newId from "@/util/newId";
import InputContainer from "../common/inputContainer";

const HomePageComponent = ({ user }: { user: string }) => {
  const { updateValue } = useRoomListContext();
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleKeypress = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    //Enter을 누르게 되면 실행
    if (e.key === "Enter" && !e.shiftKey) {
      const data = {
        id: newId(),
        name: value,
        user: user,
        status: "ongoing",
      };
      CreateRoom(data).then((res) => {
        console.log(res);
        updateValue(res);
        navigate(`/${value}`);
      });
    }
  };

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
