import NavBar from "../Components/NavBar";
import HeroBanner from "../Components/HeroBanner";
import Ads from "../Components/Ads";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import { useRef } from "react";

function LandingPage() {
  const ref = useRef(null);
  return (
    <div className="Landing_page">
      <HeroBanner />
      <Ads />
      <Products />
    </div>
  );
}

export default LandingPage;
