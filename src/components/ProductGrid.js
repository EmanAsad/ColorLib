// src/components/ProductCard.js
import React from 'react';
// product card
const ProductGrid = ({ imgSrc, title, price, oldPrice }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
      <div className="properties pb-30">
        <div className="properties-card">
          <div className="properties-img">
            <a href="pro-details.html"><img src={imgSrc} alt={title} /></a>
            <div className="socal_icon">
              <a href="#"><i className="ti-shopping-cart"></i></a>
              <a href="#"><i className="ti-heart"></i></a>
              <a href="#"><i className="ti-zoom-in"></i></a>
            </div>
          </div>
          <div className="properties-caption properties-caption2">
            <h3><a href="pro-details.html">{title}</a></h3>
            <div className="properties-footer">
              <div className="price">
                <span>${price} <span>${oldPrice}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
