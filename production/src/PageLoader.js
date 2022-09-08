import './HomePage.css';

import HomePage from './HomePage';
import ExamplesPage from './ExamplesPage';
import PricesPage from './PricesPage';

const PageLoader = ({currentPage, setCurrentPage}) => {
    const loadPage = (page) => {
        if(page == 'examples') {
            return <ExamplesPage/>
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