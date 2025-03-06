import React from 'react';
import {
  automock,
  baymountmockup,
  bmmantriad2,
  bmmantriad3,
  chef,
  payoffcard
} from '../printfiles/index';

function Print() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        Creative Print Showcase
      </h1>

      {/* Full-Screen Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* News Paper Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">News Paper</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={bmmantriad2}
                alt="BM Mantriad 2"
                className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={bmmantriad3}
                alt="BM Mantriad 3"
                className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Banner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={chef}
                alt="Chef"
                className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={baymountmockup}
                alt="Baymount Mockup"
                className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Business Card Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Business Card</h2>
          <div className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src={payoffcard}
              alt="Payoff Card"
              className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          </div>
        </div>

        {/* Auto Advertising Section */}
        <div className="md:col-span-2 lg:col-span-2">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Auto Advertising</h2>
          <div className="relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src={automock}
              alt="Auto Mock"
              className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Print;