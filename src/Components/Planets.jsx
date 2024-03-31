import "./CSS/planets.css";

const Planets = ({ imgUrl, selectedPlanet, description, handleButtonClick, getButtonStyle }) => {

    return (
        <div className="container">
            <div className="planets-image-container">
                <img src={imgUrl} alt="" />
            </div>
            <div className="description-container">
                <h1>{selectedPlanet}</h1>
                <p>{description}</p>
                <p><span className="source">Source:</span> <span className="wiki">Wikipedia</span></p>
                <div className="overview-container">
                    <button style={getButtonStyle(0)} onClick={() => handleButtonClick(0)}><p>01</p><p>OVERVIEW</p></button>
                    <button style={getButtonStyle(1)} onClick={() => handleButtonClick(1)}><p>02</p><p>INTERNAL STRUCTURE</p></button>
                    <button style={getButtonStyle(2)} onClick={() => handleButtonClick(2)}><p>03</p><p>SURFACE GEOLOGY</p></button>
                </div>
            </div>
            <div className="details-container">

            </div>
        </div>
    );
};

export default Planets;
