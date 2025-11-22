// Cart Page Component
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

// Props: This component receives cart array and removeFromCart function
export function Cart({ cart, removeFromCart }) {
  // Calculate total price using reduce()
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Show empty cart message if no items
  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="mb-4">Your cart is empty</h2>
        <Link to="/products">
          <Button>Go Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Map through cart items */}
          {cart.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex gap-4">
              {/* Product Image */}
              <img 
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              
              {/* Product Details */}
              <div className="flex-1">
                <h3 className="mb-1">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>

              {/* Remove Button with Event Handler */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Items:</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span>Total:</span>
              <span className="text-xl">${total}</span>
            </div>
          </div>

          <Button className="w-full mb-3">Checkout</Button>
          <Link to="/products">
            <Button variant="outline" className="w-full">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
