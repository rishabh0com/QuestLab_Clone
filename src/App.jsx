import "./App.css";
import mainImg from "./assets/mainImg.svg";
import AiDrivenSection from "./components/AiDrivenSection";
import DropDownNav from "./components/DropDownNav";
import DynamicIntelligent from "./components/DynamicIntelligent";

import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
function App() {

  return (
    <>
      <Navbar />
      <main className="main">
        <Heading />
        <div className="w-full flex justify-center">
          <img className="mainImg" src={mainImg} alt="" srcset="" />
        </div>
      </main>
      <AiDrivenSection />
      <DynamicIntelligent/>
    </>
  );
}

export default App;
