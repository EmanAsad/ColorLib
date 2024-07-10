import React from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import  services1 from '../assets/img/icon/services1.svg';
import  services2 from '../assets/img/icon/services2.svg';
import  services3 from '../assets/img/icon/services3.svg';
import  services4 from '../assets/img/icon/services4.svg';

const AnimatedComponent = ({ children, animation, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animate__animated ${
        inView ? `animate__${animation}` : ''
      }`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

const CategoriesArea = () => {
  return (
    <div className="categories-area py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedComponent animation="fadeInUp" delay=".2s">
            <div className="single-cat mb-12 text-center">
              <div className="cat-icon mb-6">
                <img src={services1} alt="Fast & Free Delivery" />
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-medium mb-3">Fast & Free Delivery</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
          </AnimatedComponent>
          <AnimatedComponent animation="fadeInUp" delay=".2s">
            <div className="single-cat mb-12 text-center">
              <div className="cat-icon mb-6">
                <img src={services2} alt="Secure Payment" />
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-medium mb-3">Secure Payment</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
          </AnimatedComponent>
          <AnimatedComponent animation="fadeInUp" delay=".4s">
            <div className="single-cat mb-12 text-center">
              <div className="cat-icon mb-6">
                <img src={services3} alt="Money Back Guarantee" />
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-medium mb-3">Money Back Guarantee</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
          </AnimatedComponent>
          <AnimatedComponent animation="fadeInUp" delay=".5s">
            <div className="single-cat mb-12 text-center">
              <div className="cat-icon mb-6">
                <img src={services4} alt="Online Support" />
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-medium mb-3">Online Support</h5>
                <p>Free delivery on all orders</p>
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
};

export default CategoriesArea;
