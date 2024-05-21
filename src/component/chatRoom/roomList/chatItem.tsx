import { Link } from "react-router-dom";

interface ChatItemProps {
  link: string;
  name: string;
  idx:number;
  status: string;
  selectMenu: string;
}

export default function ChatItem({
  link,
  name,
  status,
  idx,
  selectMenu,
}: ChatItemProps) {
  return (
    <Link to={link}>
      <li
        className={`
        ${idx % 2 === 1 ? "bg-[#fafafa]" : ""}
        rounded-md w-full flex items-center justify-between text-gray-950`}
      >
        <p className="text-sm box-content w-full p-[15px_30px] pl-3 ">{name}</p>
        <p className="text-sm font-bold box-content min-w-52 p-[15px_30px] pl-3">
          {selectMenu}
        </p>
        <p className="text-sm box-content min-w-12 p-[15px_30px] pl-3 text-slate-500">
          {status}
        </p>
      </li>
    </Link>
  );
}
