import { Get, Post } from "./backEnd";
import { isCheckRoomList } from "@/util/isCheckRoomList";
import { RoomListType } from "@/type/room";

export const getRoomList = async () => {
  return Get<RoomListType>("/room")
    .then((res) => {
      const data = res.data;
      if (isCheckRoomList(data)) {
        return data;
      }
      return null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

interface ReqBodyType {
  id: string;
  name: string;
  user: string;
  status: string;
}

export const CreateRoom = async (data: ReqBodyType) => {
  console.log(data);
  return Post<ReqBodyType>("/room", data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};
