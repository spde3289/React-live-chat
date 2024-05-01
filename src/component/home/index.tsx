import { useEffect } from "react";
import { CreateRoom } from "@/fetch/roomFatch";
import InputContainer from "../common/inputContainer";

const data = {
  a: "aa",
  b: "bb",
};

const HomePageComponent = () => {
  // const [value, setValue] = useState();
  useEffect(() => {
    CreateRoom(data).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <main className="w-full">
      <div className="w-[60%] flex-col justify-center items-center h-full pb-5 flex m-0 mx-auto">
        <div className="flex-col justify-center items-center h-full flex">
          자유롭게 이용해주세요!
        </div>
        <InputContainer />
      </div>
    </main>
  );
};

export default HomePageComponent;
