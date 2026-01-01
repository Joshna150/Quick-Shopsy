
import  { useState } from "react";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

import Product1 from "../assets/products/product1.png";
import Product2 from "../assets/products/product2.png";
import Product3 from "../assets/products/product3.png";
import Product4 from "../assets/products/product4.png";

const bestSellingProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    rating: 5,
    image: Product1,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4499,
    rating: 4,
    image: Product2,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Women Summer Dress",
    price: 1599,
    rating: 5,
    image: Product3,
    category: "Fashion",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 3499,
    rating: 4,
    image: Product4,
    category: "Electronics",
  },
];

const BestSelling = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems((prev) =>
      prev.includes(product.id) ? prev : [...prev, product.id]
    );

    // Reset the "Added" text after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Best Selling Products
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Most loved & top purchased products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-4">
                <span className="text-sm text-primary font-medium">
                  {product.category}
                </span>

                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 my-2">
                  {[...Array(product.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 dark:text-white">
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

                {/* View Cart Link for every product */}
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

export default BestSelling;
