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
      />
    </main>
  );
};

export default Home;
