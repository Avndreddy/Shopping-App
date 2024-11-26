import "../Styles/MyStyles.css";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { List } from "@mui/material";

function Footer() {
  const EmailPlaceHolder = () => {
    return <EmailIcon />;
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="NewsLetter">
          <div className="NewsLetter-title">NEWSLETTER</div>
          <div className="NewsLetter-p-tag">
            Join our mail list to stay udivdated for best offers and price
            alerts.
          </div>
          <div className="NewsLetter-input">
            {
              <EmailIcon
                sx={{
                  color: "gray",
                  fontSize: "medium",
                  paddingLeft: "8px",
                  position: "absolute",
                }}
              />
            }
            <input
              className="input-email"
              type="email"
              placeholder="Your email here..."
            />
            <button className="Subscribe-btn">Subscribe Now</button>
          </div>
        </div>

        <div className="Social-links">
          <div className="Social-links-text">Fallow us on:</div>
          <div className="Social-links-icons">
            <a href="https://www.facebook.com/">
              <FacebookIcon fontSize="medium" sx={{ color: "black" }} />
            </a>
            <a href="https://www.facebook.com/">
              <YouTubeIcon fontSize="medium" sx={{ color: "black" }} />
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon fontSize="medium" sx={{ color: "black" }} />
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon fontSize="medium" sx={{ color: "black" }} />
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon fontSize="medium" sx={{ color: "black" }} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-content-brand">
          <div className="footer-content-brand-logo">. Brand Logo</div>
          <div className="footer-content-brand-moto">
            Style That Defines You.
          </div>
          <div className="footer-content-about-brand">
            "At <span style={{ fontFamily: "Lobster",fontSize:"14px" }}>. Brand Logo</span>,
            Empowering your unique style with elegant, sustainable fashion.
          </div>
        </div>
        <div className="footer-content-quick-links">
            <div>Customer Service</div>
            <li>
                <a href="#">Contact Us</a>
            </li>
            <li>
                <a href="#">Track Order</a>
            </li>
            <li>
                <a href="#">Return Order</a>
            </li>
            <li>
                <a href="#">Return Order</a>
            </li>
        </div>
        <div className="footer-content-quick-links">
            <div>Company</div>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">We Are Hiring</a>
            </li>
            <li>
                <a href="#">FAQs</a>
            </li>
          
        </div>
      </div>

      <div>
        <div className="footer-foot">
          <span className="footer-foot-one">
            © MySite 2024. All Rights Reserve
          </span>
          <div className="footer-foot-two">
            <span>Privacy Policy </span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
