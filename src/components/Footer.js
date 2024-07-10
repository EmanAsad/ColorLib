import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import footer from "../assets/img/logo/logo.png.webp"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-6 border-b border-gray-700">
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <h3 className="text-white text-2xl mb-2">Subscribe Newsletter</h3>
              <p>Subscribe newsletter to get 5% on all products.</p>
            </div>
            <div className="w-full lg:w-1/2 flex items-center">
              <form className="w-full flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-3/4 p-4 bg-white text-black rounded-l"
                />
                <button className="w-1/4 p-4 bg-red-600 text-white rounded-r">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="w-full lg:w-1/6 flex justify-center lg:justify-start space-x-4 mt-6 lg:mt-0">
              <a href="https://bit.ly/sai4ull" className="text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <img src={footer} alt="Logo" className="mb-6 color-white" />
          </div>
          <div className="w-full md:w-1/6 mb-6">
            <h4 className="text-white text-lg mb-4">Shop Men</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Clothing Fashion</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Winter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Summer</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Formal</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Casual</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/6 mb-6">
            <h4 className="text-white text-lg mb-4">Shop Women</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Clothing Fashion</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Winter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Summer</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Formal</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Casual</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/6 mb-6">
            <h4 className="text-white text-lg mb-4">Baby Collection</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Clothing Fashion</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Winter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Summer</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Formal</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Casual</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/6 mb-6">
            <h4 className="text-white text-lg mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Track Your Order</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Support</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Carrier</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400 text-sm">
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <FaHeart className="inline text-red-600" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-red-600">Colorlib</a>
            </p>
          </div>
        </div>
      </div>

      <div id="back-top" className="fixed right-8 bottom-4 bg-red-600 h-10 w-10 text-center rounded-full text-white text-2xl flex items-center justify-center shadow-lg">
        <a href="#" className="block">
          <span>&uarr;</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
