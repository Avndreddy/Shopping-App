import { Box } from "@mui/material";
import banner from '../Assets/banner.png';

function Ads() {

    return (<Box className="Ads">
        <div className="Ads-items">
            <img className="Ads-item-img" alt="No Image" src={banner}  height={"100%"} />
        </div>
        <div className="Ads-items">
        <img className="Ads-item-img" alt="No Image" src={banner}  height={"100%"} />
        </div>
        <div className="Ads-items">
        <img className="Ads-item-img" alt="No Image" src={banner}  height={"100%"} />
        </div>
        <div className="Ads-items">
        <img className="Ads-item-img" alt="No Image" src={banner}  height={"100%"} />
        </div>
       
    </Box>);
}

export default Ads;