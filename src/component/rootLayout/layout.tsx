import "../../style/globals.css";
import Header from "./header";
import Sidebar from "./sidebar";

export default function RootLayout(props: any) {
  return (
    <div className={`flex flex-col bg-gray-100 overflow-hidden h-screen`}>
      <Header />
      <section className="flex">
        <Sidebar />
        {props.children}
      </section>
    </div>
  );
}
