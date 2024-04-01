import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import { useState } from "react";
import mercury from "./assets/images/planet-mercury.svg";
import venus from "./assets/images/planet-venus.svg";
import earth from "./assets/images/planet-earth.svg";

function App() {
  // state for selected planet in Navbar
  const [selected, setSelected] = useState(0);
  // state for image url of planets
  const [urls, setUrls] = useState(mercury);
  // state of default description about planet
  const [description, setDescription] = useState(
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
  );
  // decleares background color of buttons for every planets
  const [bgColor, setBgColor] = useState('#419ebb')
  // decleares index of selected button
  const [selectedButton, setSelectedButton] = useState(0);

  // state for rotation time of planet
  const [rotationTime, setRotationTime] = useState('58.6 days')
  const [revolutionTime, setRevolutionTime] = useState('87.97 days')
  const [radius, setRadius] = useState('2,439.7 km')
  const [avarageTemp, setAvarageTemp] = useState('430°c')

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

  const getButtonStyle = (index, backgroundColor) => ({
    background: selectedButton === index ? backgroundColor : "transparent",
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
    const { imageUrl, description, backgroundColor, rotationTime, revolutionTime, radius, avarageTemp } = getImageUrl(selectedPlanet);
    setBgColor(backgroundColor)
    setUrls(imageUrl);
    setDescription(description);
    handleSelect(index);
    setRotationTime(rotationTime)
    setRevolutionTime(revolutionTime)
    setRadius(radius)
    setAvarageTemp(avarageTemp)
  };

  // function to change a image when user clicks on planets list in navbar
  const getImageUrl = (planet) => {
    switch (planet) {
      case "MERCURY":
        return {
          imageUrl: mercury,
          description:
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
          backgroundColor: "#419ebb",
          rotationTime: '58.6 days',
          revolutionTime: '87.97 days',
          radius: '2,439.7 km',
          avarageTemp: '430°c',
        };
      case "VENUS":
        return {
          imageUrl: venus,
          description:
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
          backgroundColor: "#EDA249",
          rotationTime: '243 days',
          revolutionTime: '224.7 days',
          radius: '6,051.8 km',
          avarageTemp: '471°c',
        };

        case "EARTH":
          return {
            imageUrl: earth,
            description:
              "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            backgroundColor: "#6D2ED5",
            rotationTime: '0.99 days',
            revolutionTime: '365.26 days',
            radius: '6,371 km',
            avarageTemp: '16°c',
          };
      // Add cases for other planets here
      default:
        return {
          imageUrl: null,
          description: "",
          backgroundColor: "transparent" // Default transparent color
      };
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
                bgColor={bgColor}
                rotationTime={rotationTime}
                revolutionTime={revolutionTime}
                radius={radius}
                avarageTemp={avarageTemp}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
