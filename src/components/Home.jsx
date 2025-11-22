// Home Page Component
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Zap, ShieldCheck, Trophy } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center text-white px-4 py-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome to ShopEasy
          </h1>
          <p className="text-2xl md:text-3xl mb-8 drop-shadow-md font-light">
            Your Ultimate Online Shopping Destination
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md opacity-90">
            Discover premium products, unbeatable prices, and exceptional service. Start your shopping journey today!
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose ShopEasy?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">Free Shipping</h3>
              <p className="text-gray-600 text-center text-lg">On orders over $50. Fast and reliable delivery to your doorstep.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">Secure Payment</h3>
              <p className="text-gray-600 text-center text-lg">100% secure checkout with encrypted transactions. Your data is safe.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">Quality Products</h3>
              <p className="text-gray-600 text-center text-lg">Curated selection of premium items. Best quality guaranteed or your money back.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Shopping?</h2>
          <p className="text-xl mb-8 opacity-90">Browse our extensive collection of premium products selected just for you.</p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
