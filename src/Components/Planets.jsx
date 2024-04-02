import "./CSS/planets.css";
import { useState } from 'react';

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
        <div className="planets-image-container">
          <img
            src={imgUrl}
            alt="planets images"
            onMouseEnter={pauseAnimation}
            onMouseLeave={resumeAnimation}
            style={{ animationPlayState: animationPaused ? 'paused' : 'running' }}
            className="planets-images"
          />
          {showGeology && (
            <img
              src={planetsGeologyImages[selectedPlanet]}
              alt="planets geology images"
              className="geology-overlay"
            />
          )}
        </div>
        <div className="description-container">
          <div className="texts-container">
          <h1>{selectedPlanet}</h1>
          <p>{description}</p>
          <p>
            <span className="source">Source:</span>{" "}
            <span className="wiki">Wikipedia</span>
          </p>
          </div>
          <div className="overview-container">
            <button
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
            </button>
            <button
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
            </button>
            <button
              style={getButtonStyle(2, bgColor)}
              onClick={() => {
                handleButtonClick(2);
                setDescription(geologyDescription[selectedPlanet]); // Update description accordingly
                toggleGeology(); // Toggle the visibility of geology image
                setUrls(normalPlanetImages[selectedPlanet])
              }}
            >
              <p className="zeroThree"></p>
              <p className="surface-geology"></p>
            </button>
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="detail-cards">
          <p>ROTATION TIME</p>
          <h1>{rotationTime}</h1>
        </div>
        <div className="detail-cards">
          <p>REVOLUTION TIME</p>
          <h1>{revolutionTime}</h1>
        </div>
        <div className="detail-cards">
          <p>RADIUS</p>
          <h1>{radius}</h1>
        </div>
        <div className="detail-cards">
          <p>AVERAGE TEMP</p>
          <h1>{avarageTemp}</h1>
        </div>
      </div>
    </>
  );
};

export default Planets;
