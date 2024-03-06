import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Details from './pages/Details';

function App() {
  return (
    <div className='min-h-screen text-gray-600 text-lg p-6 bg-white'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorite' element={<Favourites />}/>
          <Route path='/recipe-item/:id' element={<Details />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
