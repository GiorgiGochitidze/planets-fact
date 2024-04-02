import "./CSS/planets.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Planets = ({
  imgUrl,
  selectedPlanet,
  description,
  handleButtonClick,
  getButtonStyle,
  bgColor,
  rotationTime,
  revolutionTime,
  radius,
  avarageTemp,
  setUrls,
  setDescription,
  planetInternalImages,
  normalPlanetImages,
  planetsGeologyImages,
  internalDescription,
  normalDescription,
  showGeology,
  setShowGeology,
  geologyDescription,
}) => {
  const [animationPaused, setAnimationPaused] = useState(false);
  const [animationKey, setAnimationKey] = useState(selectedPlanet);

  useEffect(() => {
    setAnimationKey(selectedPlanet);
  }, [selectedPlanet]);

  const pauseAnimation = () => {
    setAnimationPaused(true);
  };

  const resumeAnimation = () => {
    setAnimationPaused(false);
  };

  const toggleGeology = () => {
    setShowGeology(!showGeology);
  };

  return (
    <>
      <div className="container">
        <motion.div
          key={`${animationKey}-image-container`}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="planets-image-container"
        >
          <img
            src={imgUrl}
            alt="planets images"
            onMouseEnter={pauseAnimation}
            onMouseLeave={resumeAnimation}
            style={{
              animationPlayState: animationPaused ? "paused" : "running",
            }}
            className="planets-images"
          />
          {showGeology && (
            <motion.img
              key={`${animationKey}-geology-image`}
              src={planetsGeologyImages[selectedPlanet]}
              alt="planets geology images"
              className="geology-overlay"
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </motion.div>
        <div className="description-container">
          <motion.div
            key={`${animationKey}-description-container`}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="texts-container"
          >
            <h1>{selectedPlanet}</h1>
            <p>{description}</p>
            <p>
              <span className="source">Source:</span>{" "}
              <span className="wiki">Wikipedia</span>
            </p>
          </motion.div>
          <div className="overview-container">
            <motion.button
              key={`${animationKey}-button-one`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={getButtonStyle(0, bgColor)}
              onClick={() => {
                handleButtonClick(0);
                setUrls(normalPlanetImages[selectedPlanet]);
                setDescription(normalDescription[selectedPlanet]);
                setShowGeology(false); // Reset showGeology state
              }}
            >
              <p className="zeroOne"></p>
              <p>OVERVIEW</p>
            </motion.button>
            <motion.button
              key={`${animationKey}-button-two`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              style={getButtonStyle(1, bgColor)}
              onClick={() => {
                handleButtonClick(1);
                setUrls(planetInternalImages[selectedPlanet]);
                setDescription(internalDescription[selectedPlanet]);
                setShowGeology(false); // Reset showGeology state
              }}
            >
              <p className="zeroTwo"></p>
              <p className="internal-structure"></p>
            </motion.button>
            <motion.button
              key={`${animationKey}-button-three`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              style={getButtonStyle(2, bgColor)}
              onClick={() => {
                handleButtonClick(2);
                setDescription(geologyDescription[selectedPlanet]); // Update description accordingly
                toggleGeology(); // Toggle the visibility of geology image
                setUrls(normalPlanetImages[selectedPlanet]);
              }}
            >
              <p className="zeroThree"></p>
              <p className="surface-geology"></p>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="details-container">
        <motion.div
          key={`${animationKey}-datailcards-one`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="detail-cards"
        >
          <p>ROTATION TIME</p>
          <h1>{rotationTime}</h1>
        </motion.div>
        <motion.div
          key={`${animationKey}-datailcards-two`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 0.3 }}
          className="detail-cards"
        >
          <p>REVOLUTION TIME</p>
          <h1>{revolutionTime}</h1>
        </motion.div>
        <motion.div
          key={`${animationKey}-datailcards-third`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 0.3 }}
          className="detail-cards"
        >
          <p>RADIUS</p>
          <h1>{radius}</h1>
        </motion.div>
        <motion.div
          key={`${animationKey}-datailcards-fourth`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 0.5 }}
          className="detail-cards"
        >
          <p>AVERAGE TEMP</p>
          <h1>{avarageTemp}</h1>
        </motion.div>
      </div>
    </>
  );
};

export default Planets;
