import { useState } from "react";
import "./App.css";
import Popup from "./components/popup";
import SearchBar from "./components/searchBar";
import { MainPage } from "./components/mainPage";
import { MyPage } from "./components/myPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup ? (
        <Popup onClose={() => setShowPopup(false)} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
            {/* <Route path="/item:id" element={<ItemPage />} /> */}
          </Routes>
          <SearchBar />
          <MainPage />
        </>
      )}
    </>
  );
}

export default App;
