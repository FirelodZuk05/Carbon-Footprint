import "./App.css";
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home" 
import About from "./pages/About"
import AffordableCleanEnergy from "./pages/AffordableCleanEnergy"
import Footer from "./Components/Footer"

function App() {
  return (
   <div className="w-screen h-screen flex flex-col bg-theme-25 ">
      <div className="bg-theme-900">
      
      </div>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/contact-us" element= {<Home/>} />
          <Route path="/energy-calculator" element= {<AffordableCleanEnergy/>} />
          <Route path="/carbon-footprint-calculator" element= {<Home/>} />
        </Routes>
      
        <Footer/>
      

   </div>
  );
}

export default App;
