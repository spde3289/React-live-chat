import { Get, Post } from "./backEnd";
import { isValidRoomList } from "@/util/isValue";
import { RoomListType } from "@/type/room";

export const getRoomList = async () => {
  return Get<RoomListType>("/room")
    .then((res) => {
      const data = res.data;
      if (isValidRoomList(data)) {
        return data;
      }
      return null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const CreateRoom = async (data: any) => {
  return Post<any>("/room", data)
    .then((res: any) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};
