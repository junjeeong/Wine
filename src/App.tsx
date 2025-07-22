import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/page/home";
import MyProfile from "@/page/my-profile";
import SignUp from "@/page/auth/sign-up";
import SignIn from "@/page/auth/sign-in";
import WineList from "@/page/wines";
import WineDetail from "@/page/wines/[wineId]";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/wines" element={<WineList />} />
          <Route path="/wines/:wineId" element={<WineDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
