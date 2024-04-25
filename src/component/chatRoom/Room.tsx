import { useLocation } from "react-router-dom";
import CharRoom from "./chatRoom/chatRoom";
// import ParticipantCounter from "./ParticipantCounter/ParticipantCounter";

export default function Room({user}: any) {
  const location = useLocation();

  const path: string = location.pathname.replace("/", "");
  const decodedParameter = decodeURIComponent(path);

  return (
    <div className="m-0 w-full mx-2 text-8xl ">
      <div className="w-full justify-center flex h-full">
        <CharRoom user={user} roomId={decodedParameter} />
        {/* <ParticipantCounter roomId={decodedParameter} /> */}
      </div>
    </div>
  );
}
