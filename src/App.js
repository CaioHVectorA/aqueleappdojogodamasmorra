import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ficha from './components/Ficha';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ficha" element={<Ficha />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
