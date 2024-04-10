import { Route, Routes, Outlet } from "react-router-dom";
import Room from "./component/chatRoom/Room.tsx";
import RootLayout from "./component/rootLayout/layout.tsx";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/:id" element={<Room />} />
          </Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
