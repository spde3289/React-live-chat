import { Link } from "react-router-dom";

interface ChatItemProps {
  link: string;
}

export default function ChatItem({ link }: ChatItemProps) {
  return (
    <Link to={link}>
      <li className="hover:bg-hover rounded-md w-full h-9 p-2 flex items-center justify-between">
        <h3 className="text-sm">{link}</h3>
      </li>
    </Link>
  );
}
