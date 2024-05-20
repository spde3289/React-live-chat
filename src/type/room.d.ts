export type RoomListType =
  | {
      id: string;
      roomName: string;
      status: string;
      selectMenu: string;
    }[]
  | null;

export type ChatLogType = {
  user: string;
  msg: string;
};

export type StatusType = "진행중" | "종료됨";
