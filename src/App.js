import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Search from "./pages/Search";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />  
        </Routes>      
    </div>
  );
}

export default App;
