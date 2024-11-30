import { useRef, useState, useEffect } from "react";
import { List, ListItem } from "@mui/material";
import "../Styles/MyStyles.css";

function OpenOverlay() {
  const [isOverlayOpened, setIsOverlatOpened] = useState(true);
  const outsideClicked = useRef(null);
  const listItem = [
    { label: "Men", subItems: ["Shirts", "Pants", "Shoes"] },
    { label: "Women", subItems: ["Dresses", "Jewelry", "Handbags"] },
    { label: "Kids", subItems: ["Toys", "Clothing", "Shoes"] },
    { label: "Home & Living", subItems: ["Furniture", "Decor", "Lighting"] },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClickedOutside = (event) => {
    if (
      outsideClicked.current &&
      !outsideClicked.current.contains(event.target)
    ) {
      setIsOverlatOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickedOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, []);

  const openList = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    isOverlayOpened && (
      <div
        ref={outsideClicked}
        className="overlay"
        onClick={(e) => e.stopPropagation()}
      >
        {listItem.map((value, index) => (
          <div key={index}>
            <div
              onClick={() => openList(index)}
              className="Overlay-ListItems"
              key={index}
            >
              {value.label} <span className="right-arrow">&gt;</span>
            </div>
            {selectedIndex === index && (
              <div>
                {value.subItems.map((subItem, subindex) => (
                  <div className="Overlay-Sub-ListItems" key={subindex}>
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  );
}

export default OpenOverlay;
