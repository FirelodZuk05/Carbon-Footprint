import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
      <nav className="fixed top-0 left-0 w-full bg-white py-4 z-50 shadow-md">
        <div className="flex justify-between items-center px-4">
          <div className="text-2xl font-bold">
            <span className="text-black">Sustainify</span>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden cursor-pointer" onClick={handleToggle}>
            {isOpen ? (
              <FaTimes className="text-black text-2xl" />
            ) : (
              <FaBars className="text-black text-2xl" />
            )}
          </div>

          {/* Navbar Links */}
          <div
            className={`lg:flex lg:items-center lg:gap-6 flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:p-0 p-4 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
              <li>
                <Link
                  to="/"
                  className="cursor-pointer text-black hover:text-blue-700 transition-colors text-lg font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="cursor-pointer text-black hover:text-blue-700 transition-colors text-lg font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="cursor-pointer text-black hover:text-blue-700 transition-colors text-lg font-semibold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/energy-calculator"
                  className="cursor-pointer text-black hover:text-blue-700 transition-colors text-lg font-semibold"
                >
                  Energy Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/carbon-footprint-calculator"
                  className="cursor-pointer text-black hover:text-blue-700 transition-colors text-lg font-semibold"
                >
                  Carbon Footprint Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
