import React from 'react';
// import '../assets/css/style.css';

const ProductCheckout = () => {
  return (
    <div>
      <div className="bg-orange-100 w-full p-10">
        <h1 className="text-5xl text-center p-2 font-semibold">Product CheckOut</h1>
        <h1 className="text-center text-lg text-orange-800">Home | <span>Product CheckOut</span></h1>
      </div>

      <section className="checkout_area py-12">
        <div className="container mx-auto">
          <div className="returning_customer mb-8">
            <div className="check_title bg-gray-100 p-4">
              <h2 className="text-lg font-normal">
                Returning Customer? <a href="login.html" className="text-red-500 underline">Click here to login</a>
              </h2>
            </div>
            <p className="mt-4 pl-8 mb-6 text-sm">
              If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.
            </p>
            <form className="contact_form grid grid-cols-1 md:grid-cols-2 gap-4" action="#" method="post">
              <div className="form-group p_star">
                <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="name" name="name" />
                <span className="placeholder text-gray-500" data-placeholder="Username or Email"></span>
              </div>
              <div className="form-group p_star">
                <input type="password" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="password" name="password" />
                <span className="placeholder text-gray-500" data-placeholder="Password"></span>
              </div>
              <div className="form-group col-span-2 flex items-center">
                <a href="login.html" className="btn bg-orange-500 text-white py-2 px-4 rounded">Log in</a>
                <div className="checkout-cap ml-5">
                  <input type="checkbox" id="keep-log" name="keep-log" className="mr-2" />
                  <label htmlFor="keep-log">Create an account?</label>
                </div>
              </div>
            </form>
          </div>

          <div className="cupon_area mb-8">
            <div className="check_title bg-gray-200 p-4">
              <h2 className="text-lg font-normal">Have a coupon? <a href="#" className="text-red-500 underline">Click here to enter your code</a></h2>
            </div>
            <input type="text" placeholder="Enter coupon code" className="block w-full mt-5 mb-5 px-3 py-2 border border-gray-300 rounded" />
            <a href="#" className="btn bg-orange-500 text-white py-2 px-4 rounded">Apply Coupon</a>
          </div>

          <div className="billing_details">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-2/3 px-4">
                <h3 className="text-xl font-semibold mb-6">Billing Details</h3>
                <form className="contact_form grid grid-cols-1 md:grid-cols-2 gap-4" action="#" method="post">
                  <div className="form-group p_star">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="first" name="first" />
                    <span className="placeholder text-gray-500" data-placeholder="First name"></span>
                  </div>
                  <div className="form-group p_star">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="last" name="last" />
                    <span className="placeholder text-gray-500" data-placeholder="Last name"></span>
                  </div>
                  <div className="form-group col-span-2">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="company" name="company" placeholder="Company name" />
                  </div>
                  <div className="form-group p_star">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="number" name="number" />
                    <span className="placeholder text-gray-500" data-placeholder="Phone number"></span>
                  </div>
                  <div className="form-group p_star">
                    <input type="email" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="email" name="email" />
                    <span className="placeholder text-gray-500" data-placeholder="Email Address"></span>
                  </div>
                  <div className="form-group p_star col-span-2">
                    <select className="country_select block w-full px-3 py-2 border border-gray-300 rounded">
                      <option value="1">Country</option>
                      <option value="2">Country</option>
                      <option value="3">Country</option>
                    </select>
                  </div>
                  <div className="form-group p_star col-span-2">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="add1" name="add1" />
                    <span className="placeholder text-gray-500" data-placeholder="Address line 01"></span>
                  </div>
                  <div className="form-group p_star col-span-2">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="add2" name="add2" />
                    <span className="placeholder text-gray-500" data-placeholder="Address line 02"></span>
                  </div>
                  <div className="form-group p_star col-span-2">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="city" name="city" />
                    <span className="placeholder text-gray-500" data-placeholder="Town/City"></span>
                  </div>
                  <div className="form-group p_star col-span-2">
                    <select className="country_select block w-full px-3 py-2 border border-gray-300 rounded">
                      <option value="1">District</option>
                      <option value="2">District</option>
                      <option value="3">District</option>
                    </select>
                  </div>
                  <div className="form-group col-span-2">
                    <input type="text" className="form-control block w-full px-3 py-2 border border-gray-300 rounded" id="zip" name="zip" placeholder="Postcode/ZIP" />
                  </div>
                  <div className="form-group col-span-2">
                    <div className="checkout-cap flex items-center">
                      <input type="checkbox" id="create-account" name="create-account" className="mr-2" />
                      <label htmlFor="create-account">Create an account?</label>
                    </div>
                  </div>
                  <div className="form-group col-span-2">
                    <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
                    <div className="checkout-cap flex items-center">
                      <input type="checkbox" id="ship-different" name="ship-different" className="mr-2" />
                      <label htmlFor="ship-different">Ship to a different address?</label>
                    </div>
                  </div>
                  <div className="form-group col-span-2">
                    <textarea className="form-control block w-full px-3 py-2 border border-gray-300 rounded" name="message" id="message" rows="4" placeholder="Order Notes"></textarea>
                  </div>
                </form>
              </div>

              <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
                <div className="order_box p-6 bg-gray-50 rounded">
                  <h2 className="text-xl font-semibold mb-6">Your Order</h2>
                  <ul className="list-unstyled mb-6">
                    <li className="flex justify-between mb-2"><span>Product</span> <span>Total</span></li>
                    <li className="flex justify-between mb-2"><span>Fresh Blackberry</span> <span>$720.00</span></li>
                    <li className="flex justify-between mb-2"><span>Fresh Tomatoes</span> <span>$720.00</span></li>
                    <li className="flex justify-between mb-2"><span>Fresh Brocoli</span> <span>$720.00</span></li>
                    <li className="flex justify-between mb-2"><span>Fresh Carrot</span> <span>$720.00</span></li>
                    <li className="flex justify-between mb-2"><span>Subtotal</span> <span>$2880.00</span></li>
                    <li className="flex justify-between mb-2"><span>Shipping</span> <span>Flat rate: $50.00</span></li>
                    <li className="flex justify-between mb-2"><span>Total</span> <span>$2930.00</span></li>
                  </ul>
                  <div className="payment_item mb-4">
                    <div className="radion_btn flex items-center">
                      <input type="radio" id="f-option5" name="selector" />
                      <label htmlFor="f-option5" className="ml-2">Check payments</label>
                      <div className="check bg-orange-500 w-4 h-4 rounded-full flex items-center justify-center">
                        <span className="text-white">&#10003;</span>
                      </div>
                    </div>
                    <p className="mt-2 ml-6">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                  </div>
                  <div className="payment_item mb-4">
                    <div className="radion_btn flex items-center">
                      <input type="radio" id="f-option6" name="selector" />
                      <label htmlFor="f-option6" className="ml-2">Paypal</label>
                      <img src="img/product/single-product/card.jpg" alt="PayPal" className="ml-auto w-1/3" />
                      <div className="check bg-orange-500 w-4 h-4 rounded-full flex items-center justify-center">
                        <span className="text-white">&#10003;</span>
                      </div>
                    </div>
                    <p className="mt-2 ml-6">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                  </div>
                  <div className="creat_account mb-4">
                    <input type="checkbox" id="f-option4" name="selector" className="mr-2 bg-orange-500" />
                    <label htmlFor="f-option4">I’ve read and accept the <a href="#" className="text-red-500 underline">terms & conditions*</a></label>
                  </div>
                  <a className="btn bg-orange-500 text-white py-2 px-4 rounded" href="#">Proceed to Paypal</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCheckout;
