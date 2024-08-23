import { Link } from "react-router-dom";

interface NavItemPropsType {
  children: JSX.Element;
  currentItem: string;
  link: string;
}

const NavItem = ({ children, currentItem, link }: NavItemPropsType) => {
  return (
    <Link to={link}>
      <div
        className={`${
          currentItem === link ? "bg-[#4f7378] fill-white" : ""
        } flex justify-center items-center w-[60px] h-[52px]`}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavItem;
