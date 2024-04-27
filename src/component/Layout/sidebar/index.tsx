import { useState, useEffect } from "react";
import client from "../../../fetch/backEnd";
import { isValidRoomList } from "../../../util/isValue";
import ChatItem from "./chatItem";
import SidebarHeader from "./sidebarHeader";
import StatusController from "./statusController";

type RoomListType = { id: number; name: string }[] | null;

const Sidebar = () => {
  const [roomList, setRoomList] = useState<RoomListType>(null);

  useEffect(() => {
    const data = async () => {
      try {
        const { data } = await client.get("/room");
        console.log(data);
        if (isValidRoomList(data)) {
          setRoomList(data);
        }
        return data;
      } catch (err) {
        console.log(err);
      }
    };

    data();
  }, []);

  console.log(roomList);
  return (
    <nav className="min-w-[260px] px-[12px] h-screen bg-base ">
      <SidebarHeader />
      <div className="w-full mt-5">
        <StatusController />
        <div className="flex flex-col items-center justify-center">
          <ul className="content-container w-full px-5 overflow-y-scroll scroll">
            {roomList?.map((el) => {
              return <ChatItem link={el.name} key={el.id} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
