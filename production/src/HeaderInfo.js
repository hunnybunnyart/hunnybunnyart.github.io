import logo from './logo.jpg';
import './HeaderInfo.css';

const HeaderInfo = () => {
    return (
        <div className="HeaderInfo">
            <img src={logo} className="HeaderInfo-logo" alt="logo" />
            <p><b>Art, Accessories, and Apparel</b></p>

        </div>
    )
}

export default HeaderInfo;