import StatusContainer from "./StatusContainer";
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
      <div className="relative mb-5 p-1 justify-between">
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
