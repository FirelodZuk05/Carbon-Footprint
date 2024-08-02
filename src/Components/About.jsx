import React from 'react';

const About = () => {
  return (
    <section className="flex items-center justify-center p-8 bg-white mb-7">
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-4">
          <img
            src="https://images.pexels.com/photos/1679551/pexels-photo-1679551.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-4">About Carbon Footprint</h2>
          <p className="text-gray-700 mb-4">A carbon footprint measures the total greenhouse gas emissions, primarily carbon dioxide and methane, associated with a nation's or individual's activities. Understanding and calculating one's carbon footprint is crucial for identifying the primary sources of emissions and implementing strategies to mitigate them.</p>
          <p className='text-gray-700'>Reducing a carbon footprint often involves adopting energy-efficient technologies, utilizing renewable energy sources, and making conscious lifestyle choices, such as reducing travel and shifting towards a more plant-based diet.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
