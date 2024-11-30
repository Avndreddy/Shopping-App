import React, { useEffect, useRef, useState } from "react";
import "../Styles/MyStyles.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Box, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import OpenOverlay from "./OverlayMenu";

function NavBar() {
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isPersonHovered, setIsPersonHovered] = useState(false);
  const [isWhshlistHovered, setIsWishlistHovered] = useState(false);
  const [isBagHovered, setIsBagHovered] = useState(false);
  const [isOverlayOpened, setIsOverlatOpened] = useState(false);
  const [category, setCategory] = useState({
    Man: false,
    Woman: false,
    Kids: false,
    Home: false,
  });
  const listItem = [
    { label: "Men", subItems: ["Shirts", "Pants", "Shoes"] },
    { label: "Women", subItems: ["Dresses", "Jewelry", "Handbags"] },
    { label: "Kids", subItems: ["Toys", "Clothing", "Shoes"] },
    { label: "Home & Living", subItems: ["Furniture", "Decor", "Lighting"] },
  ];

  return (
    <Box>
      <Box className="Nav-Bar">
        <Box className="Logo">
          <Box
            className="left-Menu"
            onClick={() => setIsOverlatOpened(!isOverlayOpened)}
          >
            <MenuIcon />
            {isOverlayOpened && <OpenOverlay />}
          </Box>
          . Brand Logo
        </Box>
        <Box className="navigation">
          {listItem.map((item, index) => (
            <Box
              className="Navigation-item"
              onMouseEnter={() => setCategory({ ...category, [item.label]: true })}
              onMouseLeave={() => setCategory({ ...category, [item.label]: false })}
              keys={index}
            >
              {item.label} <span className="right-arrow">&gt;</span>
              {category[item.label] &&
                <div
                className="nav-List"
                >
                  {item.subItems.map((subItem, subindex) => (
                    <div className="Navigation-Subitem" key={subindex}>{subItem}</div>
                  ))}
                </div>
              }
            </Box>
          ))}
        </Box>

        
        <Box className="right-navigation">
          <Box
            className="right-navigation-Icons"
            onMouseEnter={() => setIsSearchHovered(true)}
            onMouseLeave={() => setIsSearchHovered(false)}
          >
            {isSearchHovered ? <SearchOutlinedIcon /> : <SearchOutlinedIcon />}
            Search
          </Box>
          <Box
            className="right-navigation-Icons"
            onMouseEnter={() => setIsPersonHovered(true)}
            onMouseLeave={() => setIsPersonHovered(false)}
          >
            {isPersonHovered ? <PersonIcon /> : <PersonOutlineOutlinedIcon />}
            Profile
          </Box>
          <Box
            className="right-navigation-Icons"
            onMouseEnter={() => setIsWishlistHovered(true)}
            onMouseLeave={() => setIsWishlistHovered(false)}
          >
            {isWhshlistHovered ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            Wishlist
          </Box>
          <Box
            className="right-navigation-Icons"
            onMouseEnter={() => setIsBagHovered(true)}
            onMouseLeave={() => setIsBagHovered(false)}
          >
            {isBagHovered ? <ShoppingBagIcon /> : <ShoppingBagOutlinedIcon />}
            Bag
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default NavBar;
