import React from 'react';
import { FaStar, FaStarHalfAlt, FaShareAlt } from 'react-icons/fa';
import latest7 from "../assets/img/gallery/latest7.jpg";

const ProductDetails = () => {
  return (
    <div className="hero-area bg-cover bg-no-repeat bg-center">
      <div className="bg-orange-100 w-full p-10">
      <h1 className="text-5xl text-center p-2 font-semibold">Product Details</h1>
      <h1 className="text-center text-lg text-orange-800">Home | <span>Product Details</span></h1>
    </div>


      <div className="services-area2 pt-12 pl-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-services flex items-center mb-0 bg-red-600 p-7">
                    <div className="features-img">
                      <img src={latest7} alt="The Rage of Dragons" />
                    </div>
                    <div className="features-caption ml-12 m-10">
                      <h3 className="text-white text-5xl font-medium">The Rage of Dragons</h3>
                      <p className="text-white">By Evan Winter</p>
                      <div className="price text-white mt-[20px] mb-5 text-4xl font-medium">
                        <span>$50.00</span>
                      </div>
                      <div className="review">
                        <div className="rating text-white flex text-xl">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                        </div>
                        <p className="text-white ml-2 m-2">(120 Review)</p>
                      </div>
                      <div className="buttons mt-4">
                        <a href="#" className="bg-white text-red-600 px-4 py-3 rounded-[30px] mr-2">Add to Cart</a>
                        <a href="#" className="border w-[50px] border-white text-white px-2 py-2 rounded-[70px] flex items-center m-5">
                          <FaShareAlt className="m-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-padding best-selling py-12 px-12">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-xl-10">
                <div className="nav-button flex justify-between flex-wrap border-b border-gray-200 mb-10 pb-0 relative">
                  <nav>
                    <div className="nav nav-tabs flex space-x-4" id="nav-tab" role="tablist">
                      <a className="nav-link active text-gray-800 py-9 border-b-4 border-red-600" id="nav-one-tab" data-bs-toggle="tab" href="#nav-one" role="tab" aria-controls="nav-one" aria-selected="true">
                        Description
                      </a>
                      <a className="nav-link text-gray-800 py-9 border-b-4" id="nav-two-tab" data-bs-toggle="tab" href="#nav-two" role="tab" aria-controls="nav-two" aria-selected="false">
                        Author
                      </a>
                      <a className="nav-link text-gray-800 py-9 border-b-4" id="nav-three-tab" data-bs-toggle="tab" href="#nav-three" role="tab" aria-controls="nav-three" aria-selected="false">
                        Comments
                      </a>
                      <a className="nav-link text-gray-800 py-9 border-b-4" id="nav-four-tab" data-bs-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">
                        Review
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                <div className="row">
                  <div className="offset-xl-1 col-lg-9">
                    <p>
                      Beryl Cook is one of Britain’s most talented and amusing artists. Beryl’s pictures feature women of all shapes and sizes enjoying themselves. Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                    </p>
                    <p>
                      It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
                    </p>
                  </div>
                </div>
              </div>
              {/* Add similar blocks for other tabs */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
