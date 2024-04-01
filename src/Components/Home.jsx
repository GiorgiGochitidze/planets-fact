import "./CSS/home.css";
import Planets from "./Planets";

const Home = ({
  urls,
  selectedPlanet,
  bgColor,
  description,
  getButtonStyle,
  handleButtonClick,
  rotationTime,
  revolutionTime,
  radius,
  avarageTemp,
  setUrls,
  setDescription,
  planetInternalImages,
  normalPlanetImages,
  internalDescription,
  normalDescription,
}) => {
  return (
    <main>
      <Planets
        bgColor={bgColor}
        handleButtonClick={handleButtonClick}
        getButtonStyle={getButtonStyle}
        imgUrl={urls}
        selectedPlanet={selectedPlanet}
        description={description}
        rotationTime={rotationTime}
        revolutionTime={revolutionTime}
        radius={radius}
        avarageTemp={avarageTemp}
        setUrls={setUrls}
        setDescription={setDescription}
        planetInternalImages={planetInternalImages}
        normalPlanetImages={normalPlanetImages}
        internalDescription={internalDescription}
        normalDescription={normalDescription}
      />
    </main>
  );
};

export default Home;
