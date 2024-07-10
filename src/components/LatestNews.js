import React from 'react';
import blog1 from '../assets/img/gallery/blog1.jpg'
import blog2 from '../assets/img/gallery/blog2.jpg'
import blog3 from '../assets/img/gallery/blog3.jpg'
const LatestNews = () => {
  const newsItems = [
    {
      imgSrc: blog1,
      category: 'Fashion Tips',
      title: 'What Curling Irons Are The Best Ones',
      description: 'Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..',
      link: 'pro-details.html'
    },
    {
      imgSrc: blog2,
      category: 'Fashion Tips',
      title: "Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes",
      description: 'Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..',
      link: 'pro-details.html'
    },
    {
      imgSrc: blog3,
      category: 'Fashion Tips',
      title: 'What Curling Irons Are The Best Ones',
      description: 'Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..',
      link: 'pro-details.html'
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold mb-2">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white shadow-lg  overflow-hidden mb-8">
              <img className="w-full h-50 object-cover" src={item.imgSrc} alt="" />
              <div className="p-6">
                <span className="block text-gray-500 mb-2">{item.category}</span>
                <h5 className="text-2xl font-semibold mb-4">
                  <a href={item.link} className="hover:text-red-500">{item.title}</a>
                </h5>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a href={item.link} className="text-red-500 font-semibold">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
