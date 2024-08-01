import React from 'react'
import { FaBolt} from 'react-icons/fa';
import { PiBrainLight, PiWindmill } from "react-icons/pi";
import { WiSolarEclipse } from "react-icons/wi";
import 'aos/dist/aos.css'; // Import AOS styles
import 'tailwindcss/tailwind.css'; // Ensure you import TailwindCSS
import WindEnergyCalculator from '../Components/WindEnergyCalculator';
import SolarEnergyCalculator from '../Components/SolarEnergyCalculator';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const AffordableCleanEnergy = () => {

    return (
        <div className="flex flex-col gap-4 p-8 bg-white">
            
            <Navbar/>
            {/* About Affordable Clean Energy */}
            <div id="about" className='flex flex-col lg:flex-row h-auto lg:h-[70vh] gap-5 justify-between items-center border-2 rounded-lg shadow-xl border-green-500 overflow-hidden bg-white bg-opacity-30 backdrop-blur-3xl mt-20'>
                <div className='flex flex-col h-auto lg:h-5/6 w-full lg:w-[48vw] justify-evenly items-start p-8'>
                    <div className='flex items-center space-x-4'>
                        <h1 className='text-3xl lg:text-5xl font-bold'>Affordable And Clean Energy</h1>
                    </div>
                    <p className='text-base lg:text-lg'>
                        Affordable and Clean Energy aims to ensure access to affordable, reliable, sustainable, and modern energy for all. This goal recognizes the critical role of energy in advancing human development and economic growth.
                    </p>
                </div>
                <div className='flex h-[30vh] lg:h-[100vh] w-full lg:w-[48vw] bg-gradient-to-r from-white to-green-500 justify-center items-center'>
                    <FaBolt className="text-green-500 lg:text-white text-[5rem] lg:text-[10rem]" />
                </div>
            </div>

            {/* Objectives and Solutions Card */}
            <div id="objectives-solutions" className='flex flex-col lg:flex-row h-auto lg:h-[70vh] gap-5 justify-between items-center border-2 rounded-lg shadow-xl border-cyan-500 overflow-hidden bg-white bg-opacity-30 backdrop-blur-3xl' >
                <div className='flex h-[30vh] lg:h-[100vh] w-full lg:w-[48vw] bg-gradient-to-r from-cyan-500 to-white justify-center items-center'>
                    <PiBrainLight className="text-cyan-500 lg:text-white text-[5rem] lg:text-[10rem]" />
                </div>
                <div className='flex flex-col space-x-4 h-auto lg:h-5/6 w-full lg:w-[48vw] justify-evenly items-start p-8'>
                    <div className='flex items-center space-x-4'>
                        <h1 className='text-3xl lg:text-5xl font-bold'>OBJECTIVES</h1>
                    </div>
                    <ul className='list-disc text-base lg:text-lg'>
                        <li>Reduce Costs</li>
                        <li>Promote Sustainable Practices</li>
                    </ul>
                    <div className='flex items-center space-x-4'>
                        <h1 className='text-3xl lg:text-5xl font-bold'>SOLUTIONS</h1>
                    </div>
                    <ul className='list-disc text-base lg:text-lg'>
                        <li>Invest in Renewable Energy Technologies</li>
                        <li>Implement Energy Efficiency Programs</li>
                    </ul>
                </div>
            </div>

            {/* Solar Energy Card */}
            <div id="solar-energy" className='flex flex-col lg:flex-row h-auto lg:h-[100vh] gap-5 justify-between items-center border-2 rounded-lg shadow-xl border-yellow-500 overflow-hidden bg-white bg-opacity-30 backdrop-blur-3xl' >
                <SolarEnergyCalculator />
                <div className='flex h-[30vh] lg:h-[100vh] w-full lg:w-[48vw] bg-gradient-to-r from-white to-yellow-500 justify-center items-center'>
                    <WiSolarEclipse className="text-yellow-500 lg:text-white text-[5rem] lg:text-[10rem]" />
                </div>
            </div>

            {/* Wind Energy Card */}
            <div id="wind-energy" className='flex flex-col lg:flex-row h-auto lg:h-[100vh] gap-5 justify-between items-center border-2 rounded-lg shadow-xl border-purple-500 overflow-hidden bg-white bg-opacity-30 backdrop-blur-3xl' >
                <div className='flex h-[30vh] lg:h-[100vh] w-full lg:w-[48vw] bg-gradient-to-r from-purple-500 to-white justify-center items-center'>
                    <PiWindmill className="text-purple-500 lg:text-white text-[5rem] lg:text-[10rem]" />
                </div>
                {/* <div className='flex flex-col h-auto lg:h-full w-full lg:w-[48vw] p-8 justify-center items-center'>
                    <h2 className='text-3xl lg:text-4xl font-bold'>Wind Energy</h2>
                    <p className='text-base lg:text-lg mb-4'>Estimate the potential energy production from Wind energy.</p>
                    <div className='border-2 rounded-lg shadow-md p-4 w-[75vw] lg:w-[22vw] bg-white'>
                        <h3 className='text-xl lg:text-2xl font-semibold mb-4'>Energy Calculator</h3>
                        <div className='flex flex-col space-y-4'>
                            <input type='text' placeholder='Enter wind speed (m/s)' className='border-2 rounded-md p-2 w-full' />
                            <input type='text' placeholder='Enter turbine efficiency (%)' className='border-2 rounded-md p-2 w-full' />
                            <input type='text' placeholder='Enter swept area (m²)' className='border-2 rounded-md p-2 w-full' />
                            <button className='bg-purple-500 text-white p-2 rounded-md shadow-md w-full'>Calculate</button>
                            <div className='border-2 rounded-md p-2 text-center w-full'>Result: 0 kWh</div>
                        </div>
                    </div>
                </div> */}
                <WindEnergyCalculator />
            </div>
            <Footer/>
        </div>
    );
};

export default AffordableCleanEnergy;
