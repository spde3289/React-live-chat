import { createContext, useState, useContext } from "react";
import { RoomListType } from "@/type/room";

const RoomListContext: any = createContext<
  | { value: RoomListType; updateValue: (newValue: RoomListType) => void }
  | undefined
>(undefined);

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

type useRoomListContextRetuenType = {
  value: RoomListType;
  updateValue: (newValue: RoomListType) => void;
};

export function useRoomListContext(): useRoomListContextRetuenType {
  return useContext(RoomListContext);
}

export default RoomListProvider;
