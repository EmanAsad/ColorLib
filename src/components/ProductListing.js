// src/components/ProductListing.js
import React from 'react';
import ProductGrid from './ProductGrid';

const products = [
  { imgSrc: 'assets/img/gallery/latest5.jpg', title: 'Cashmere Tank + Bag', price: '98.00', oldPrice: '120.00' },
  // Add more products as needed
];

const ProductListing = () => {
  return (
    <div className="col-xl-9 col-lg-8 col-md-8">
      <div className="latest-items latest-items2">
        <div className="row">
          {products.map((product, index) => (
            <ProductGrid key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
