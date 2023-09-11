import React from 'react';
import './Header.css'


const Header = () => {


  return (
    <div className="bg-white text-black">
      <header className="header-section py-16 text-center h-96">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">Explore and discover amazing things!</p>
      </header>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
          {/* Add featured content here */}
        </div>
      </section>

      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
          {/* Add latest news articles or updates here */}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg">
            Ready to get started? Learn more about our services and offerings.
          </p>
          <a
            href="/about"
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full inline-block hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
    



    );
};

export default Header;