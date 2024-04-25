import { Route, Routes, Outlet } from "react-router-dom";
import Room from "./component/chatRoom/Room.tsx";
import RootLayout from "./component/Layout/layout.tsx";

function generateRandomNumber() {
  return Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
}

/* function generateRandomNickname() {
  return "user_" + generateRandomNumber();
}
 */
function App() {
  const user = "user_" + generateRandomNumber();
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/:id" element={<Room user={user} />} />
          </Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
