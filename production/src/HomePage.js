import './HomePage.css';

import ChangePageButton from './components/ChangePageButton';

import LinkButton from './components/LinkButton';
import pikachu from './photos/pikachu.jpg';
import raichu from './photos/raichu.jpg';
import typhlosion from './photos/typhlosion.jpg';
import ponyta from './photos/ponyta.jpg';

const HomePage = ({setCurrentPage}) => {
    return (
        <div className="HomePage">

        <span>Support Hunny Bunny by following me on social media.<br/><br/>It would be awesome if you could drop a few likes too, so the algorithm actually shows my art.</span>
        <div className="HomePage-links">
            <LinkButton 
                label="Instagram"
                link="https://www.instagram.com/bunniebunbunzzz/?hl=en"
            />
            <LinkButton 
                label="Facebook"
                link="https://www.facebook.com/HunnyBunnyStudios"
            />
            <LinkButton 
                label="Twitter"
                link="https://twitter.com/bunniebunbunzzz"
            />
        </div>
        <div className="AngledImageBox">
            <h2>Custom Artwork</h2>
            <div className="image_row">
                <img src={pikachu}/>
                <img src={typhlosion}/>
            </div>
            <div className="image_row">
                <img src={raichu}/>
                <img src={ponyta}/>
            </div>
            <ChangePageButton 
                setCurrentPage={setCurrentPage}
                label="See More Examples"
                changeTo="examples"
            />
        </div>
      </div>
    )
}

export default HomePage;