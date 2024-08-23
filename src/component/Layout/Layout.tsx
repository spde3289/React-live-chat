import "../../style/globals.css";
// import Header from "./header";
import Sidebar from "./sidebar";

interface RootLayout {
  children: JSX.Element;
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <div className="font-sans overflow-hidden h-screen">
      {/* <Header /> */}
      <section className="flex max-h-full">
        <Sidebar />
        {children}
      </section>
    </div>
  );
}
