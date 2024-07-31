import "./App.css";
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home" 
import About from "./pages/About"
import Footer from "./Components/Footer"

function App() {
  return (
   <div className="w-screen h-screen flex flex-col bg-theme-25 ">
      <div className="bg-theme-900">
      <Navbar/>
      </div>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/contact-us" element= {<Home/>} />
          <Route path="/energy-calculator" element= {<Home/>} />
          <Route path="/carbon-footprint-calculator" element= {<Home/>} />
        </Routes>
      
        <Footer/>
      

   </div>
  );
}

export default App;
