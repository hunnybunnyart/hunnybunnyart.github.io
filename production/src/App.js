import { useState } from 'react';
import './App.css';

import BottomNavigation from './BottomNavigation';
import HeaderInfo from './HeaderInfo';
import PageLoader from './PageLoader';

function App() {
  const [currentPage, setCurrentPage] = useState('prices');

  return (
    <div className="App">
      <HeaderInfo />
      <PageLoader 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <BottomNavigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
