// import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RoomListProvider from "./context/useRoomListContext";
import ModalContextProvider from "./context/useModalContext.tsx";
// import RootLayout from "./component/rootLayout/layout.tsx";
import PasswordModal from "./component/chatRoom/roomList/PasswordModal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RecoilRoot>
      <RoomListProvider>
        <ModalContextProvider>
          <App />
          <PasswordModal />
        </ModalContextProvider>
      </RoomListProvider>
    </RecoilRoot>
  </BrowserRouter>
);
