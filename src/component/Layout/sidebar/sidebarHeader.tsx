import { FaPlusCircle } from "react-icons/fa";

const SidebarHeader = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <h2 className="font-bold text-xl ml-10">전체</h2>
      <div className="flex font-bold text-xl items-center mr-10">
        <FaPlusCircle className="ml-2" color="rgb(146 76 244)" size="24px" />
      </div>
    </div>
  );
};

export default SidebarHeader;
