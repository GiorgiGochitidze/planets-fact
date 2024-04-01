import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import { useState } from "react";
// normal planets images
import mercury from "./assets/images/planet-mercury.svg";
import venus from "./assets/images/planet-venus.svg";
import earth from "./assets/images/planet-earth.svg";
import mars from "./assets/images/planet-mars.svg";
import jupiter from "./assets/images/planet-jupiter.svg";
import saturn from "./assets/images/planet-saturn.svg";
import uranus from "./assets/images/planet-uranus.svg";
import neptune from "./assets/images/planet-neptune.svg";

// planets internal images
import mercuryInternal from "./assets/images/planet-mercury-internal.svg";
import venusInternal from "./assets/images/planet-venus-internal.svg";
import earthInternal from "./assets/images/planet-earth-internal.svg";
import marsInternal from "./assets/images/planet-mars-internal.svg";
import jupiterInternal from "./assets/images/planet-jupiter-internal.svg";
import saturnInternal from "./assets/images/planet-saturn-internal.svg";
import uranusInternal from "./assets/images/planet-uranus-internal.svg";
import neptuneInternal from "./assets/images/planet-neptune-internal.svg";

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
  const [bgColor, setBgColor] = useState("#419ebb");
  // decleares index of selected button
  const [selectedButton, setSelectedButton] = useState(0);

  // state for rotation time of planet
  const [rotationTime, setRotationTime] = useState("58.6 days");
  const [revolutionTime, setRevolutionTime] = useState("87.97 days");
  const [radius, setRadius] = useState("2,439.7 km");
  const [avarageTemp, setAvarageTemp] = useState("430°c");

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

  // planet images objects
  const normalPlanetImages = {
    MERCURY: mercury,
    VENUS: venus,
    EARTH: earth,
    MARS: mars,
    JUPITER: jupiter,
    SATURN: saturn,
    URANUS: uranus,
    NEPTUNE: neptune,
    // Add normal images for other planets here
  };

  const planetInternalImages = {
    MERCURY: mercuryInternal,
    VENUS: venusInternal,
    EARTH: earthInternal,
    MARS: marsInternal,
    JUPITER: jupiterInternal,
    SATURN: saturnInternal,
    URANUS: uranusInternal,
    NEPTUNE: neptuneInternal,
    // Add internal images for other planets here
  };

// description lists

const normalDescription = {
  MERCURY: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
  VENUS: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
  EARTH: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
  MARS: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet"',
  JUPITER: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
  SATURN: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
  URANUS: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
  NEPTUNE: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
}

const internalDescription = {
  MERCURY: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
  VENUS: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
  EARTH: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
  MARS: 'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
  JUPITER: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
  SATURN: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
  URANUS: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
  NEPTUNE: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
}


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
    const {
      imageUrl,
      description,
      backgroundColor,
      rotationTime,
      revolutionTime,
      radius,
      avarageTemp,
    } = getImageUrl(selectedPlanet);
    setBgColor(backgroundColor);
    setUrls(imageUrl);
    setDescription(description);
    handleSelect(index);
    setSelectedButton(0); // Reset selected button to 0 when a new planet is selected
    setRotationTime(rotationTime);
    setRevolutionTime(revolutionTime);
    setRadius(radius);
    setAvarageTemp(avarageTemp);
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
          rotationTime: "58.6 days",
          revolutionTime: "87.97 days",
          radius: "2,439.7 km",
          avarageTemp: "430°c",
        };
      case "VENUS":
        return {
          imageUrl: venus,
          description:
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
          backgroundColor: "#EDA249",
          rotationTime: "243 days",
          revolutionTime: "224.7 days",
          radius: "6,051.8 km",
          avarageTemp: "471°c",
        };

      case "EARTH":
        return {
          imageUrl: earth,
          description:
            "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
          backgroundColor: "#6D2ED5",
          rotationTime: "0.99 days",
          revolutionTime: "365.26 days",
          radius: "6,371 km",
          avarageTemp: "16°c",
        };

      case "MARS":
        return {
          imageUrl: mars,
          description:
            'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet"',
          backgroundColor: "#D14C32",
          rotationTime: "1.03 days",
          revolutionTime: "1.88 years",
          radius: "3,389.5 km",
          avarageTemp: "−28°c",
        };

      case "JUPITER":
        return {
          imageUrl: jupiter,
          description:
            "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
          backgroundColor: "#CD5120",
          rotationTime: "9.93 hours",
          revolutionTime: "11.86 years",
          radius: "69,911 km",
          avarageTemp: "-108°c",
        };

      case "SATURN":
        return {
          imageUrl: saturn,
          description:
            "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
          backgroundColor: "#CD5120",
          rotationTime: "10.8 hours",
          revolutionTime: "29.46 years",
          radius: "58,232 km",
          avarageTemp: "-138°c",
        };

      case "URANUS":
        return {
          imageUrl: uranus,
          description:
            "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
          backgroundColor: "#1EC1A2",
          rotationTime: "17.2 hours",
          revolutionTime: "84 years",
          radius: "25,362 km",
          avarageTemp: "-195°c",
        };

      case "NEPTUNE":
        return {
          imageUrl: neptune,
          description:
            "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
          backgroundColor: "#2D68F0",
          rotationTime: "16.08 hours",
          revolutionTime: "164.79 years",
          radius: "24,622 km",
          avarageTemp: "-201°c",
        };
      // Add cases for other planets here
      default:
        return {
          imageUrl: null,
          description: "",
          backgroundColor: "transparent", // Default transparent color
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
                setUrls={setUrls}
                description={description}
                selectedPlanet={planetsList[selected]}
                getButtonStyle={getButtonStyle}
                handleButtonClick={handleButtonClick}
                bgColor={bgColor}
                rotationTime={rotationTime}
                revolutionTime={revolutionTime}
                radius={radius}
                avarageTemp={avarageTemp}
                setDescription={setDescription}
                planetInternalImages={planetInternalImages}
                normalPlanetImages={normalPlanetImages}
                internalDescription={internalDescription}
                normalDescription={normalDescription}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
