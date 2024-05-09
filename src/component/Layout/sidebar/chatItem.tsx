import { Link } from "react-router-dom";

interface ChatItemProps {
  link: string;
  path: string;
}

export default function ChatItem({ link, path }: ChatItemProps) {

  return (
    <Link to={link}>
      <li
        className={`
        ${path === link ? "bg-hover" : ""}
        hover:bg-hover rounded-md w-full h-9 p-2 flex items-center justify-between`}
      >
        <h3 className="text-sm">{link}</h3>
      </li>
    </Link>
  );
}
