import "./home.css";
import NewNav from "../components/NewNav.jsx";
import Navbar from "../components/Navbar.jsx";
import Heading from "../components/HomePageSections/Heading.jsx";
import AiDrivenSection from "../components/HomePageSections/AiDrivenSection.jsx";
import DynamicIntelligent from "../components/HomePageSections/DynamicIntelligent.jsx";
import LetOurAI from "../components/HomePageSections/LetOurAI.jsx";
import Features from "../components/HomePageSections/Features.jsx";
import MainCards from "../components/HomePageSections/MainCards.jsx";
import CustmoreReview from "../components/HomePageSections/CustmoreReview.jsx";
import DataResource from "../components/HomePageSections/DataResource.jsx";
import BookACall from "../components/HomePageSections/BookACall.jsx";
import Footer from "../components/Footer.jsx";
import HubIcon from "../components/HubIcon.jsx";
import mainImg from "../assets/mainImg.svg";
// import ResourceDropDownNav from "../components/ResourceDropDownNav.jsx";

const Home = () => {
  return (
    <>
      <NewNav />
      <Navbar />
      <main className="main">
        <Heading />
        <div className="w-full flex justify-center">
          <img className="mainImg" src={mainImg} alt="" />
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
      <HubIcon />
    </>
  );
};

export default Home;
