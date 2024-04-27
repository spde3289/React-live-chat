type RoomListType = { id: number; name: string }[] | null;

export function isValidRoomList(data: any): data is RoomListType {
  if (data === null) return true; // null인 경우 유효
  if (!Array.isArray(data)) return false; // 배열이 아닌 경우 유효하지 않음

  // 배열의 각 요소가 { id: number, name: string } 형태인지 검사
  return data.every(
    (item: any) => typeof item === "object" && "id" in item && "name" in item
  );
}
