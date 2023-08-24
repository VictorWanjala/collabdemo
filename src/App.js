import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Victor from './Victor';
function App() {
  return (
    <div className="App">
      <nav>
        <button><Link to='/victor'>Victor</Link></button>
      </nav>
      <Routes>
        <Route path='/Victor' element={<Victor/>}/>
      </Routes>
    </div>
  );
}

export default App;
