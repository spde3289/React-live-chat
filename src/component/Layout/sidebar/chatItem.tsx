import { Link } from "react-router-dom";

interface ChatItemProps {
  link: string;
}

export default function ChatItem({ link }: ChatItemProps) {
  return (
    <Link to={link}>
      <li className="rounded-2xl w-full min-w-40 h-20 shadow-xl mb-3 p-6 flex bg-white items-center justify-between">
        <h3 className="font-bold text-lg">{link}</h3>
      </li>
    </Link>
  );
}
