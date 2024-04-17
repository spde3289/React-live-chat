import { useLocation } from "react-router-dom";
import CharRoom from "./chatRoom/chatRoom";
import ParticipantCounter from "./ParticipantCounter/ParticipantCounter";

export default function Room() {
  const location = useLocation();

  const path: string = location.pathname.replace("/", "");
  const decodedParameter = decodeURIComponent(path);

  return (
    <div className="shadow-xl w-full mx-2 text-8xl ">
      <div className="w-full flex bg-white h-full">
        <CharRoom roomId={decodedParameter} />
        <ParticipantCounter roomId={decodedParameter} />
      </div>
    </div>
  );
}
