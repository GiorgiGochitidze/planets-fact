import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import { useState } from "react";
import mercury from "./assets/images/planet-mercury.svg";
import venus from "./assets/images/planet-venus.svg";

function App() {
  const [selected, setSelected] = useState(0);
  const [urls, setUrls] = useState(mercury);
  const [description, setDescription] = useState(
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
  );
  const [selectedButton, setSelectedButton] = useState(0);

  const planetsList = [
    "MERCURY",
    "VENUS",
    "EARTH",
    "MARS",
    "JUPITER",
    "SATURN",
    "URANUS",
    "NEPTUNE",
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const getButtonStyle = (index) => ({
    background: selectedButton === index ? "#419ebb" : "transparent",
  });

  // function to get current selected planet from navbar
  const handleSelect = (index) => {
    const selectedPlanet = planetsList[index];
    console.log("Selected planet:", selectedPlanet); // Log the currently selected planet
    setSelected(index);
  };

  // function to handle
  const PlanetsListOpacity = (index) => {
    return {
      opacity: index === selected ? 1 : 0.75, // Setting opacity based on selection
    };
  };

  // function to set planets values
  const handlePlanetClick = (index) => {
    const selectedPlanet = planetsList[index];
    console.log("Selected planet:", selectedPlanet);
    const { imageUrl, description } = getImageUrl(selectedPlanet);
    setUrls(imageUrl);
    setDescription(description);
    handleSelect(index);
  };

  // function to change a image when user clicks on planets list in navbar
  const getImageUrl = (planet) => {
    switch (planet) {
      case "MERCURY":
        return {
          imageUrl: mercury,
          description:
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        };
      case "VENUS":
        return {
          imageUrl: venus,
          description:
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        };
      // Add cases for other planets here
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar
        handlePlanetClick={handlePlanetClick}
        PlanetsListOpacity={PlanetsListOpacity}
        planetsList={planetsList}
      />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                urls={urls}
                description={description}
                selectedPlanet={planetsList[selected]}
                getButtonStyle={getButtonStyle}
                handleButtonClick={handleButtonClick}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
