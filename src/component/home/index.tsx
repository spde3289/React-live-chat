import { useEffect } from "react";
import { CreateRoom } from "@/fetch/roomFatch";

const HomePageComponent = () => {
  useEffect(() => {
    console.log(CreateRoom());
  }, []);

  return (
    <main className="w-full">
      <div className="w-[60%] m-0 mx-auto">sadasdasd</div>
    </main>
  );
};

export default HomePageComponent;
