
import React, { useState } from "react";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import Img1 from "../assets/Products/Product1.png";
import Img2 from "../assets/Products/Product2.png";
import Img4 from "../assets/Products/Product4.png";
import Laptop from "../assets/Products/laptop.png";
import Earbuds from "../assets/Products/wirelessearbuds.png";
import Camera from "../assets/Products/Camera.png";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const electronicsProducts = [
  {
    id: 501,
    name: "Wireless Headphones",
    price: 2999,
    rating: 5,
    image: Img1,
    category: "Audio",
  },
  {
    id: 502,
    name: "Smart Watch",
    price: 4499,
    rating: 4,
    image: Img2,
    category: "Wearables",
  },
  {
    id: 503,
    name: "Laptop",
    price: 55999,
    rating: 5,
    image: Laptop,
    category: "Computers",
  },
  {
    id: 504,
    name: "Bluetooth Speaker",
    price: 3499,
    rating: 4,
    image: Img4,
    category: "Audio",
  },
  {
    id: 505,
    name: "Wireless Earbuds",
    price: 2499,
    rating: 5,
    image: Earbuds,
    category: "Audio",
  },
  {
    id: 506,
    name: "Digital Camera",
    price: 27999,
    rating: 4,
    image: Camera,
    category: "Camera",
  },
];

const Electronics = () => {
  const { addToCart } = useCart();
  const [addedItemId, setAddedItemId] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItemId(item.id);

    // Reset button text after 1.5 seconds
    setTimeout(() => {
      setAddedItemId(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Electronics Collection
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Latest gadgets & smart devices
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronicsProducts.map((item) => (
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

                {/* Rating */}
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
                    addedItemId === item.id
                      ? "bg-primary"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  onClick={() => handleAddToCart(item)}
                >
                  <FaCartShopping />
                  {addedItemId === item.id ? "Added" : "Add to Cart"}
                </button>

                {/* View Cart */}
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

export default Electronics;

