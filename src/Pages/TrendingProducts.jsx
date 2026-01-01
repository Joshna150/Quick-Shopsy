import React from "react";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import Handbag from '../assets/Trendingproducts/Handbag.png'
import Jacket from '../assets/Trendingproducts/jacket.png'
import TShirt from '../assets/Trendingproducts/MensTShirt.png'
import sneakers from '../assets/Trendingproducts/sneakers.png'
import Watch from '../assets/Trendingproducts/Watch.png'
import wirelessearbuds from '../assets/products/wirelessearbuds.png'



const trendingProducts = [
  {
    id:301,
    name: "Men's Casual T-Shirt",
    price: 999,
    rating: 4,
    image: TShirt,
    category: "Men Wear",
  },
  {
    id:302,
    name: "Smart Watch Pro",
    price: 4999,
    rating: 5,
    image: Watch,
    category: "Electronics",
  },
  {
    id: 303,
    name: "Stylish Sneakers",
    price: 2999,
    rating: 5,
    image: sneakers,
    category: "Footwear",
  },
  {
    id: 304,
    name: "Wireless Earbuds",
    price: 2499,
    rating: 4,
    image: wirelessearbuds,
    category: "Electronics",
  },
  {
    id: 305,
    name: "Women's Handbag",
    price: 1999,
    rating: 5,
    image: Handbag,
    category: "Fashion",
  },
  {
    id: 6,
    name: "Winter Jacket",
    price: 3499,
    rating: 4,
    image: Jacket,
    category: "Outerwear",
  },
];

const TrendingProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Trending Products
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Hot picks everyone is loving right now
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <span className="text-primary text-sm font-medium">
                  {product.category}
                </span>

                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 my-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  ₹{product.price}
                </p>

                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-full hover:bg-primary/90">
                  <FaCartShopping />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrendingProducts;
