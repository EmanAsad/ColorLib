import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Preloader from './components/PreLoader';

const NavigationBar = React.lazy(() => import('./components/NavigationBar'));
const Home = React.lazy(() => import('./components/Home'));
const Categorylist = React.lazy(() => import('./components/CategoryList'));
const ProductDetails = React.lazy(() => import('./components/ProductDetails'));
const ProductCheckout = React.lazy(() => import('./components/ProductCheckout'));
const Login = React.lazy(() => import('./components/Login'));
const Blog = React.lazy(() => import('./components/Blog'));
const Elements = React.lazy(() => import('./components/Elements'));
const Footer = React.lazy(() => import('./components/Footer'));
const Cart = React.lazy(() => import('./components/Cart'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Categorylist />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/ProductCheckout" element={<ProductCheckout />} />
          <Route path="/Elements" element={<Elements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
