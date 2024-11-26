import React from "react";
import "../Styles/MyStyles.css"
import { Box } from "@mui/material";
import heroBanner from '../Assets/sale_img.png';

function HeroBanner() {
    return (<Box className="Hero-Banner">
        <img className="Hero-Banner-img" src={heroBanner} alt="Hero"/>
    </Box>);
}

export default HeroBanner;