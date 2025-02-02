import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header class="bg-white border-b shadow-md">
        <div class="container mx-auto flex justify-between items-center p-4">
          <div class="text-lg font-bold">
            <a href="#">Brand</a>
          </div>
          <button
            id="menu-btn"
            class="block md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav id="menu" class="hidden md:flex space-x-4">
            <ul class="flex flex-col md:flex-row md:space-x-4">
              <li>
                <a
                  href="#"
                  class="block py-2 md:py-0 text-gray-700 hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 md:py-0 text-gray-700 hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 md:py-0 text-gray-700 hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 md:py-0 text-gray-700 hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="flex items-center justify-center h-screen mt-5"
          style={{
            backgroundImage: `url('/images/hero.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-8 text-center bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Welcome to Our Website
            </h1>
            <p className="mt-4 text-lg text-gray-300 md:text-xl">
              Your journey to success starts here.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-6 font-semibold text-blue-500 transition bg-white rounded-full hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>
        </section>

        <section class="py-16">
          <div class="container mx-auto">
            <h2 class="text-2xl md:text-4xl font-bold text-center mb-14">
              Latest Projects
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-1.jpg"
                  alt="Product 1"
                  class="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span class="text-white font-bold">Product 1</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-2.jpg"
                  alt="Product 2"
                  class="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span class="text-white font-bold">Product 2</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-3.jpg"
                  alt="Product 3"
                  class="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span class="text-white font-bold">Product 3</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-4.jpg"
                  alt="Product 4"
                  class="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span class="text-white font-bold">Product 4</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-5.jpg"
                  alt="Product 5"
                  class="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span class="text-white font-bold">Product 5</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-6.jpg"
                  alt="Product 6"
                  class="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span class="text-white font-bold">Product 6</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-gray-100">
          <div class="container mx-auto text-center">
            <h2 class="text-2xl md:text-4xl font-bold mb-8">
              Why Choose Our Services?
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">Expert Team</h3>
                <p class="text-gray-700">
                  Our team is composed of industry experts with years of
                  experience to provide you with the best solutions.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">Quality Assurance</h3>
                <p class="text-gray-700">
                  We ensure high-quality service delivery with regular
                  assessments and compliance checks.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">Customer Focused</h3>
                <p class="text-gray-700">
                  Our customer-centric approach guarantees that your needs and
                  preferences are always prioritized.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">Affordable Pricing</h3>
                <p class="text-gray-700">
                  We offer competitive pricing without compromising the quality
                  of our services.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">Timely Delivery</h3>
                <p class="text-gray-700">
                  We value your time and ensure services are delivered on
                  schedule.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold mb-2">Broad Expertise</h3>
                <p class="text-gray-700">
                  Our diverse range of expertise allows us to cater to multiple
                  industries and areas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
          <nav class="mb-4">
            <ul class="flex justify-center space-x-4">
              <li>
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <p class="text-sm">
            &copy; 2025 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
