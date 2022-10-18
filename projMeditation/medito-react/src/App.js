
import "./App.css";
import Home from "./home/home";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import TimerPage from "./Timer/Timer";
import AasanaPage from "./aasana/AasanaPage";
import SoothingSoundPage from "./sound/SoothingSoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timer" element={<TimerPage />} />
          <Route path="aasana" element={<AasanaPage />} />
          <Route path="soothing" element={<SoothingSoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
