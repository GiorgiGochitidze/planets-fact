import "./navbar.css";
import menu from "./assets/menu.svg";
import { useState } from "react";

const Navbar = ({ handlePlanetClick, PlanetsListOpacity, planetsList }) => {
  const [dropbox, setDropbox] = useState(false);
  const [bg, setBg] = useState(false);

  const toggleDropbox = () => {
    setDropbox(!dropbox);
    setBg(!bg); // Toggle the blur state
  };

  const headerBlur = {
    backgroundColor: bg ? "#070724" : "none", // Apply blur based on blur state
  };

  return (
    <>
      <header style={headerBlur}>
        <nav>
          <h2>THE PLANETS</h2>
          <div className="planets-list">
            {planetsList.map((planet, index) => (
              <p
                key={index}
                style={PlanetsListOpacity(index)}
                onClick={() => handlePlanetClick(index)}
              >
                {planet}
              </p>
            ))}
          </div>
          <img
            onClick={toggleDropbox}
            src={menu}
            alt="menu icon"
            className="menu-btn"
          />
        </nav>
      </header>
      {dropbox && (
        <div className="dropbox-container">
          <div className="dropbox-card">
          <div className="circle"></div>
            {planetsList.map((planet, index) => (
              
                <p
                  key={index}
                  style={PlanetsListOpacity(index)}
                  onClick={() => handlePlanetClick(index)}
                >
                 ⚪{planet}⚪
                </p>
              
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
