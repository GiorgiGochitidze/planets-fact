import "./CSS/planets.css";

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
}) => {
  return (
    <>
      <div className="container">
        <div className="planets-image-container">
          <img src={imgUrl} alt="planets images" />
        </div>
        <div className="description-container">
          <h1>{selectedPlanet}</h1>
          <p>{description}</p>
          <p>
            <span className="source">Source:</span>{" "}
            <span className="wiki">Wikipedia</span>
          </p>
          <div className="overview-container">
            <button
              style={getButtonStyle(0, bgColor)}
              onClick={() => handleButtonClick(0)}
            >
              <p>01</p>
              <p>OVERVIEW</p>
            </button>
            <button
              style={getButtonStyle(1, bgColor)}
              onClick={() => handleButtonClick(1)}
            >
              <p>02</p>
              <p>INTERNAL STRUCTURE</p>
            </button>
            <button
              style={getButtonStyle(2, bgColor)}
              onClick={() => handleButtonClick(2)}
            >
              <p>03</p>
              <p>SURFACE GEOLOGY</p>
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
