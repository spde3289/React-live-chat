import { createContext, useState, useContext } from "react";
import { RoomListType } from "@/type/room";

type useRoomListContextRetuenType = {
  roomList: RoomListType;
  setRoomList: (newRoomList: RoomListType) => void;
};

const RoomListContext = createContext<useRoomListContextRetuenType>({
  roomList: null,
  setRoomList: () => {}, // 기본값으로 빈 함수를 설정
});

type RoomListProviderType = {
  children: React.ReactNode;
};
const RoomListProvider = ({ children }: RoomListProviderType) => {
  const RoomList = useMyContext();

  return <RoomListContext.Provider children={children} value={RoomList} />;
};

const useMyContext = () => {
  const [roomList, setroomList] = useState<RoomListType>(null);
  // 값을 업데이트하는 함수
  const setRoomList = (newRoomList: RoomListType) => {
    setroomList(newRoomList);
  };

  return { roomList, setRoomList };
};

export function useRoomListContext(): useRoomListContextRetuenType {
  return useContext(RoomListContext);
}

export default RoomListProvider;
