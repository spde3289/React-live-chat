import { useState, useEffect } from "react";
import ChatItem from "./chatItem";
import Scissors from "../../svg/Scissors";
import axios from "axios";

type RoomListType = { id: number; name: string }[] | null;

const Sidebar = () => {
  const [roomList, setRoomList] = useState<RoomListType>(null);

  useEffect(() => {
    const data = async () => {
      try {
        const s = await axios.get("http://localhost:3000/room");
        setRoomList(s.data);
      } catch (err) {
        console.log(err);
      }
    };

    data();
  }, []);

  return (
    <nav className="w-[255px]  ">
      <div className="bg-white h-20 border-slate-300 border-r-[1px]">
        <div className="w-20">
          <Scissors />
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-gray-300"></div>
      <div className="p-5">
        <div className="font-bold text-4xl pb-2">Chats</div>
      </div>
      <div className="flex items-center justify-center">
        <ul className="h-[648px] w-64 px-5 overflow-y-scroll scroll">
          {roomList?.map((el) => {
            return <ChatItem link={el.name} key={el.id} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
