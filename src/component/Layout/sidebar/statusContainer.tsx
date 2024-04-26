interface StatusContainerPropsType {
  name: string;
  current: boolean;
}

const StatusContainer = ({ name, current }: StatusContainerPropsType) => {
  return (
    <div
      className={`
      ${current ? "bg-[#FEFEFE] text-black" : "text-gray-500 "}
      text-sm font-black text-center w-full py-[6px] rounded-lg
      `}
    >
      {name}
    </div>
  );
};

export default StatusContainer;
