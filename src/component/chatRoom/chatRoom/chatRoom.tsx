import ContentContainer from "./contentContainer";
import InputBox from "./inputBox";

export default function CharRoom(props: any) {

  return (
    <section className="flex flex-col m-auto shadow-lg h-[824px] w-[100%] mx-0">
      <div>
        <header className="flex items-center bg-white h-20 border-slate-300 ">
          <h2 className="text-4xl pl-5 font-bold">{props.room}</h2>
        </header>
        <div className="h-2 bg-gradient-to-b from-gray-200"></div>
      </div>
      <div className="flex h-[100%] justify-between flex-col">
        <ContentContainer userType="me" room={props.room} />
        <InputBox />
      </div>
    </section>
  );
}
