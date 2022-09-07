import './HomePage.css';

import HomePage from './HomePage';
import ExamplePage from './ExamplePage';
import PricesPage from './PricesPage';

const PageLoader = ({currentPage, setCurrentPage}) => {
    const loadPage = (page) => {
        if(page == 'examples') {
            return <ExamplePage/>
        }
        if(page == 'prices') {
            return <PricesPage/>
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