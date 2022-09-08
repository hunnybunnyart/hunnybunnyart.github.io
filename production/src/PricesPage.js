import './PricesPage.css';
import LinkButton from './components/LinkButton';

const PricesPage = () => {
    return (
        <div className="PricesPage">
            <div className="AngledBox reverse">
              <h2>Prices 2022</h2>
              <div className="PricesPage-section">
                <h3>Head Shot</h3>
                <ul>
                  <li><span className="PricesPage-service-label">Sketch</span><span className="PricesPage-service-price">$5</span></li>
                  <li><span className="PricesPage-service-label">Flat Color</span><span className="PricesPage-service-price">$15</span></li>
                  <li><span className="PricesPage-service-label">Shaded</span><span className="PricesPage-service-price">$20</span></li>
                </ul>
              </div>
              <div className="PricesPage-section">
                <h3>Bust</h3>
                <ul>
                  <li><span className="PricesPage-service-label">Sketch</span><span className="PricesPage-service-price">$10</span></li>
                  <li><span className="PricesPage-service-label">Flat Color</span><span className="PricesPage-service-price">$20</span></li>
                  <li><span className="PricesPage-service-label">Shaded</span><span className="PricesPage-service-price">$25</span></li>
                </ul>
              </div>
              <div className="PricesPage-section">
                <h3>Full Body</h3>
                <ul>
                  <li><span className="PricesPage-service-label">Sketch</span><span className="PricesPage-service-price">$15</span></li>
                  <li><span className="PricesPage-service-label">Flat Color</span><span className="PricesPage-service-price">$30</span></li>
                  <li><span className="PricesPage-service-label">Shaded</span><span className="PricesPage-service-price">$35</span></li>
                </ul>
              </div>
              <div className="PricesPage-section">
                <h3>Extras</h3>
                <ul>
                  <li><span className="PricesPage-service-label">Extra Characters</span><span className="PricesPage-service-price">$15</span></li>
                  <br />
                  <li><span className="PricesPage-service-label-line">Extra Charge for NSFW to be discussed</span></li>
                  <br/>
                  <li><span className="PricesPage-service-label">Stickers</span><span className="PricesPage-service-price">$4/each</span></li>
                  <li><span className="PricesPage-service-label">Smol Ravioli Pin</span><span className="PricesPage-service-price">$2/each</span></li>
                  <li><span className="PricesPage-service-label">Slowpoke Keychains</span><span className="PricesPage-service-price">$12/each</span></li>
                </ul>
              </div>
              <div className="PricesPage-section">
                <h3>Reference Sheets</h3>
                <ul>
                  <li><span className="PricesPage-service-label">Currently starting at</span><span className="PricesPage-service-price">$50+</span></li>
                </ul>
              </div>
              <div className="PricesPage-section">
                <h3>Telegram Stickers</h3>
                <ul>
                  <li><span className="PricesPage-service-label">5 Stickers</span><span className="PricesPage-service-price">$40</span></li>
                  <li><span className="PricesPage-service-label">10 Stickers</span><span className="PricesPage-service-price">$80</span></li>
                  <li><span className="PricesPage-service-label">20 Stickers</span><span className="PricesPage-service-price">$120</span></li>
                </ul>
              </div>
              <div className="PricesPage-section">
                <h3>Custom Fursona Button</h3>
                <ul>
                  <li><span className="PricesPage-service-label">2.25" Button</span><span className="PricesPage-service-price">$20</span></li>
                </ul>
              </div>
              <center><p>For custom commissions regarding shirts, keychains, lightboxes, etc - please contact me as these are priced based on the project requirements.</p></center>
            </div>
            <LinkButton 
                label="Contact on Telegram"
                link="https://t.me/BunnieBunnie"
            />
        </div>
    )
}

export default PricesPage;