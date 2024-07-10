import React, { useState } from 'react';
import latest5 from '../assets/img/gallery/latest5.jpg';
import latest4 from '../assets/img/gallery/latest4.jpg';
import latest3 from '../assets/img/gallery/latest3.jpg';
import latest2 from '../assets/img/gallery/latest2.jpg';
import latest1 from '../assets/img/gallery/latest1.jpg';
import latest6 from '../assets/img/gallery/latest6.jpg';
import Card from './Card';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../App.css';

const products = [
  { image: latest1, title: 'Cashmere Tank + Bag', price: 98.00, originalPrice: 120.00 },
  { image: latest2, title: 'Silk Dress', price: 150.00, originalPrice: 200.00 },
  { image: latest3, title: 'Leather Jacket', price: 250.00, originalPrice: 300.00 },
  { image: latest4, title: 'Wool Scarf', price: 50.00, originalPrice: 70.00 },
  { image: latest5, title: 'Denim Jeans', price: 80.00, originalPrice: 100.00 },
  { image: latest6, title: 'Summer Hat', price: 40.00, originalPrice: 60.00 },
];

const CategoryList = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });

  return (
    <div>
      <div className="bg-orange-100 w-full p-10">
        <h1 className="text-5xl text-center p-2 font-semibold">Category</h1>
        <h1 className="text-center text-lg text-orange-800">Home | <span>Category</span></h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap m-24">
        <div className="w-full lg:w-1/4 p-10 border-r border-gray-100">
          {/* Left Sidebar for Filters */}
          <div className="m-10">
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <select name="category" className="w-[180px] bg-gray-50 rounded-full p-3 pl-8 mb-4 border border-gray-100 relative ">
            <option value="">Category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
          </select>
          <select name="type" className="w-[180px] bg-gray-50 rounded-full p-3 pl-8 mb-4 border border-gray-100 relative ">
            <option value="">Type</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Type 3">Type 3</option>
            <option value="Type 4">Type 4</option>
          </select>
          <select name="size" className="w-[180px] bg-gray-50 rounded-full p-3 pl-8 mb-4 border border-gray-100 relative ">
            <option value="">Size</option>
            <option value="Size 1">Size 1</option>
            <option value="Size 2">Size 2</option>
            <option value="Size 3">Size 3</option>
            <option value="Size 4">Size 4</option>
          </select>
          <select name="color" className="w-[180px] bg-gray-50 rounded-full p-3 pl-8 mb-4 border border-gray-100 relative ">
            <option value="">Color</option>
            <option value="Color 1">Color 1</option>
            <option value="Color 2">Color 2</option>
            <option value="Color 3">Color 3</option>
            <option value="Color 4">Color 4</option>
          </select>
          
          
          </div>


          {/* Filter by Price */}
          <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow mb-40">
            <div className="small-tittle mb-4">
              <h4 className="text-lg font-semibold">Filter by Price</h4>
            </div>
            <div className="widgets_inner">
              <div className="range_item mb-4">
                <InputRange
                  maxValue={300}
                  minValue={0}
                  value={priceRange}
                  onChange={value => setPriceRange(value)}
                />
                <div className="flex items-center justify-center mt-4">
                  <div className="price_value flex justify-between w-full">
                    <input type="text" className="js-input-from border-0 text-center w-1/2 bg-transparent" value={`$${priceRange.min}`} readOnly />
                    <span className="mx-2">to</span>
                    <input type="text" className="js-input-to border-0 text-center w-1/2 bg-transparent" value={`$${priceRange.max}`} readOnly />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Filter by Genres */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Filter by Genres</h4>
            <label className="block">
              <input type="checkbox" className="mr-2 " />
              History
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Horror - Thriller
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Love Stories
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Science Fiction
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Biography
            </label>
          </div>

          {/* Filter by Brand */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Filter by Brand</h4>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Green Publications
            </label>
            {/* Add more brand options here */}
          </div>
        </div>

        <div className="w-full lg:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
