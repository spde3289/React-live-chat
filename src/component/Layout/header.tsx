import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex w-screen h-20 bg-white items-center">
        <h1 className="p-5 font-bold text-blue text-3xl">
          <Link to="/">Live Chat</Link>
        </h1>
      </header>
      <div className="h-2 bg-gradient-to-b from-gray-300"></div>
    </>
  );
}
