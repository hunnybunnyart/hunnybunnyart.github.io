import './HomePage.css';

import ChangePageButton from './components/ChangePageButton';

import LinkButton from './components/LinkButton';
import pikachu from './photos/pikachu.jpg';
import raichu from './photos/raichu.jpg';
import typhlosion from './photos/typhlosion.jpg';
import ponyta from './photos/ponyta.jpg';
import shirt from './photos/shirt.jpg';
import buttons from './photos/buttons.jpg';
import keychains from './photos/keychains.jpg';
import stickers from './photos/stickers.jpg';
import lightbox from './photos/lightbox.jpg';

const HomePage = ({setCurrentPage}) => {
    return (
        <div className="HomePage">

        <span>Support Hunny Bunny by following me on social media.<br/><br/>It would be awesome if you could drop a few likes too, so the algorithm actually shows my art.</span>
        <div className="HomePage-links">
            <LinkButton 
                label="Telegram"
                link="https://www.instagram.com/bunniebunbunzzz/?hl=en"
            />
        </div>
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
            <center><p>Digital illustrations, painted artwork, or even pencil and paper.<br/>Have any idea brought to life!</p></center>
            
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
        <div className="AngledImageBox reverse">
        <h2>Custom Accesories</h2>
        <center><p>Buttons, stickers, keychains, and more!<br/>I love coming up with new ways to wear and show off your favorite art.</p></center>
          <div className="image_row">
                <img src={keychains}/>
                <img src={stickers} />
            </div>
            <div className="image_row">
                <img src={lightbox}/>
                <img src={buttons} />
            </div>
            <ChangePageButton 
                setCurrentPage={setCurrentPage}
                label="View Prices"
                changeTo="prices"
            />
        </div>
        <div className="AngledImageBox sharper-corners">
        <h2>Custom Apparel</h2>
        <center><p>Have your logo or illustration printed and pressed onto a shirt!<br/>I'm always open to trying new things too, so message me if you have any ideas.</p></center>
        <div className="image_row">
              <img src={shirt}/>
          </div>
          <ChangePageButton 
                setCurrentPage={setCurrentPage}
                label="View Prices"
                changeTo="prices"
            />
        </div>
      </div>
    )
}

export default HomePage;