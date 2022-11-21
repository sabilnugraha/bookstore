import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Link } from "react-router-dom";
import LandingPages from './pages/LandingPages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPages />} />
      </Routes>
    </div>
  );
}

export default App;
