import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import BR from "../../assets/photos/BR.png"

const JobNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img className="h-12" src={BR} alt="Logo" />
            </NavLink>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
          <NavLink
              to="/"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs/qajobs"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
            >
              QA Jobs
            </NavLink>
            <NavLink
              to="/jobs/login"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
            >
              Log In
            </NavLink>
            <NavLink
              to="/jobs/signup"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/"
              className="bg-red-500 hover:bg-red-600 rounded px-3 py-2 text-white"
            >
              Post A Job
            </NavLink>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <button
            onClick={toggleMenu}
            className="self-end text-gray-700 text-3xl"
          >
            <FaTimes />
          </button>
          <NavLink
            onClick={toggleMenu}
            to="/"
            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium"
          >
            Home
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/qajobs"
            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium"
          >
            QA Jobs
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/ourcourses"
            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium"
          >
            Our Courses
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/services"
            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium"
          >
            Services
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/aboutus"
            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/blog"
            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/"
            className="bg-red-500 hover:bg-red-600 rounded text-white px-3 py-2"
          >
            Free Consultation
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default JobNav;
