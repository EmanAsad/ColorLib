import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import founder from '../assets/img/gallery/founder-img.png';

const Testimonial = () => {
  // Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10  mr-40 top-1/2 transform -translate-y-1/2 right-[-40px] md:right-[-30px] lg:right-[-20px] xl:right-[-10px] bg-none p-0 border-0 cursor-pointer custom-arrow"
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
      className="absolute z-10  ml-40 top-1/2 transform -translate-y-1/2 left-[40px] md:left-[-30px] lg:left-[-20px] xl:left-[-10px] bg-none p-0 border-0 cursor-pointer custom-arrow"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />, // Use the CustomPrevArrow component here
    nextArrow: <NextArrow />, // Use the CustomNextArrow component here
  };

  return (
    <section className="testimonial-area bg-orange-100 py-16 md:py-20 lg:py-24 mt-[-10px]">
      <div className="container mx-auto">
        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="single-testimonial text-center">
            <div className="testimonial-caption">
              <div className="testimonial-top-cap">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">Customer Testimonial</h2>
                <p className="text-lg md:text-xl leading-relaxed md:px-16 mb-8 text-gray-700">
                  Everybody is different, which is why we offer styles for<br/> every body. Laborum fuga incidunt laboriosam voluptas<br/> iure, delectus dignissimos facilis neque nulla earum.
                </p>
              </div>

              <div className="testimonial-founder flex items-center justify-center">
                <div className="founder-img">
                  <img src={founder} alt="Founder" />
                </div>
                <div className="founder-text ml-4 text-left">
                  <span className="font-semibold text-gray-800 text-sm md:text-base block">Petey Cruiser</span>
                  <p className="text-gray-600 text-sm md:text-base">Designer at Colorlib</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="single-testimonial text-center">
            <div className="testimonial-caption">
              <div className="testimonial-top-cap">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">Customer Testimonial</h2>
                <p className="text-lg md:text-xl leading-relaxed md:px-16 mb-8 text-gray-700">
                Everybody is different, which is why we offer styles for<br/> every body. Laborum fuga incidunt laboriosam voluptas<br/> iure, delectus dignissimos facilis neque nulla earum.
              </p>
              </div>

              <div className="testimonial-founder flex items-center justify-center">
                <div className="founder-img">
                  <img src={founder} alt="Founder" />
                </div>
                <div className="founder-text ml-4 text-left">
                  <span className="font-semibold text-gray-800 text-sm md:text-base block">Petey Cruiser</span>
                  <p className="text-gray-600 text-sm md:text-base">Designer at Colorlib</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="single-testimonial text-center">
            <div className="testimonial-caption">
              <div className="testimonial-top-cap">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">Customer Testimonial</h2>
                <p className="text-lg md:text-xl leading-relaxed md:px-16 mb-8 text-gray-700">
                Everybody is different, which is why we offer styles for<br/> every body. Laborum fuga incidunt laboriosam voluptas<br/> iure, delectus dignissimos facilis neque nulla earum.
              </p>
              </div>

              <div className="testimonial-founder flex items-center justify-center">
                <div className="founder-img">
                  <img src={founder} alt="Founder" />
                </div>
                <div className="founder-text ml-4 text-left">
                  <span className="font-semibold text-gray-800 text-sm md:text-base block">Petey Cruiser</span>
                  <p className="text-gray-600 text-sm md:text-base">Designer at Colorlib</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Testimonials Go Here */}

        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
