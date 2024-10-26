"use client";

import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-start justify-center">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Primary 404 */}
        <h1 className="text-6xl md:text-8xl font-bold">404</h1>

        {/* Subtitle */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
            We Have a Problem!
          </h2>
          <p className="text-gray-400 text-lg">
            Looks like you&apos;ve drifted into unknown space. This page is lost
            in the void.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg 
              hover:bg-blue-700 transition-colors duration-200"
          >
            <Home size={20} />
            Return to Earth
          </a>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-gray-200 rounded-lg 
              hover:bg-gray-600 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Previous Station
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
