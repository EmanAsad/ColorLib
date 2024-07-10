import React from 'react';
import loaderImage from '../assets/img/icon/loder.png'; // Adjust the path as necessary

const PreLoader = () => {
  return (
    <div id="preloader-active">
      <div className="preloader flex items-center justify-center">
        <div className="preloader-inner relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src={loaderImage} alt="loader" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
