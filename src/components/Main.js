import React from 'react';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'animate.css/animate.css';
import '../App.css'; // Import your custom CSS

import hero1 from '../assets/img/hero/h1_hero1.jpg';
import hero2 from '../assets/img/hero/h1_hero2.jpg';
import classNames from 'classnames';

const Main = () => {
    const slides = [
        {
            img: hero1,
            heading: 'Fashion Sale',
            heading2: 'Minimal Menz Style',
            text: 'Consectetur adipisicing elit. Laborum fuga incidunt<br />laboriosam voluptas iure, delectus dignissimos<br />facilis neque nulla earum.',
            button: 'Shop Now',
            link: '#'
        },
        {
            img: hero2,
            heading: 'Fashion Sale',
            heading2: 'Minimal Menz Style',
            text: 'Consectetur adipisicing elit. Laborum fuga incidunt<br />laboriosam voluptas iure, delectus dignissimos<br />facilis neque nulla earum.',
            button: 'Shop Now',
            alignment: 'right',
        },
    ];

    return (
        <div>
            <section className="bg-white">
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        navigation
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="relative">
                                <div
                                    className={classNames('min-h-[700px] md:min-h-[550px] sm:min-h-[500px] xs:min-h-[410px] bg-cover bg-center')}
                                    style={{ backgroundImage: `url(${slide.img})` }}
                                >
                                    <div className={classNames("absolute inset-0 flex flex-col justify-center p-6 md:p-20", {
                                        'items-start text-left ml-6 md:ml-20': index === 0 && slide.alignment !== 'right',
                                        'items-end text-right mr-6 md:mr-20': index === 1 && slide.alignment === 'right',
                                    })}>
                                        <div className="hero-caption">
                                            <span className={classNames('text-4xl md:text-5xl lg:text-6xl m-2 md:m-7 text-orange-500 animate__animated rochester-regular', {
                                                'animate__bounceIn': index === 0,
                                                'animate__fadeInUp': index === 1,
                                            })}>{slide.heading}</span>
                                            <h1 className={classNames('text-2xl md:text-3xl lg:text-4xl font-bold mb-2 animate__animated', {
                                                'animate__bounceIn': index === 0,
                                                'animate__fadeInUp': index === 1,
                                            })}>{slide.heading2}</h1>
                                            <p className={classNames('text-sm md:text-base lg:text-lg mt-4 md:mt-6 mb-4 md:mb-10 text-gray-700 animate__animated', {
                                                'animate__fadeInUp': index === 0 || index === 1,
                                            })} dangerouslySetInnerHTML={{ __html: slide.text }}></p>
                                            <a href={slide.link} className={classNames('hero-btn bg-black hover:bg-gray-600 text-white font-bold py-2 md:py-3 px-4 md:px-8 rounded animate__animated', {
                                                'animate__fadeInUp': index === 0 || index === 1,
                                                'ml-0 md:ml-10': index === 0,
                                                'mr-0 md:mr-10': index === 1,
                                            })}>
                                                {slide.button}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-7">
                        <button className="swiper-button-prev bg-black bg-opacity-50 p-2 rounded w-10 h-10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586L9.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-10">
                        <button className="swiper-button-next bg-black bg-opacity-50 p-2 rounded w-10 h-10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.707 6.707a1 1 0 010 1.414L7.414 11l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
