import "./navbar.css";
import menu from "./assets/menu.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ handlePlanetClick, PlanetsListOpacity, planetsList }) => {
  const [dropbox, setDropbox] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(false);
  const [bg, setBg] = useState(false);

  const toggleDropbox = () => {
    setDropbox(!dropbox);
    setBg(!bg); // Toggle the blur state
    setMenuOpacity(!menuOpacity);
  };

  const headerBlur = {
    backgroundColor: bg ? "#070724" : "none", // Apply blur based on blur state
  };

  const menuopacity = {
    opacity: menuOpacity ? "50%" : "1",
  };

  return (
    <>
      <header style={headerBlur}>
        <nav>
          <motion.h2
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            THE PLANETS
          </motion.h2>
          <div className="planets-list">
            {planetsList.map((planet, index) => (
              <p
                key={index}
                style={PlanetsListOpacity(index)}
                onClick={() => {
                  handlePlanetClick(index);
                }}
              >
                {planet}
              </p>
            ))}
          </div>
          <motion.img
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={toggleDropbox}
            src={menu}
            alt="menu icon"
            className="menu-btn"
            style={menuopacity}
          />
        </nav>
      </header>
      {dropbox && (
        <div className="dropbox-container">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="dropbox-card"
          >
            {planetsList.map((planet, index) => (
              <p
                key={index}
                style={PlanetsListOpacity(index)}
                onClick={() => {
                  handlePlanetClick(index);
                  setDropbox(false);
                }}
              >
                ⚪{planet}⚪
              </p>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
