import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import HomePageComponent from "./component/home/index.tsx";
import Room from "./component/chatRoom";
import ChatRoom from "./component/chatRoom/chatRoom/index.tsx";
import RootLayout from "./component/Layout/layout.tsx";

function generateRandomNumber() {
  return Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
}

function App() {
  const location = useLocation();

  const path: string = location.pathname.replace("/", "").split("/")[1];

  const user = "user_" + generateRandomNumber();
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="" element={<HomePageComponent user={user} />} />
            <Route path="list" element={<Room />}>
              <Route
                path=":id"
                element={<ChatRoom user={user} roomName={path} />}
              />
            </Route>
          </Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
