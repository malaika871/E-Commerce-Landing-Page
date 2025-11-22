// Products Page Component
import { Button } from "./ui/button";

// Props: This component receives addToCart function from parent (App)
export function Products({ addToCart }) {
  // Array of products (hard-coded for simplicity)
  const products = [
    {
      id: 1,
      name: "Blue T-Shirt",
      price: 25,
      image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=400"
    },
    {
      id: 2,
      name: "Headphones",
      price: 80,
      image: "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?w=400"
    },
    {
      id: 3,
      name: "Decorative Vase",
      price: 40,
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400"
    },
    {
      id: 4,
      name: "Sneakers",
      price: 60,
      image: "https://images.unsplash.com/photo-1656360088907-5109c245851d?w=400"
    },
    {
      id: 5,
      name: "Watch",
      price: 120,
      image: "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?w=400"
    },
    {
      id: 6,
      name: "Lamp",
      price: 45,
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="mb-8">Our Products</h1>

      {/* Product Grid - Using map() to display all products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          // Each product card (key is important for React)
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Product Image */}
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            
            {/* Product Info */}
            <div className="p-4">
              <h3 className="mb-2">{product.name}</h3>
              <p className="text-blue-600 mb-4">${product.price}</p>
              
              {/* Button with Event Handler (onClick) */}
              <Button 
                onClick={() => addToCart(product)}
                className="w-full"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
