import './HomePage.css';

import HomePage from './HomePage';
import ExamplePage from './ExamplePage';
import ContactPage from './ContactPage';

const PageLoader = ({currentPage, setCurrentPage}) => {
    const loadPage = (page) => {
        if(page == 'examples') {
            return <ExamplePage/>
        }
        if(page == 'contact') {
            return <ContactPage/>
        }
        return <HomePage 
        setCurrentPage={setCurrentPage}/>
    }

    return (
        <>
        {loadPage(currentPage)}
        </>
    )
}

export default PageLoader;