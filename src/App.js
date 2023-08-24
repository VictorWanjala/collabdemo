import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Masibo from './Masibo';

function App() {
  return (
    <div className="App">
      <Link to='/masibo'>Masibo</Link>
      <Routes>
        
        <Route path='/masibo' element={<Masibo/>}/>
      </Routes>
    </div>
  );
}

export default App;
