import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HotSection = () => {
  const [counter, setCounter] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0)); // Countdown logic
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Format the countdown timer
  const formatTime = (time:any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="py-10 mb-20 max-w-7xl mx-auto px-4"
      style={{
        background: 'linear-gradient(to bottom right, #7b3f00, #ddb892)', // Chocolate-themed gradient
        color: '#fdf1e9',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Hot Deals
      </h1>
      <p className="mb-6 text-sm md:text-base text-center">
        Grab your favorite chocolates now! Deals expire in:
      </p>

      {/* Countdown Timer */}
      <div className="text-center mb-10">
        <div
          className="inline-block font-bold text-2xl md:text-3xl px-6 py-2 rounded-lg shadow-lg"
          style={{
            background: '#7b3f00', // A subtle pink for contrast
            color: 'white',
          }}
        >
          {formatTime(counter)}
        </div>
      </div>

      {/* Hot Deal Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Chocolate Image */}
        <div className="flex justify-center">
          <img
            width={300}
            className="rounded-lg transform transition duration-500 hover:scale-105"
            src="https://res.cloudinary.com/do7nin6oo/image/upload/v1733647709/Pngtree_chocolate_splash_15416044_rblbm5.png"
            alt="Chocolate Splash"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Exclusive Offer Just for You!
          </h2>
          <p className="text-sm md:text-base mb-6">
            Enjoy the rich taste of our premium chocolates at unbeatable prices. Indulge yourself or surprise someone special with our irresistible deals.
          </p>
          <Link to={'/product'}>
          <button
            className="font-medium text-sm md:text-base px-6 py-2 rounded-lg shadow-md transition"
            style={{
              background: '#7b3f00',
              color: '#fdf1e9',
            }}
            onMouseEnter={(e:any) => (e.target.style.background = '#6b3600')}
            onMouseLeave={(e:any) => (e.target.style.background = '#7b3f00')}
          >
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotSection;
