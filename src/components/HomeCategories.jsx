import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom";
const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80',
    },
    {
      id: 3,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 4,
      name: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 5,
      name: 'Beauty & Health',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 6,
      name: 'Sports & Outdoors',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
  ];
function HomeCategories() {
  const navigate = useNavigate()
    return (
        <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="sm:text-3xl text-xl font-bold text-gray-900">Shop by Category</h2>
          {/* <button onClick={()=>navigate("/categories")} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300">
            <span  className="font-semibold">See All Categories</span>
            <ArrowRight className="h-5 w-5" />
          </button> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative group cursor-pointer">
              <div className="relative h-80 overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <button className="text-white flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
           <button onClick={()=>navigate("/categories")} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300">
            <span  className="font-semibold">See All Categories</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
    )
}

export default HomeCategories
