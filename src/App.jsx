import "./App.css";

function App() {
  return (
    <>
      <header className="bg-white border-b shadow-md">
        <div className="container flex items-center justify-between p-4 mx-auto">
          <div className="text-lg font-bold">
            <a href="#">Brand</a>
          </div>
          <button
            id="menu-btn"
            className="block text-gray-700 md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav id="menu" className="hidden space-x-4 md:flex">
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-700 md:py-0 hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-700 md:py-0 hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-700 md:py-0 hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-700 md:py-0 hover:text-blue-500"
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

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center md:text-4xl mb-14">
              Latest Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-1.jpg"
                  alt="Product 1"
                  className="object-cover w-full h-48 transition-transform transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <span className="font-bold text-white">Product 1</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-2.jpg"
                  alt="Product 2"
                  className="object-cover w-full h-48 transition-transform transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <span className="font-bold text-white">Product 2</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-3.jpg"
                  alt="Product 3"
                  className="object-cover w-full h-48 transition-transform transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <span className="font-bold text-white">Product 3</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-4.jpg"
                  alt="Product 4"
                  className="object-cover w-full h-48 transition-transform transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <span className="font-bold text-white">Product 4</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-5.jpg"
                  alt="Product 5"
                  className="object-cover w-full h-48 transition-transform transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <span className="font-bold text-white">Product 5</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="images/project-6.jpg"
                  alt="Product 6"
                  className="object-cover w-full h-48 transition-transform transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <span className="font-bold text-white">Product 6</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="mb-8 text-2xl font-bold md:text-4xl">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-lg font-semibold">Expert Team</h3>
                <p className="text-gray-700">
                  Our team is composed of industry experts with years of
                  experience to provide you with the best solutions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-lg font-semibold">
                  Quality Assurance
                </h3>
                <p className="text-gray-700">
                  We ensure high-quality service delivery with regular
                  assessments and compliance checks.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-lg font-semibold">Customer Focused</h3>
                <p className="text-gray-700">
                  Our customer-centric approach guarantees that your needs and
                  preferences are always prioritized.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-lg font-semibold">
                  Affordable Pricing
                </h3>
                <p className="text-gray-700">
                  We offer competitive pricing without compromising the quality
                  of our services.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-lg font-semibold">Timely Delivery</h3>
                <p className="text-gray-700">
                  We value your time and ensure services are delivered on
                  schedule.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-lg font-semibold">Broad Expertise</h3>
                <p className="text-gray-700">
                  Our diverse range of expertise allows us to cater to multiple
                  industries and areas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-white bg-gray-800">
        <div className="container mx-auto text-center">
          <nav className="mb-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-sm">
            &copy; 2025 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
