import ChatItem from "./chatItem";
import Scissors from "../../svg/Scissors"; 

export default function Sidebar() {
  return (
    <nav className="w-[255px]  ">
      <div className="bg-white h-20 border-slate-300 border-r-[1px]">
        <div className="w-20">
          <Scissors />
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-gray-300"></div>
      <div className="p-5">
        <div className="font-bold text-4xl pb-2">Chats</div>
      </div>
      <div className="flex items-center justify-center">
        <ul className="h-[648px] w-64 px-5 overflow-y-scroll scroll">
          <ChatItem link="about" />
          <ChatItem link="2" />
          <ChatItem link="3" />
          <ChatItem link="4" />
          <ChatItem link="5" />
          <ChatItem link="6" />
          <ChatItem link="5" />
          <ChatItem link="6" />
        </ul>
      </div>
    </nav>
  );
}
