import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Masibo from './Masibo';
import Victor from './Victor';
import William from './William';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/masibo'>Masibo</Link>
        <Link to='/william'>William</Link>
        <button><Link to='/victor'>Victor</Link></button>
      </nav>
      <Routes>
        <Route path='/masibo' element={<Masibo/>}/>
        <Route path='/Victor' element={<Victor/>}/>
        <Route path='/william' element={<William/>}/>
      </Routes>
    </div>
  );
}

export default App;
