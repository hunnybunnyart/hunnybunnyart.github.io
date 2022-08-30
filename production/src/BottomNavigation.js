import './BottomNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPalette, faComment } from '@fortawesome/free-solid-svg-icons'

const house_icon = <FontAwesomeIcon icon={ faHouse } />;
const paint_icon = <FontAwesomeIcon icon={ faPalette } />;
const contact_icon = <FontAwesomeIcon icon={ faComment } />;

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
                    className={"BottomNavigation-li " + isCurrentPage('contact')}
                    onClick={()=>setCurrentPage('contact')}
                >{contact_icon}<br/>Contact</li>
            </ul>
        </nav>
    )
}

export default BottomNavigation;