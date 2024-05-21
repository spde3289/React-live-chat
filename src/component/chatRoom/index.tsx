import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRoomListContext } from "@/context/useRoomListContext";
import { getRoomList } from "@/fetch/roomFatch";
import ChatItem from "./roomList/chatItem";

export default function Room() {
  const { roomList, setRoomList } = useRoomListContext();
  const { pathname } = useLocation();

  useEffect(() => {
    getRoomList().then((response) => {
      setRoomList(response);
    });
  }, []);

  const splitPath = decodeURIComponent(pathname).split("/");
  const currentPathName = "/" + splitPath[splitPath.length - 1];

  return (
    <main className="w-full h-screen text-8xl">
      {currentPathName === "/list" && (
        <div className="w-[824px] flex flex-col items-center h-full m-0 mt-20 mx-auto">
          <div className="text-center w-fit flex-col text-4xl font-bold mb-12">
            Q&A
            <span className="after"></span>
          </div>
          <div className="w-full h-full">
            <div className="flex text-xs border-b-[1px] text-slate-500">
              <div className="box-content w-full p-[15px_30px] pl-3 ">제목</div>
              <div className="box-content min-w-52 p-[15px_30px] pl-3 ">
                카테고리
              </div>
              <div className="box-content min-w-12 p-[15px_30px] pl-3 ">
                상태
              </div>
            </div>
            <div className="h-[600px] overflow-y-scroll scrollBar">
              {roomList?.map((el, idx: number) => {
                return (
                  <ChatItem
                    name={el.roomName}
                    status={el.status}
                    selectMenu={el.selectMenu}
                    link={el.id}
                    idx={idx}
                    key={el.id}
                  />
                );
              })}
            </div>
          </div>
          {/* <div className="flex w-full h-full">
              <div className="px-5 min-w-[330px] h-full border-r-[1px] border-customGray">
                <StatusController
                  handleStatus={handleStatus}
                  currentStatus={currentStatus}
                />
              </div>
            </div> */}
        </div>
      )}
      <Outlet />
    </main>
  );
}
