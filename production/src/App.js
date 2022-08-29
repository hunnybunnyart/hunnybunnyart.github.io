import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><b>Art, Apparel, and Accessories</b><br/><br/>Coming Soon</p>
        <span>Support Hunny Bunny by following me on social media.<br/><br/>It would be awesome if you could drop a few likes too, so the algorithm actually shows my art.</span>
        <div className="App-links">
          <a
            className="App-link"
            href="https://www.instagram.com/bunniebunbunzzz/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="App-link"
            href="https://www.facebook.com/HunnyBunnyStudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="App-link"
            href="https://twitter.com/bunniebunbunzzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
