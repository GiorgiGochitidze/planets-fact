import './navbar.css';

const Navbar = ({ handlePlanetClick, PlanetsListOpacity, planetsList }) => {


    return (
        <header>
            <nav>
                <h2>THE PLANETS</h2>
                <div className="planets-list">
                    {planetsList.map((planet, index) => (
                        <p key={index} style={PlanetsListOpacity(index)} onClick={() => handlePlanetClick(index)}>
                            {planet}
                        </p>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
