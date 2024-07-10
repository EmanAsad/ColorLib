import React from 'react';

const ProductItem = ({ image, title, link }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-5">
      <div className="relative single-items">
        <div className="overflow-hidden relative z-0 items-img">
          <img
            src={image}
            alt={title}
            className="transition-all duration-400 ease-out transform w-full scale-100 hover:scale-102"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="transition-all duration-400 ease-out absolute left-6 bottom-0 text-center right-0 items-details group-hover:bottom-10">
          <h4 className="mb-2 transition-all duration-400 ease-out group-hover:mb-10">
            <a href={link} className="text-white text-2xl font-semibold group-hover:mb-10">
              {title}
            </a>
          </h4>
          <a
            href={link}
            className="browse-btn opacity-0 invisible transition-all duration-400 ease-out hover:opacity-100 hover:visible mb-7"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
