import "./App.css";
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home" 
import About from "./pages/About"
import Contact from "./pages/Contact";
import AffordableCleanEnergy from "./pages/AffordableCleanEnergy";
import CarbonFoot from "./pages/CarbonFoot";

function App() {
  return (
   <div className="flex flex-col gap-4 p-8 bg-white ">
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/contact-us" element= {<Contact/>} />
          <Route path="/energy-calculator" element= {<AffordableCleanEnergy/>} />
          <Route path="/carbon-footprint-calculator" element= {<CarbonFoot/>} />
        </Routes>

   </div>
  );
}

export default App;
