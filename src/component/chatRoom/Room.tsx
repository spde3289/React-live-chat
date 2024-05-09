import { useLocation, Navigate } from "react-router-dom";
import CharRoom from "./chatRoom";
import { useRoomListContext } from "@/context/useRoomListContext";

export default function Room({ user }: any) {
  const location = useLocation();
  const { value } = useRoomListContext()

  const path: string = location.pathname.replace("/", "");
  const decodedParameter = decodeURIComponent(path);

  return (
    <main className="w-full justify-center flex h-screen text-8xl ">
      {value === null && <Navigate replace={true} to="/" />}
      <div className="w-[70%] justify-center flex h-full">
        <CharRoom user={user} roomName={decodedParameter} />
      </div>
    </main>
  );
}
