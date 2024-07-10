import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavigationBar = React.lazy(() => import('./NavigationBar'));
const Main = React.lazy(() => import('./Main'));
const ProductList = React.lazy(() => import('./ProductList'));
const LatestItems = React.lazy(() => import('./LatestItems'));
const Testimonial = React.lazy(() => import('./Testimonial'));
const LatestItems2 = React.lazy(() => import('./LatestItems2'));
const LatestNews = React.lazy(() => import('./LatestNews'));
const CategoriesArea = React.lazy(() => import('./CategoriesArea'));
function Home() {
  return (

      <Suspense fallback={<div>Loading...</div>}>
        <Main/>
        <ProductList />
        <LatestItems/>
        <Testimonial/>
        <LatestItems2/>
        <LatestNews/>
        <CategoriesArea/>
      </Suspense>
    
  );
}

export default Home;
