import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import client from "../../../fetch/backEnd";
import { isValidRoomList } from "../../../util/isValue";
import ChatItem from "./chatItem";
import SidebarHeader from "./sidebarHeader";
import StatusController from "./statusController";

type RoomListType = { id: number; name: string }[] | null;

const Sidebar = () => {
  const [roomList, setRoomList] = useState<RoomListType>(null);
  const { pathname } = useLocation()

  const currentPathName = decodeURIComponent(pathname).replace("/", "");
  console.log(currentPathName);

  useEffect(() => {
    const data = async () => {
      try {
        const { data } = await client.get("/room");
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

  return (
    <nav className="w-[260px] px-[12px] h-screen bg-base ">
      <SidebarHeader />
      <div className="w-full mt-5">
        <StatusController />
        <div className="scrollBarController flex flex-col items-center justify-center">
          <ul className="content-container w-full px-5 overflow-y-scroll scrollBar">
            {roomList?.map((el) => {
              return (
                <ChatItem path={currentPathName} link={el.name} key={el.id} />
              );
            })}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
