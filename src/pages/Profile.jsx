import React, { useState } from 'react';
import { User, Package, Heart, CreditCard, Settings, LogOut, Camera, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { name: 'Personal Info', icon: User },
  { name: 'Orders', icon: Package }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Personal Info');
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const handleDrop = (event) => {
    event.preventDefault(); // Prevents browser from opening the file
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allows dropping
  };

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    orders: [
      {
        id: 'ORD-123456',
        date: '2024-03-15',
        total: 299.97,
        status: 'Delivered',
        items: 3
      },
      {
        id: '#ORD-123457',
        date: '2024-03-10',
        total: 149.99,
        status: 'Processing',
        items: 1
      }
    ]
  };

  return (
    <div className="max-w-7xl min-h-[90vh] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col mb-6">
              <div className="relative group mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-16 w-16 rounded-full"
                />
                <button
                  onClick={() => setShowPhotoModal(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <Camera className="h-6 w-6 text-white" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                      activeTab === tab.name
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {activeTab === 'Personal Info' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
                
                {/* Profile Photo Section */}
                <div className="mb-8 p-6 border border-gray-200 rounded-lg">
                  <h4 className="text-lg font-medium mb-4">Profile Photo</h4>
                  <div className="flex items-start space-x-6">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-24 w-24 rounded-full"
                    />
                    <div>
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => setShowPhotoModal(true)}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <Upload className="h-5 w-5 mr-2" />
                          Change Photo
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50">
                          Remove
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        JPG, GIF or PNG. Max size of 2MB.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={user.phone}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-6">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={user.address.street}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={user.address.city}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      value={user.address.state}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      value={user.address.zip}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={user.address.country}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'Orders' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Order History</h3>
                <div className="space-y-4">
                  {user.orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-gray-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{order.id}</span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                        <p>Items: {order.items}</p>
                        <p>Total: ${order.total.toFixed(2)}</p>
                      </div>
                      <Link
                        to={`/order/${order.id}`}
                        className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                      >
                        View Details
                        <Package className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Photo Upload Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-xl font-semibold mb-4">Update Profile Photo</h3>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center relative">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              id="photo-upload"
              onChange={handleImageChange}
            />
            <label
              htmlFor="photo-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
              ) : (
                <>
                  <Upload className="h-12 w-12 text-gray-400 mb-3" />
                  <span className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    JPG, GIF or PNG. Max size of 2MB
                  </span>
                </>
              )}
            </label>
          </div>
          <div className="flex justify-end mt-6 space-x-3">
            <button
              onClick={() => setShowPhotoModal(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
              Upload Photo
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Profile;