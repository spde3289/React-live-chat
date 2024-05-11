import { useLocation } from "react-router-dom";
import CharRoom from "./chatRoom";

interface RoomType {
  user: string;
}

export default function Room({ user }: RoomType) {
  const location = useLocation();

  const path: string = location.pathname.replace("/", "");
  const decodedParameter = decodeURIComponent(path) + location.hash;
  
  return (
    <main className="w-full justify-center flex h-screen text-8xl ">
      <div className="w-[70%] justify-center flex h-full">
        <CharRoom user={user} roomName={decodedParameter} />
      </div>
    </main>
  );
}
