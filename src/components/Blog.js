import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import blog1 from '../assets/img/blog/single_blog_1.jpg';
import blog2 from '../assets/img/blog/single_blog_2.jpg';
import blog3 from '../assets/img/blog/single_blog_3.jpg';
import blog4 from '../assets/img/blog/single_blog_4.jpg';
import blog5 from '../assets/img/blog/single_blog_5.jpg';
import post1 from "../assets/img/post/post_1.jpg";
import post2 from "../assets/img/post/post_2.jpg";
import post3 from "../assets/img/post/post_3.jpg";
import post4 from "../assets/img/post/post_4.jpg";
import post5 from "../assets/img/post/post_5.jpg";


const BlogItem = ({ imgSrc, date, title, description, categories, comments }) => {
  return (
    <article className="mb-12 shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={imgSrc} alt={title} /> {/* Ensure the image fills its container */}
        <div className="absolute bottom-[-20px] left-[20px] bg-red-600 text-white p-6 rounded-[14px]">
          <h3 className="text-lg">{date.day}</h3>
          <p>{date.month}</p>
        </div>
      </div>
      <div className="p-6 bg-white">
        <a href="blog_details.html" className="block mb-4 text-2xl font-bold text-gray-900 hover:text-red-600">{title}</a>
        <p className="mb-4 text-gray-700">{description}</p>
        <ul className="flex text-sm text-gray-600 space-x-4">
          <li><i className="fa fa-user"></i> {categories}</li>
          <li><i className="fa fa-comments"></i> {comments} Comments</li>
        </ul>
      </div>

    </article>
  );
};


const BlogSidebar = () => {
  return (
    <div className="space-y-6">
      <aside className="p-6 bg-gray-100 rounded-lg shadow">
        <form>
          <div className="relative">
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Search Keyword" />
            <button className="absolute right-0 top-0 mt-3 mr-3 bg-red-600 text-white p-2 rounded">Search</button>
          </div>
        </form>
      </aside>
      <aside className="p-6 bg-gray-100 rounded-lg shadow">
        <h4 className="text-xl font-semibold mb-4">Category</h4>
        <ul className="space-y-2">
          <li className="flex justify-between"><a href="#" className="hover:text-red-600">Restaurant food</a><span>(37)</span></li>
          <li className="flex justify-between"><a href="#" className="hover:text-red-600">Travel news</a><span>(10)</span></li>
          <li className="flex justify-between"><a href="#" className="hover:text-red-600">Modern technology</a><span>(03)</span></li>
          <li className="flex justify-between"><a href="#" className="hover:text-red-600">Product</a><span>(11)</span></li>
          <li className="flex justify-between"><a href="#" className="hover:text-red-600">Inspiration</a><span>(21)</span></li>
          <li className="flex justify-between"><a href="#" className="hover:text-red-600">Health Care</a><span>(09)</span></li>
        </ul>
      </aside>
      <aside className="p-6 bg-gray-100 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
        <div className="space-y-4">
          <div className="flex p-2">
            <img className="w-16 h-16 rounded" src={post1} alt="post" />
            <div className="ml-4">
              <a href="blog_details.html" className="block text-lg font-semibold text-gray-900 hover:text-red-600">From life was you fish...</a>
              <p className="text-sm text-gray-600">January 12, 2019</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex p-2">
            <img className="w-16 h-16 rounded" src={post2} alt="post" />
            <div className="ml-4">
              <a href="blog_details.html" className="block text-lg font-semibold text-gray-900 hover:text-red-600">From life was you fish...</a>
              <p className="text-sm text-gray-600">January 12, 2019</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex p-2">
            <img className="w-16 h-16 rounded" src={post3} alt="post" />
            <div className="ml-4">
              <a href="blog_details.html" className="block text-lg font-semibold text-gray-900 hover:text-red-600">From life was you fish...</a>
              <p className="text-sm text-gray-600">January 12, 2019</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex p-2">
            <img className="w-16 h-16 rounded" src={post4} alt="post" />
            <div className="ml-4">
              <a href="blog_details.html" className="block text-lg font-semibold text-gray-900 hover:text-red-600">From life was you fish...</a>
              <p className="text-sm text-gray-600">January 12, 2019</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex p-2">
            <img className="w-16 h-16 rounded" src={post5} alt="post" />
            <div className="ml-4">
              <a href="blog_details.html" className="block text-lg font-semibold text-gray-900 hover:text-red-600">From life was you fish...</a>
              <p className="text-sm text-gray-600">January 12, 2019</p>
            </div>
          </div>
        </div>
      </aside>
      <aside className="p-6 bg-gray-100 rounded-lg shadow">
        <h4 className="text-xl font-semibold mb-4">Tag Clouds</h4>
        <ul className="flex flex-wrap p-2">
          <li className="m-2 p-1"><a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-red-600 hover:text-white  ">project</a></li>
          <li className="m-2 p-1"><a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-red-600 hover:text-white">project</a></li>
          <li className="m-2 p-1"><a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-red-600 hover:text-white">project</a></li>
          <li className="m-2 p-1"><a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-red-600 hover:text-white">project</a></li>
          <li className="m-2 p-1"><a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-red-600 hover:text-white">project</a></li>
          <li className="m-2 p-1"><a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-red-600 hover:text-white">project</a></li>
        </ul>
      </aside>
      <aside className="p-6 bg-gray-100 rounded-lg shadow">
        <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
        <form>
          <input type="email" className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Enter email" required />
          <button className="w-full py-3 bg-red-600 text-white rounded">Subscribe</button>
        </form>
      </aside>
    </div>
  );
};

const BlogPagination = () => {
  return (
    <nav className="flex justify-center mt-12">
  <ul className="flex items-center space-x-2">
    <li><a href="#" className="block p-2 border border-gray-300 rounded hover:bg-red-600 hover:text-white"><FontAwesomeIcon icon={faAngleLeft} /></a></li>
    <li><a href="#" className="block p-2 border border-gray-300 rounded hover:bg-red-600 hover:text-white">1</a></li>
    <li><a href="#" className="block p-2 border border-gray-300 rounded bg-gray-200">2</a></li>
    <li><a href="#" className="block p-2 border border-gray-300 rounded hover:bg-red-600 hover:text-white"><FontAwesomeIcon icon={faAngleRight} /></a></li>
  </ul>
</nav>

  );
};

const BlogArea = () => {
  const blogPosts = [
    {
      imgSrc: blog1,
      date: { day: '15', month: 'Jan' },
      title: 'Google inks pact for new 35-storey office',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: 'Travel, Lifestyle',
      comments: 3
    },
    {
      imgSrc: blog2,
      date: { day: '15', month: 'Jan' },
      title: 'Google inks pact for new 35-storey office',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: 'Travel, Lifestyle',
      comments: 3
    },
    {
      imgSrc: blog3,
      date: { day: '15', month: 'Jan' },
      title: 'Google inks pact for new 35-storey office',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: 'Travel, Lifestyle',
      comments: 3
    },
    {
      imgSrc: blog4,
      date: { day: '15', month: 'Jan' },
      title: 'Google inks pact for new 35-storey office',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: 'Travel, Lifestyle',
      comments: 3
    },
    {
      imgSrc: blog5,
      date: { day: '15', month: 'Jan' },
      title: 'Google inks pact for new 35-storey office',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: 'Travel, Lifestyle',
      comments: 3
    },

  ];

  return (
    <section className="blog_area py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 mb-12 lg:mb-0 p-5">
            <div className="space-y-12x">
              {blogPosts.map((post, index) => (
                <BlogItem key={index} {...post} />
              ))}
            </div>
            <BlogPagination />
          </div>
          <div className="w-full lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <div className="bg-orange-100 w-full p-10">
    <h1 className="text-5xl text-center p-2 font-semibold">Blog</h1>
    <h1 className="text-center text-lg text-orange-800">Home | <span>Blog</span></h1>
    <div>
      <BlogArea />
    </div>
    </div>
  );
};

export default Blog;
