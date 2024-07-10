import React from 'react';
import bestBooks1 from '../assets/img/gallery/latest3.jpg';
import bestSelling1 from '../assets/img/gallery/latest5.jpg';

const Cart = () => {
  return (
    <div>
    <div className="bg-orange-100 w-full p-10">
      <h1 className="text-5xl text-center p-2 font-semibold">Cart</h1>
      <h1 className="text-center text-lg text-orange-800">Home | <span>Cart</span></h1>
    </div>
    <section className="cart_area py-12">
      <div className="container mx-auto">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="pr-6">
                        <img src={bestBooks1} alt="Product" className="border border-gray-300 rounded max-w-xs" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <h5 className="text-sm">$360.00</h5>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="border border-gray-300 rounded-l px-2 py-1 cursor-pointer">-</span>
                      <input className="w-16 border-t border-b border-gray-300 text-center" type="text" value="1" min="0" max="10" readOnly />
                      <span className="border border-gray-300 rounded-r px-2 py-1 cursor-pointer">+</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <h5 className="text-sm">$720.00</h5>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="pr-6">
                        <img src={bestSelling1} alt="Product" className="border border-gray-300 rounded max-w-xs" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <h5 className="text-sm">$360.00</h5>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="border border-gray-300 rounded-l px-2 py-1 cursor-pointer">-</span>
                      <input className="w-16 border-t border-b border-gray-300 text-center" type="text" value="1" min="0" max="10" readOnly />
                      <span className="border border-gray-300 rounded-r px-2 py-1 cursor-pointer">+</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <h5 className="text-sm">$720.00</h5>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td colSpan="4" className="px-6 py-4 text-right">
                    <a className="btn bg-blue-500 hover:bg-orange-500 text-white px-4 py-2 rounded mr-2" href="#">Update Cart</a>
                    <a className="btn bg-blue-500 hover:bg-orange-500 text-white px-4 py-2 rounded" href="#">Close Coupon</a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td></td>
                  <td></td>
                  <td className="px-6 py-4">
                    <h5 className="text-sm">Subtotal</h5>
                  </td>
                  <td className="px-6 py-4">
                    <h5 className="text-sm">$2160.00</h5>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td></td>
                  <td></td>
                  <td className="px-6 py-4">
                    <h5 className="text-sm">Shipping</h5>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-right">
                      <ul className="list-none">
                        <li className="mb-2 text-gray-600">
                          Flat Rate: $5.00
                          <input type="radio" aria-label="Radio button for following text input" className="ml-2" />
                        </li>
                        <li className="mb-2 text-gray-600">
                          Free Shipping
                          <input type="radio" aria-label="Radio button for following text input" className="ml-2" />
                        </li>
                        <li className="mb-2 text-gray-600">
                          Flat Rate: $10.00
                          <input type="radio" aria-label="Radio button for following text input" className="ml-2" />
                        </li>
                        <li className="mb-2 text-gray-600 active">
                          Local Delivery: $2.00
                          <input type="radio" aria-label="Radio button for following text input" className="ml-2" />
                        </li>
                      </ul>
                      <h6 className="text-gray-800 my-4">
                        Calculate Shipping
                        <i className="fa fa-caret-down pl-1" aria-hidden="true"></i>
                      </h6>
                      <select className="shipping_select bg-gray-100 border border-gray-300 p-2 rounded w-full mb-4">
                        <option value="1">Bangladesh</option>
                        <option value="2">India</option>
                        <option value="4">Pakistan</option>
                      </select>
                      <select className="shipping_select bg-gray-100 border border-gray-300 p-2 rounded w-full mb-4">
                        <option value="1">Select a State</option>
                        <option value="2">Select a State</option>
                        <option value="4">Select a State</option>
                      </select>
                      <input className="post_code bg-gray-100 border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Postcode/Zipcode" />
                      <a className="btn bg-blue-500 hover:bg-orange-500 text-white px-4 py-2 rounded" href="#">Update Details</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <a className="btn bg-blue-500 hover:bg-orange-500 text-white px-4 py-2 rounded mr-2" href="#">Continue Shopping</a>
              <a className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" href="#">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
      </section>
      </div>
  );
};

export default Cart;
