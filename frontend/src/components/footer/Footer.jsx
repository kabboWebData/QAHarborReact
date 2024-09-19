import React from "react";
import BR from "../../assets/photos/BR.png"

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          {/* About Us Section */}
          <div className="flex-1 space-y-4 mb-6 md:mb-0">
            <img src={BR} className="h-12" alt="" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <address className="text-sm">
              House Super House, Gareeb-e-Nawaz Ave, Dhaka 1230 <br />
              +01676-053114
            </address>
          </div>
          {/* Services Section */}
          <div className="flex-1 space-y-4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>✔ SQA Service</li>
              <li>✔ Experts Augmentation</li>
              <li>✔ Book A Free Consultation</li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="flex-1 space-y-4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>✔ Terms & Conditions</li>
              <li>✔ Ongoing Campaign</li>
              <li>✔ Blog</li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-lg font-semibold">Newsletter</h2>
            <p className="text-sm">
              Subscribe to our newsletter for the latest industry trends, exclusive offers, and expert advice, delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md border border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t-2 border-white pt-6 mt-6 text-center text-sm">
          <p>&copy; 2024 Bug Resistance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
