import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import latest1 from '../assets/img/gallery/latest1.jpg';
import latest2 from '../assets/img/gallery/latest2.jpg';
import latest3 from '../assets/img/gallery/latest3.jpg';
import latest4 from '../assets/img/gallery/latest4.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css'; // Custom CSS file for additional styling

const cardData = [
  {
    image: latest1,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest2,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest3,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest4,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest3,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest4,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest1,
    title: 'Cashmere Tank + Bag',
    price: '98.00',
    originalPrice: '120.00',
  },
  {
    image: latest2,
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

const LatestItems = () => {
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
      <h2 className="text-2xl font-bold mb-4">Trending This Week</h2>
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

export default LatestItems;
