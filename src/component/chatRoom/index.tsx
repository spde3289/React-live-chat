import { Outlet, useLocation } from "react-router-dom";
import RoomListContainer from "./roomList";

export default function Room() {
  const { pathname } = useLocation();

  const splitPath = decodeURIComponent(pathname).split("/");
  const currentPathName = "/" + splitPath[splitPath.length - 1];

  return (
    <main className="w-full h-screen text-8xl">
      {currentPathName === "/list" && <RoomListContainer />}
      <Outlet />
    </main>
  );
}
