import "./App.css";
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home" 

function App() {
  return (
   <div className="w-screen h-screen flex flex-col bg-theme-25 ">
      <div className="bg-theme-900">
      <Navbar/>
      </div>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<Home/>} />
          <Route path="/contact" element= {<Home/>} />
          <Route path="/energy-calculator" element= {<Home/>} />
          <Route path="/carbon-footprint" element= {<Home/>} />
        </Routes>
      

   </div>
  );
}

export default App;
