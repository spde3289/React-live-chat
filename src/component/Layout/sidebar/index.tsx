import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRoomList } from "@/fetch/roomFatch";
import { RoomListType } from "@/type/room";
import SidebarHeader from "./sidebarHeader";
import StatusController from "./statusController";
import ChatItem from "./chatItem";

const Sidebar = () => {
  const [roomList, setRoomList] = useState<RoomListType>(null);
  const { pathname } = useLocation();

  const currentPathName = decodeURIComponent(pathname).replace("/", "");

  useEffect(() => {
    getRoomList().then((response) => {
      setRoomList(response);
    });
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
