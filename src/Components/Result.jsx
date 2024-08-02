import React from 'react';

const Result = ({ footprint }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Your Carbon Footprint
      </h2>
      <p className="text-xl font-semibold text-gray-800 text-center">
        {footprint.toFixed(2)} kg CO<sub>2</sub>
      </p>
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Understanding your carbon footprint helps you make informed decisions to reduce your impact on the environment.
        </p>
      </div>
    </div>
  );
};

export default Result;
