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

  const splitPath = decodeURIComponent(pathname).split("/");
  const currentPathName = "/" + splitPath[splitPath.length - 1];

  const handleStatus = (name: StatusType) => {
    setCurrentStatus(name);
  };

  return (
    <main className="w-full h-screen text-8xl">
      {currentPathName === "/list" && (
        <div className="w-[1024px] flex flex-col h-full m-0 mt-20 mx-auto">
          <div className="text-center w-fit flex-col text-4xl font-bold mb-12">
            Q&A
            <span className="after"></span>
          </div>
          <div className="w-full h-full">
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
            <div className="flex w-full h-full">
              <div className="px-5 min-w-[330px] h-full border-r-[1px] border-customGray">
                <StatusController
                  handleStatus={handleStatus}
                  currentStatus={currentStatus}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </main>
  );
}
