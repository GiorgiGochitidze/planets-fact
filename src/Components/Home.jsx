import './CSS/home.css'
import Planets from './Planets';

const Home = ({urls, selectedPlanet, description, getButtonStyle, handleButtonClick}) => {

    return ( 
        <main>
            <Planets handleButtonClick={handleButtonClick} getButtonStyle={getButtonStyle} imgUrl={urls} selectedPlanet={selectedPlanet} description={description} />
        </main>
     );
}
 
export default Home;