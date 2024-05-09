import { RoomListType } from "@/type/room";

export function isCheckRoomList(data: any): data is RoomListType {
  if (data === null) return true; // null인 경우 유효
  if (!Array.isArray(data)) return false; // 배열이 아닌 경우 유효하지 않음

  return data.every(
    (item: any) =>
      typeof item === "object" &&
      "id" in item &&
      "roomName" in item &&
      "status" in item
  );
}
