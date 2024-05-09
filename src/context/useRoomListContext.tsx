import { createContext, useState, useContext } from "react";
import { RoomListType } from "@/type/room";

type useRoomListContextRetuenType = {
  value: RoomListType;
  updateValue: (newValue: RoomListType) => void;
};

const RoomListContext = createContext<useRoomListContextRetuenType>({
  value: null,
  updateValue: () => {}, // 기본값으로 빈 함수를 설정
});

type RoomListProviderType = {
  children: React.ReactNode;
};
const RoomListProvider = ({ children }: RoomListProviderType) => {
  const RoomList = useMyContext();

  return <RoomListContext.Provider children={children} value={RoomList} />;
};

const useMyContext = () => {
  const [value, setValue] = useState<RoomListType>(null);

  // 값을 업데이트하는 함수
  const updateValue = (newValue: RoomListType) => {
    setValue(newValue);
  };

  return { value, updateValue };
};

export function useRoomListContext(): useRoomListContextRetuenType {
  return useContext(RoomListContext);
}

export default RoomListProvider;
