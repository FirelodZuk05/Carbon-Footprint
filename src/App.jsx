import "./App.css";
import {Route,Routes} from "react-router-dom"

import Home from "./pages/Home";
import About from './pages/About'


function App() {
  return (
    <div className="flex flex-col gap-4 p-8 bg-white">
    
      <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/contact-us" element= {<Home/>} />
          <Route path="/energy-calculator" element= {<Home/>} />
          <Route path="/carbon-footprint-calculator" element= {<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
