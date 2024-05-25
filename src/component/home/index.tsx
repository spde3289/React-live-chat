import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CreateRoom } from "@/fetch/roomFatch";
import { useRoomListContext } from "@/context/useRoomListContext";
import newId from "@/util/newId";
import InputContainer from "../common/inputContainer";

interface HomePageComponentType {
  user: string;
}

const HomePageComponent = ({ user }: HomePageComponentType) => {
  const { setRoomList } = useRoomListContext();
  const [selectMenu, setSelectMenu] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const id = newId();

    const data = {
      selectMenu,
      id,
      name: value,
      user,
      password,
      status: "진행중",
    };
    CreateRoom(data).then((res) => {
      setRoomList(res);
      navigate(`/list/${id}`, { state: { value: true } });
    });
  };

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const onChangePassward = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value.replace(/[^0-9]/g, ""));
  };

  return (
    <main className="w-full">
      <div className="flex-col w-fit justify-center items-center h-full pb-5 flex mx-auto">
        <div className="text-left w-full flex-col text-4xl font-bold mb-7">
          문의 등록
          <span className="after"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="custom-select-wrapper">
            <select
              required
              onChange={(e) => setSelectMenu(e.target.value)}
              className="custom-select mb-5 px-4 text-xl overflow-y-scroll resize-none scrollBar py-[14px] rounded-2xl pl-6 pr-12 outline-none w-[600px] border-gray-500 border-[1px]"
            >
              <option value="">--옵션을 선택해주세요--</option>
              <option value="MapleStory">메이플 봇</option>
              <option value="MonsterHunter">몬헌 봇</option>
            </select>
          </div>
          <InputContainer
            isMsg={false}
            placeholder="원하는 메세지를 입력해주세요!"
            onChangeMsg={onChangeMsg}
            msg={value}
            required={true}
          />
          <div className="flex justify-between">
            <input
              id="password"
              maxLength={4} // 최대 4자리로 제한
              pattern="\d{4}" // 4자리 숫자 패턴
              placeholder="비밀먼호를 입력해주세요"
              className="my-5 px-4 text-xl py-[14px] rounded-2xl pl-6 pr-12 outline-none w-[300px] border-gray-500 border-[1px]"
              value={password}
              onChange={onChangePassward}
              required
            />
            <input
              className="my-5 m-0 px-4 text-xl font-bold text-white py-[14px] rounded-2xl bg-base outline-none w-[220px] border-gray-500 border-[1px]"
              type="submit"
              value="제출"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default HomePageComponent;
