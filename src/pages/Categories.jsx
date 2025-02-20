import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Women's Fashion",
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    itemCount: 245,
    href: '/category/womens-fashion'
  },
  {
    id: 2,
    name: "Men's Fashion",
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80',
    itemCount: 186,
    href: '/category/mens-fashion'
  },
  {
    id: 3,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 324,
    href: '/category/electronics'
  },
  {
    id: 4,
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 157,
    href: '/category/home-kitchen'
  },
  {
    id: 5,
    name: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 198,
    href: '/category/beauty-health'
  },
  {
    id: 6,
    name: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 145,
    href: '/category/sports-outdoors'
  },
  {
    id: 7,
    name: 'Kids & Baby',
    image: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 167,
    href: '/category/kids-baby'
  },
  {
    id: 8,
    name: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 92,
    href: '/category/jewelry-watches'
  },
  {
    id: 9,
    name: 'Books & Stationery',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 134,
    href: '/category/books-stationery'
  }
];

const Categories = () => {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="sm:text-3xl text-xl font-bold text-gray-900 mb-8">Shop by Category</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.href}
            className="group"
          >
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">{category.itemCount} items</span>
                    <span className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Shop Now</span>
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;