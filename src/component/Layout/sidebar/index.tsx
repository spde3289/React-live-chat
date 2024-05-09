import { useEffect } from "react";
import { useRoomListContext } from "@/context/useRoomListContext";
import { useLocation } from "react-router-dom";
import { getRoomList } from "@/fetch/roomFatch";
import SidebarHeader from "./sidebarHeader";
import StatusController from "./statusController";
import ChatItem from "./chatItem";

const Sidebar = () => {
  const { value, updateValue } = useRoomListContext();
  const { pathname } = useLocation();

  const currentPathName = decodeURIComponent(pathname).replace("/", "");

  useEffect(() => {
    getRoomList().then((response) => {
      updateValue(response);
    });
  }, []);

  return (
    <nav className="w-[240px] min-w-[240px] px-3 h-screen bg-base">
      <SidebarHeader />
      <div className="w-full mt-5 px-3">
        <StatusController />
        <div className="scrollBarController flex flex-col items-center justify-center">
          <ul className="content-container w-full pr-2 overflow-y-scroll scrollBar">
            {value?.map((el) => {
              return (
                <ChatItem
                  path={currentPathName}
                  link={el.roomName}
                  key={el.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
