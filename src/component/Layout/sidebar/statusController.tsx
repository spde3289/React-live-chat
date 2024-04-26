import StatusContainer from "./statusContainer";

const StatusController = () => {
  return (
    <div className="mb-5 mx-3 rounded-lg bg-[#EEEEEE] p-1 justify-between flex">
      <StatusContainer current={true} name="진행중" />
      <StatusContainer current={false} name="종료됨" />
    </div>
  );
};

export default StatusController;
