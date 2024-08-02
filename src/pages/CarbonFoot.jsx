import React, { useState } from 'react';
import FootprintForm from '../Components/FootprintForm';
import Result from '../Components/Result';
import Info from '../Components/Info';
import Intro from '../Components/Intro';
import About from '../Components/About';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const CarbonFoot = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const calculateFootprint = (data) => {

    const footprint = data.fuelConsumed * 2.3 + data.kWh * 0.8 + data.meatConsumption * 8.2 + data.lpgConsumed*2.983 + data.wasteGenerated*0.5 + data.vegConsumed*0.845 + data.paperConsumed*0.04;
    setCarbonFootprint(footprint);
  };

  return (
    <div className="App text-center">
      <Navbar/>
      <Intro/>
      <About/>
      <Info/>
      <FootprintForm calculateFootprint={calculateFootprint} />
      {carbonFootprint !== null && <Result footprint={carbonFootprint} />}
      <Footer/>
    </div>
  );
};

export default CarbonFoot;
