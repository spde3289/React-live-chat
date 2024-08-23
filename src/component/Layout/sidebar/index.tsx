import { useLocation } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";
import { HiHome } from "react-icons/hi";
import { FaThList } from "react-icons/fa";
import NavItem from "./NavItem";

const Sidebar = () => {
  const { pathname } = useLocation();

  const currentPathName = "/" + decodeURIComponent(pathname).split("/")[1];

  return (
    <nav className="w-[60px] h-screen bg-base">
      <SidebarHeader />
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <ul className="w-full">
            <NavItem link="/" currentItem={currentPathName}>
              <HiHome
                className={`${
                  currentPathName === "/" ? "fill-white" : ""
                } hover:fill-white`}
                size="24"
                color="#9aafb1"
              />
            </NavItem>
            <NavItem link="/list" currentItem={currentPathName}>
              <FaThList
                className={`${
                  currentPathName === "/list" ? "fill-white" : ""
                } hover:fill-white`}
                size="20"
                color="#9aafb1"
              />
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
