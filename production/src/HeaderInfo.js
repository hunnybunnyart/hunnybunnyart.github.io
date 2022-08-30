import logo from './logo.jpg';
import './HeaderInfo.css';

const HeaderInfo = () => {
    return (
        <div className="HeaderInfo">
            <img src={logo} className="HeaderInfo-logo" alt="logo" />
            <p><b>Art, Apparel, and Accessories</b></p>

        </div>
    )
}

export default HeaderInfo;