import "../Styles/LandingPage.css";
import HeroBanner from "../Components/HeroBanner";
import Ads from "../Components/Ads";
import { useRef } from "react";
import Product2 from "../Components/products2";


function LandingPage() {
  const ref = useRef(null);

  return (
    <div className="Landing_page">
      <HeroBanner />
      <Ads />
      <Product2/>
    </div>
  );
}

export default LandingPage;
