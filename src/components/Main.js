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
                                    className={classNames('min-h-[700px] md:min-h-[550px] sm:min-h-[500px] xs:min-h-[410px] bg-cover bg-center', slide.img)}
                                    style={{ backgroundImage: `url(${slide.img})` }}
                                >
                                    <div className={classNames("absolute inset-0 flex flex-col justify-center p-20", {
                                        'items-start text-left ml-20': index === 0 && slide.alignment !== 'right',
                                        'items-start text-left ml-[600px]': index === 1 && slide.alignment === 'right',
                                    })}>
                                        <div className="hero-caption">
                                            <span className={classNames('text-5xl m-7 text-orange-500 animate__animated rochester-regular', {
                                                'animate__bounceIn': index === 0,
                                                'animate__fadeInUp pl-20': index === 1,
                                            })}>{slide.heading}</span>
                                            <h1 className={classNames('text-xxl font-bold mb-2 animate__animated', {
                                                'text-2xl md:text-3xl': index === 0,
                                                'animate__bounceIn': index === 0,
                                                'animate__fadeInUp pl-10 text-3xl ': index === 1,
                                            })}>{slide.heading2}</h1>
                                            <p className={classNames('text-1  mt-6 mb-10 text-gray animate__animated text-center', {
                                                'animate__fadeInUp ': index === 0,
                                                'animate__fadeInUp ': index === 1,
                                                'animate__delay-2s  mt-6 mb-10': index === 0,
                                                'animate__delay-2s  mt-6 mb-10 text-2': index === 1,
                                                'text-sm': index === 0
                                            })} dangerouslySetInnerHTML={{ __html: slide.text }}></p>
                                            <a href={slide.link} className={classNames('hero-btn ml-10 bg-black hover:bg-gray-600 text-white font-bold py-3 px-8 rounded animate__animated', {
                                                'animate__fadeInUp': index === 0,
                                                'animate__delay-2s': index === 0,
                                            })}>
                                                {slide.button}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                        <button className="swiper-button-prev bg-black bg-opacity-50 p-2 rounded w-10 h-10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586L9.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-5">
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
