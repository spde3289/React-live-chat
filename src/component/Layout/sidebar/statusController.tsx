import { useState } from "react";
import StatusContainer from "./statusContainer";

export type StatusType = "진행중" | "종료됨";

const StatusController = () => {
  const [currentStatus, setCurrentStatus] = useState<StatusType>("진행중");

  const handleStatus = (name: StatusType) => {
    setCurrentStatus(name);
  };

  return (
    <>
      <div className="relative mb-5 rounded-lg bg-[#EEEEEE] p-1 justify-between flex">
        <StatusContainer
          handleStatus={handleStatus}
          current={currentStatus}
          name="진행중"
        />
        <StatusContainer
          handleStatus={handleStatus}
          current={currentStatus}
          name="종료됨"
        />
      </div>
    </>
  );
};


export default StatusController;
