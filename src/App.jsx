import { Route, Routes } from "react-router-dom";
import "./style/app.css";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import HeroesInfo from "./additional–°omponents/HeroesInfo";
import ComicsInfo from "./additional–°omponents/ComicsInfo";
import Navbar from "./components/Navbar";
import ComicsSection from "./additional–°omponents/ComicsSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/HeroesInfo/:id" element={<HeroesInfo />} />
        <Route path="/ComicsInfo/:id" element={<ComicsInfo />} />
        <Route path="/ComicsSection" element={<ComicsSection />} />
      </Routes>
    </div>
  );
}

export default App;
