
// import React from "react";
// import { useCart } from "../Context/CartContext";

// const Cart = () => {
//   const { cart, increaseQty, decreaseQty } = useCart();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

//       {cart.length === 0 && <p>Your cart is empty</p>}

//       {cart.map((item) => (
//         <div
//           key={item.id}
//           className="flex justify-between items-center border-b py-4"
//         >
//           <div className="flex items-center gap-4">
//             {/* Product Image */}
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-20 h-20 object-cover rounded"
//             />

//             <div>
//               <h2 className="font-semibold">{item.name}</h2>
//               {/* Total cost = price × quantity */}
//               <p>₹{item.price * item.quantity}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => decreaseQty(item.id)}
//               className="px-3 py-1 bg-gray-300 rounded"
//             >
//               -
//             </button>

//             <span>{item.quantity}</span>

//             <button
//               onClick={() => increaseQty(item.id)}
//               className="px-3 py-1 bg-gray-300 rounded"
//             >
//               +
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />

            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price * item.quantity}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;


