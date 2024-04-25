import { useState, useEffect } from "react";
import ChatItem from "./chatItem";
import client from "../../../fetch/backEnd";
import SidebarHeader from "./sidebarHeader";

type RoomListType = { id: number; name: string }[] | null;

const Sidebar = () => {
  const [roomList, setRoomList] = useState<RoomListType>(null);

  useEffect(() => {
    const data = async () => {
      try {
        const s = await client.get("/room");
        setRoomList(s.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);

  return (
    <nav className="w-[20%]  bg-base ">
      <SidebarHeader />
      {/*       <div className="p-5 justify-between flex">
        <div>진행중</div>
        <div>보류중</div>
        <div>종료됨</div>
      </div> */}
      <div className="flex items-center justify-center">
        <ul className="content-container h-full w-64 px-5 overflow-y-scroll scroll">
          {roomList?.map((el) => {
            return <ChatItem link={el.name} key={el.id} />;
          })}
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
          <ChatItem link={"ddddqwd"} />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
