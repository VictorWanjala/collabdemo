import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Masibo from './Masibo';
import Victor from './Victor';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/masibo'>Masibo</Link>
        <button><Link to='/victor'>Victor</Link></button>
        <Link to='/Mutanyi'>Mutanyi</Link>
      </nav>
      <Routes>
        <Route path='/masibo' element={<Masibo/>}/>
        <Route path='/Victor' element={<Victor/>}/>
        <Route path='/Mutanyi' element={<Victor/>}/>
      </Routes>
    </div>
  );
}

export default App;
