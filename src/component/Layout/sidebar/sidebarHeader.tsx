import { Link } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";

const SidebarHeader = () => {
  return (
    <Link to="/">
      <div className="hover:bg-hover rounded-lg h-10 mt-5 px-4 flex justify-between items-center">
        <h2 className="text-lg">새 채팅창</h2>
        <FaRegPenToSquare className="" size="20px" />
      </div>
    </Link>
  );
};

export default SidebarHeader;
