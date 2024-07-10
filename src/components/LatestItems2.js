import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import latest5 from '../assets/img/gallery/latest5.jpg';
import latest6 from '../assets/img/gallery/latest6.jpg';
import latest7 from '../assets/img/gallery/latest7.jpg';
import latest8 from '../assets/img/gallery/latest8.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css'; // Custom CSS file for additional styling

const cardData = [
  {
    image: latest5,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest6,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest7,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest8,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
];

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10 top-1/2 transform -translate-y-1/2 right-[-40px] md:right-[-30px] lg:right-[-20px] xl:right-[-10px] bg-none p-0 border-0 cursor-pointer custom-arrow"
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10 top-1/2 transform -translate-y-1/2 left-[-40px] md:left-[-30px] lg:left-[-20px] xl:left-[-10px] bg-none p-0 border-0 cursor-pointer custom-arrow"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

const LatestItems2 = () => {
  const settings = {
    dots: false, // Remove dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false // Ensure dots are also removed for responsive views
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false // Ensure dots are also removed for responsive views
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false // Ensure dots are also removed for responsive views
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-3xl font-bold mb-10 mt-10 text-center">You May Like</h2>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-2 transition-opacity duration-300"> {/* Add CSS transition */}
            <Card {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestItems2;
