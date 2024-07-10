import React from 'react';
import items1 from '../assets/img/gallery/items1.jpg';
import items2 from '../assets/img/gallery/items2.jpg';
import items3 from '../assets/img/gallery/items3.jpg';

const ProductList = () => {
  return (
    <section className="pt-4 px-4 md:px-15 lg:px-20 mr-17 ml-17">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-3 md:-mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 md:px-4 mb-4 md:mb-6 flex justify-center"> {/* Center aligning image */}
            <div className="relative group">
              <div className="overflow-hidden relative z-0">
                <img
                  src={items1}
                  alt="Men's Fashion"
                  className="w-full transition-transform duration-400 ease-out transform group-hover:scale-100"
                  style={{ maxHeight: '280px' }} // Adjusted maxHeight here
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-0"></div>
              </div>
              <div className="absolute left-6 bottom-0 text-center right-0 transition-all duration-400 ease-out group-hover:bottom-10">
                <h4 className="text-white text-2xl font-semibold mb-2">
                  <a href="pro-details.html">Men's Fashion</a>
                </h4>
                <a
                  href="pro-details.html"
                  className="browse-btn opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 ease-out text-white text-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 md:px-4 mb-4 md:mb-6 flex justify-center"> {/* Center aligning image */}
            <div className="relative group">
              <div className="overflow-hidden relative z-0">
                <img
                  src={items2}
                  alt="Women's Fashion"
                  className="w-full transition-transform duration-400 ease-out transform group-hover:scale-100"
                  style={{ maxHeight: '280px' }} // Adjusted maxHeight here
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-0"></div>
              </div>
              <div className="absolute left-6 bottom-0 text-center right-0 transition-all duration-400 ease-out group-hover:bottom-10">
                <h4 className="text-white text-2xl font-semibold mb-2">
                  <a href="pro-details.html">Women's Fashion</a>
                </h4>
                <a
                  href="pro-details.html"
                  className="browse-btn opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 ease-out text-white text-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 md:px-4 mb-4 md:mb-6 flex justify-center"> {/* Center aligning image */}
            <div className="relative group">
              <div className="overflow-hidden relative z-0">
                <img
                  src={items3}
                  alt="Baby Fashion"
                  className="w-full transition-transform duration-400 ease-out transform group-hover:scale-100"
                  style={{ maxHeight: '280px' }} // Adjusted maxHeight here
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-0"></div>
              </div>
              <div className="absolute left-6 bottom-0 text-center right-0 transition-all duration-400 ease-out group-hover:bottom-10">
                <h4 className="text-white text-2xl font-semibold mb-2">
                  <a href="pro-details.html">Baby Fashion</a>
                </h4>
                <a
                  href="pro-details.html"
                  className="browse-btn opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 ease-out text-white text-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
