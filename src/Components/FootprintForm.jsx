import { Result } from 'postcss';
import React, { useState } from 'react';

const FootprintForm = ({ calculateFootprint }) => {
  const [formData, setFormData] = useState({
    fuelConsumed: '',
    kWh: '',
    meatConsumption: '',
    lpgConsumed: '',
    wasteGenerated: '',
    vegConsumed: '',
    paperConsumed: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFootprint(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6  bg-gradient-to-r from-green-50 via-green-100 to-green-200 shadow-2xl rounded-lg my-8">
      <h2 className="text-4xl font-semibold mb-6 text-green-950">Footprint Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4 m-[20]">
        <div className="block space-y-2">
          <label htmlFor="kWh" className="text-lg font-medium text-gray-700 block my-[10] mx-0">Electricity Consumed (in KWh):</label>
          <input
            type="number"
            name="kWh"
            value={formData.kWh}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="block space-y-2">
          <label htmlFor="fuelConsumed" className="text-lg font-medium text-gray-700 block my-[10] mx-0">Fuel Consumed (in L):</label>
          <input
            type="number"
            name="fuelConsumed"
            value={formData.fuelConsumed}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="block space-y-2">
          <label htmlFor="lpgConsumed" className="text-lg font-medium text-gray-700 block my-[10] mx-0">LPG Consumed (in kg):</label>
          <input
            type="number"
            name="lpgConsumed"
            value={formData.lpgConsumed}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="block space-y-2">
          <label htmlFor="wasteGenerated" className="text-lg font-medium text-gray-700 block my-[10] mx-0">Waste Generated (in kg):</label>
          <input
            type="number"
            name="wasteGenerated"
            value={formData.wasteGenerated}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="block space-y-2">
          <label htmlFor="paperConsumed" className="text-lg font-medium text-gray-700 block my-[10] mx-0">Paper Based Products Consumed (in INR):</label>
          <input
            type="number"
            name="paperConsumed"
            value={formData.paperConsumed}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="block space-y-2">
          <label htmlFor="vegConsumed" className="text-lg font-medium text-gray-700 block my-[10] mx-0">Vegetables Consumed (in kg):</label>
          <input
            type="number"
            name="vegConsumed"
            value={formData.vegConsumed}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="block space-y-2">
          <label htmlFor="meatConsumption" className="text-lg font-medium text-gray-700 block my-[10] mx-0">Meat Consumption (in kg):</label>
          <input
            type="number"
            name="meatConsumption"
            value={formData.meatConsumption}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg mt-4 transition duration-300 ease-in-out" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default FootprintForm;
