import "../../style/globals.css";
// import Header from "./header";
import Sidebar from "./sidebar";

export default function RootLayout(props: any) {
  return (
    <div className={` overflow-hidden h-screen`}>
      {/* <Header /> */}
      <section className="flex max-h-full">
        <Sidebar />
        {props.children}
      </section>
    </div>
  );
}
