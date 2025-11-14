import React from 'react'

function Statistics() {
  return (
    <section className="relative -mt-20 mb-16 z-10 px-4">
      <div className="container mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl shadow-2xl transfor hover:scale-105 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center justify-items-center py-12 px-6 md:px-12">
          <div className="statistic-item">
            <h3 className="text-5xl font-black text-pink-500 mb-2">500+</h3>
            <p className="text-lg font-medium text-white opacity-90">Happy Clients</p>
          </div>
          <div className="statistic-item">
         < h3 className="text-4xl font-black text-pink-500 mb-2">15+</h3>
            <p className="text-lg font-medium text-white opacity-90">Awards won</p>
          </div>
          <div className="statistic-item">
            <h3 className="text-5xl font-black text-pink-500 mb-2">1200+</h3>
            <p className="text-lg font-medium text-white opacity-90">Nail Designs</p>
          </div>
          <div className="statistic-item">
            <h3 className="text-5xl font-black text-pink-500 mb-2">10+</h3>
            <p className="text-lg font-medium text-white opacity-90">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Statistics;