import { useLocation } from "react-router-dom";
import CharRoom from "./chatRoom/chatRoom";
import ParticipantCounter from "./ParticipantCounter/ParticipantCounter";
export default function Room() {
  const location = useLocation();

  const path: string = location.pathname.replace("/", "");
  console.log(location);
  const decodedParameter = decodeURIComponent(path);

  return (
    <div className="shadow-xl w-full mx-2 text-8xl ">
      <div className="w-full flex bg-white h-full">
        <CharRoom room={decodedParameter} />
        <ParticipantCounter room={decodedParameter} />
      </div>
    </div>
  );
}
