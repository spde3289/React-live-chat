import { Link } from "react-router-dom";
import Arrow from "../../svg/Arrow";

interface ChatItemProps {
  link: string;
}

export default function ChatItem({ link }: ChatItemProps) {
  return (
    <Link to={link}>
      <li className="rounded-2xl w-full min-w-40 h-24 shadow-xl mb-3 p-6 flex bg-white items-center justify-between">
        <h3 className="font-bold text-xl">{link}</h3>
        <Arrow />
      </li>
    </Link>
  );
}
