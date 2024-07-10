import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Card = ({ image, title, price, originalPrice }) => {
  return (
    <div className="relative">
      <div className="properties-card">
        <div className="properties-img relative group">
          <img src={image} alt={title} className="w-full h-auto transition-transform duration-200 ease-out scale-100 transform hover:scale-105" />
          <div className="socal_icon absolute inset-0 flex items-center top-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out ">
            <a href="#" className="bg-white text-gray-800 w-16 h-12 flex items-center justify-center transition-all duration-500 ease-out hover:bg-red-600 hover:text-white">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
            <a href="#" className="bg-white text-gray-800 w-16 h-12 flex items-center justify-center transition-all duration-500 ease-out hover:bg-red-600 hover:text-white">
              <FontAwesomeIcon icon={faHeart} />
            </a>
            <a href="#" className="bg-white text-gray-800 w-16 h-12 flex items-center justify-center transition-all duration-500 ease-out hover:bg-red-600 hover:text-white">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold hover:text-orange-600">{title}</h3>
          <div className="flex items-center">
            <span className="text-gray-500 font-bold mr-2 hover:text-gray-900">${price}</span>
            <span className="line-through font-bold text-orange-200">${originalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
