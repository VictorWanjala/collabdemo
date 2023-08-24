import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import William from './William';
function App() {
  return (
    <div className="App">
      <nav>
        <button> <Link to="/william">WILLIAM</Link>  </button> 
      </nav>
      <Routes>
      <Route path='/william' element={<William/>}/>
      </Routes>
    </div>
  );
}

export default App;
