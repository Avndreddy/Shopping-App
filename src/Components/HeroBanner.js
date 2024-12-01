import React from "react";
import "../Styles/HeroBanner.css";
import { Box } from "@mui/material";
import heroBanner from "../Assets/sale_img.png";

function HeroBanner() {
  return (
    <div className="Hero-Banner">
      <img className="Hero-Banner-img" src={heroBanner} alt="Hero" />
    </div>
  );
}

export default HeroBanner;
