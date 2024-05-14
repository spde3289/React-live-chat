import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRoomListContext } from "@/context/useRoomListContext";
import { getRoomList } from "@/fetch/roomFatch";
import StatusController from "./roomList/statusController";
import { StatusType } from "@/type/room";
import ChatItem from "./roomList/chatItem";

export default function Room() {
  const [currentStatus, setCurrentStatus] = useState<StatusType>("진행중");
  const { roomList, setRoomList } = useRoomListContext();
  const { pathname } = useLocation();

  useEffect(() => {
    getRoomList().then((response) => {
      setRoomList(response);
    });
  }, []);

  const currentPathName = "/" + decodeURIComponent(pathname).split("/")[1];

  const handleStatus = (name: StatusType) => {
    setCurrentStatus(name);
  };

  return (
    <main className="w-full justify-center flex h-screen text-8xl ">
      <div className="w-full justify-center flex h-full">
        <div className="w-[240px]">
          <StatusController
            handleStatus={handleStatus}
            currentStatus={currentStatus}
          />
          <ul>
            {roomList?.map((el) => {
              return (
                currentStatus === el.status && (
                  <ChatItem
                    name={el.roomName}
                    path={currentPathName}
                    link={el.id}
                    key={el.id}
                  />
                )
              );
            })}
          </ul>
        </div>
        <Outlet />
      </div>
    </main>
  );
}
