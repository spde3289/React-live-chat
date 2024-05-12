import StatusContainer from "./statusContainer";
import { StatusType } from "@/type/room";

interface StatusControllerPropsType {
  handleStatus: (name: StatusType) => void;
  currentStatus: StatusType;
}

const StatusController = ({
  handleStatus,
  currentStatus,
}: StatusControllerPropsType) => {
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
