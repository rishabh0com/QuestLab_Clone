import "./App.css";
import mainImg from "./assets/mainImg.svg";
import AiDrivenSection from "./components/AiDrivenSection";
import BookACall from "./components/BookACall";
import CustmoreReview from "./components/CustmoreReview";
import DataResource from "./components/DataResource";
import DropDownNav from "./components/DropDownNav";
import DynamicIntelligent from "./components/DynamicIntelligent";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Heading from "./components/Heading";
import HubIcon from "./components/HubIcon";
import LetOurAI from "./components/LetOurAI";
import MainCards from "./components/MainCards";
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
      <DynamicIntelligent />
      <LetOurAI />
      <Features />
      <MainCards />
      <CustmoreReview />
      <DataResource />
      <BookACall />
      <Footer />
      <HubIcon/>
    </>
  );
}

export default App;
