import { StatusType } from "@/type/room";

interface StatusContainerPropsType {
  name: StatusType;
  current: string;
  handleStatus: (name: StatusType) => void;
}

const StatusContainer = ({
  name,
  current,
  handleStatus,
}: StatusContainerPropsType) => {
  return (
    <div
      onClick={() => handleStatus(name)}
      className={`
      ${current === name ? "bg-[#FEFEFE] text-black" : "text-gray-500 "}
      text-sm font-black text-center w-full py-[6px] rounded-lg cursor-pointer select-none
      `}
    >
      {name}
    </div>
  );
};

export default StatusContainer;
