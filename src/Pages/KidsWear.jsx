
import React, { useState } from "react";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

import Img1 from '../assets/KidsWear/image1.png';
import Img2 from '../assets/KidsWear/image2.png';
import Img3 from '../assets/KidsWear/image3.png';
import Img4 from '../assets/KidsWear/image4.png';
import Img5 from '../assets/KidsWear/image5.png';
import Img6 from '../assets/KidsWear/image6.png';

const kidsProducts = [
  {
    id: 101,
    name: "Boys Printed T-Shirt",
    price: 699,
    rating: 5,
    image: Img1,
    category: "Boys",
  },
  {
    id:102,
    name: "Girls Party Dress",
    price: 1299,
    rating: 4,
    image: Img2,
    category: "Girls",
  },
  {
    id:103,
    name: "Boys Denim Set",
    price: 1499,
    rating: 5,
    image: Img3,
    category: "Boys",
  },
  {
    id:104,
    name: "Girls Summer Frock",
    price: 999,
    rating: 4,
    image: Img4,
    category: "Girls",
  },
  {
    id:105,
    name: "Baby Cotton Dress",
    price: 599,
    rating: 5,
    image: Img5,
    category: "Baby",
  },
  {
    id:106,
    name: "Baby Winter Wear",
    price: 899,
    rating: 4,
    image: Img6,
    category: "Baby",
  },
];

const KidsWear = () => {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Kids Wear Collection
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Cute & comfortable outfits for kids
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kidsProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <span className="text-primary text-sm font-medium">
                  {item.category}
                </span>

                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h2>

                <div className="flex gap-1 my-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  ₹{item.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  className={`mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-full text-white
                  ${
                    addedItems.includes(item.id)
                      ? "bg-primary cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  onClick={() => handleAddToCart(item)}
                  disabled={addedItems.includes(item.id)}
                >
                  <FaCartShopping />
                  {addedItems.includes(item.id) ? "Added" : "Add to Cart"}
                </button>

                {/* View Cart link for every product */}
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

export default KidsWear;
