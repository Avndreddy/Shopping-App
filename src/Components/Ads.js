import "../Styles/Ads.css";
import { Box } from "@mui/material";
import banner1 from "../Assets/banner1.png";
import banner2 from "../Assets/banner2.png";
import banner3 from "../Assets/banner3.png";
function Ads() {
  let imgs = [banner1, banner2, banner3];
  return (
    <div className="Ads">
      <div className="Ads-items">
        <img
          className="Ads-item-img"
          alt="No Image"
          src={banner1}
          height={"100%"}
        />
      </div>
      <div className="Ads-items">
        <img
          className="Ads-item-img"
          alt="No Image"
          src={banner2}
          height={"100%"}
        />
      </div>
      <div className="Ads-items">
        <img
          className="Ads-item-img"
          alt="No Image"
          src={banner3}
          height={"100%"}
        />
      </div>
      {imgs.map((images, index) => {
        <div className="Ads-items">
          <img
            className="Ads-item-img"
            alt="No Image"
            src={images}
            height={"100%"}
          />
        </div>;
      })}
    </div>
  );
}

export default Ads;
