import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch, FaUser, FaTimes, FaFacebook, FaInstagram,
  FaTwitter, FaLinkedin, FaYoutube
} from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../img/logo.png.webp';
import '../App.css';

const NavigationBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState(1); // Assuming initial cart items
  const [menuOpen, setMenuOpen] = useState(false);

  const MenuItem = ({ title, badge, path }) => (
    <div className="relative group">
      <Link
        to={path}
        className="px-4 py-3 text-base md:text-lg font-medium lg:text-black hover:text-orange-500"
      >
        {title}
      </Link>
      {badge && (
        <span className="absolute top-[-8px] right-[-6px] px-2 py-1 text-xs font-bold text-black bg-orange-600 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
  

  const Dropdown = ({ title, children, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

    return (
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-2 text-black lg:text-black hover:text-orange-500 font-medium flex items-center"
        >
          {title}
          {icon && React.cloneElement(icon, { className: 'ml-1 text-lg' })}
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-10 border-t-4 border-orange-500">
            <div className="py-2 px-3">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  };

  const Search = ({ onClose }) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedQuery(query);
      }, 300);

      return () => {
        clearTimeout(handler);
      };
    }, [query]);

    const handleChange = (e) => {
      setQuery(e.target.value);
    };

    return (
      <div className="fixed top-[100px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-[#FF2020] z-40">
        <div className="px-4 py-2.5">
          <form className="flex justify-between items-center">
            <input
              type="text"
              className="w-full text-white px-4 py-2 rounded-md bg-[#FF2020] placeholder-white focus:outline-none"
              id="search_input"
              placeholder="Search Here"
              value={query}
              onChange={handleChange}
            />
            <FaTimes
              className="cursor-pointer text-white text-xl ml-2"
              id="close_search"
              title="Close Search"
              onClick={onClose}
            />
          </form>
        </div>
      </div>
    );
  };

  return (
    <header className="w-full">
      {/* Upper Header Section */}
      <div className="w-full bg-white py-2 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link to="/about-us" className="hover:text-gray-600 text-sm">About Us</Link>
            <Link to="/privacy" className="hover:text-gray-600 text-sm">Privacy</Link>
            <Link to="/faq" className="hover:text-gray-600 text-sm">FAQ</Link>
            <Link to="/careers" className="hover:text-gray-600 text-sm">Careers</Link>
          </div>

          {/* Wishlist and Track Order */}
          <div className="hidden md:flex space-x-4">
            <Link to="/wishlist" className="hover:text-gray-600 text-sm">My Wishlist</Link>
            <span className="text-gray-200 h-6 inline-block px-2">|</span>
            <Link to="/track-order" className="hover:text-gray-600 text-sm">Track Your Order</Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaFacebook className="text-gray-600 group-hover:text-orange-600 transition-transform transform group-hover:rotate-[270deg]" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaInstagram className="text-gray-600 group-hover:text-orange-600 transition-transform transform group-hover:rotate-[270deg]" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaTwitter className="text-gray-600 group-hover:text-orange-600 transition-transform transform group-hover:rotate-[270deg]" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaLinkedin className="text-gray-600 group-hover:text-orange-600 transition-transform transform group-hover:rotate-[270deg]" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="group">
              <FaYoutube className="text-gray-600 group-hover:text-orange-600 transition-transform transform group-hover:rotate-[270deg]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full bg-white p-4 md:p-5 shadow-md transition-all duration-300 ease-in-out ${menuOpen ? 'bg-white text-black' : 'bg-white text-black'} lg:bg-white lg:text-black`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-5">
            <img src={logo} alt="Capital Shop" className="h-10" loading="lazy" />
          </div>
          {/* Icons and Mobile Menu */}
          <div className="w-full py-2 flex justify-end px-4 lg:hidden items-center space-x-4">
            <FaSearch className="cursor-pointer text-2xl" onClick={() => setSearchOpen(!searchOpen)} />
            {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
            <FaUser className="cursor-pointer text-2xl hover:text-orange-600" />
            <div className="relative">
              <IoCartOutline className="cursor-pointer text-3xl hover:text-orange-600" />
              {cartItems > 0 && (
                <span className="absolute top-[-8px] right-[-8px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-orange-600 rounded-full">
                  {cartItems}
                </span>
              )}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="deskmenu hidden lg:flex items-center space-x-6">
            <MenuItem title="Home" path="/" />
            <MenuItem title="Men" path="/category" />
            <MenuItem title="Women" path="/category" />
            <MenuItem title="Baby Collection" badge="New" path="/category" />
            <Dropdown title="Pages" icon={<RiArrowDropDownLine className="text-2xl hover:text-orange-600" />}>
              <MenuItem title="Login" path="/login" />
              <MenuItem title="Cart" path="/cart" />
              <MenuItem title="Product Details" path="/ProductDetails" />
              <MenuItem title="Product Checkout" path="/ProductCheckout" />
            </Dropdown>
            <Dropdown title="Blog">
              <MenuItem title="Blog" path="/blog" />
              <MenuItem title="Elements" path="/elements" />
              <MenuItem title="Blog Details" path="/blog" />
            </Dropdown>
          </div>
          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FaSearch className="cursor-pointer text-2xl" onClick={() => setSearchOpen(!searchOpen)} />
            {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
            <FaUser className="cursor-pointer text-2xl hover:text-orange-600" />
            <div className="relative">
              <IoCartOutline className="cursor-pointer text-3xl hover:text-orange-600" />
              {cartItems > 0 && (
                <span className="absolute top-[-8px] right-[-8px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-orange-600 rounded-full">
                  {cartItems}
                </span>
              )}
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="flex lg:hidden items-center">
            <GiHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col space-y-6 lg:hidden bg-white text-black px-4 py-4 transition-transform transform duration-300 ease-in-out">
            <MenuItem title="Home" path="/" />
            <MenuItem title="Men" path="/category" />
            <MenuItem title="Women" path="/category" />
            <MenuItem title="Baby Collection" badge="New" path="/category" />
            <Dropdown title="Pages" icon={<RiArrowDropDownLine className="text-2xl hover:text-orange-600" />}>
              <MenuItem title="Login" path="/login" />
              <MenuItem title="Cart" path="/cart" />
              <MenuItem title="Product Details" path="/ProductDetails" />
              <MenuItem title="Product Checkout" path="/ProductCheckout" />
            </Dropdown>
            <Dropdown title="Blog">
              <MenuItem title="Blog" path="/blog" />
              <MenuItem title="Elements" path="/elements" />
              <MenuItem title="Blog Details" path="/blog" />
            </Dropdown>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavigationBar;
