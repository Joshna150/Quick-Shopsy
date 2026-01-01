import React, { useState } from "react";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

import Frock from '../assets/women/women2.jpg';
import Shirt from '../assets/shirt/shirt.png';
import Bluetooth from '../assets/Products/Product1.png';
import Earbuds from '../assets/Products/wirelessearbuds.png';

const topRatedProducts = [
  {
    id:401,
    title: "Frock",
    price: 2999,
    rating: 5,
    img: Frock,
  },
  {
    id:402,
    title: "Shirt",
    price: 4499,
    rating: 4,
    img: Shirt,
  },
  {
    id:403,
    title: "Wireless Earbuds",
    price: 1999,
    rating: 5,
    img: Earbuds,
  },
  {
    id: 404,
    title: "Bluetooth Speaker",
    price: 3499,
    rating: 4,
    img: Bluetooth,
  },
];

const TopRated = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems((prev) =>
      prev.includes(item.id) ? prev : [...prev, item.id]
    );

    // Reset "Added" text after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.id));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Top Rated Products
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Best products loved by our customers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topRatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 my-2">
                  {[...Array(product.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Price */}
                <p className="text-primary font-bold text-lg">
                  ₹{product.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  className={`mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-full text-white
                  ${
                    addedItems.includes(product.id)
                      ? "bg-primary cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems.includes(product.id)}
                >
                  <FaCartShopping />
                  {addedItems.includes(product.id) ? "Added" : "Add to Cart"}
                </button>

                {/* View Cart Link */}
                <Link
                  to="/cart"
                  className="block text-center mt-2 text-sm text-primary hover:underline"
                >
                  View Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
