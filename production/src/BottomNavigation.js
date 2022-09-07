import './BottomNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPalette, faCommentDollar } from '@fortawesome/free-solid-svg-icons'

const house_icon = <FontAwesomeIcon icon={ faHouse } />;
const paint_icon = <FontAwesomeIcon icon={ faPalette } />;
const prices_icon = <FontAwesomeIcon icon={ faCommentDollar } />;

const BottomNavigation = ({currentPage, setCurrentPage}) => {
    const isCurrentPage = (checkPage) => {
        return checkPage == currentPage ? 'currentlyActivePage' : '';
    }
    return (
        <nav className="BottomNavigation">
            <ul className="BottomNavigation-ul">
                <li 
                    className={"BottomNavigation-li " + isCurrentPage('home')}
                    onClick={()=>setCurrentPage('home')}
                >{house_icon}<br/>Home</li>
                <li 
                    className={"BottomNavigation-li " + isCurrentPage('examples')}
                    onClick={()=>setCurrentPage('examples')}
                >{paint_icon}<br/>Examples</li>
                <li 
                    className={"BottomNavigation-li " + isCurrentPage('prices')}
                    onClick={()=>setCurrentPage('prices')}
                >{prices_icon}<br/>Prices</li>
            </ul>
        </nav>
    )
}

export default BottomNavigation;