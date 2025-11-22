// Simple E-commerce App
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";

export default function App() {
  // State: Shopping cart items
  const [cart, setCart] = useState([]);

  // Function: Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to cart!");
  };

  // Function: Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Simple Navigation Bar */}
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h2>ShopEasy</h2>
            <div className="flex gap-6 items-center">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="/products" className="hover:text-blue-600">Products</Link>
              <Link to="/cart" className="flex items-center gap-2 hover:text-blue-600">
                <ShoppingCart className="w-5 h-5" />
                Cart ({cart.length})
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes - Different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
