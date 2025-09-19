import React, { useState, useEffect } from "react";
import { heroSlides } from "../constants";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative h-screen flex justify-center lg:justify-start px-5 text-white overflow-hidden"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0 bg-[#dc2626]/20"></div>
        </div>
      ))}







      <div className="relative z-10 flex flex-col items-baseline mt-24 w-[600px]">
        <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold">
          {heroSlides[current].title}{" "}
          <br />
          <span className="text-[#dc2626]">{heroSlides[current].subtitle}</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          {heroSlides[current].description}
        </p>

        <div className="flex flex-col sm:flex-row lg:flex-row gap-4 sm:justify-start justify-center mt-6 w-full">
          <NavLink to={heroSlides[current].primaryHref} className='bg-[#dc2626] text-white rounded-md py-3 px-4 transition-all duration-300 transform hover:scale-105 hover:bg-[#b82222]'>
            {heroSlides[current].primaryBtn}
          </NavLink>
          <NavLink to={heroSlides[current].secondaryHref} className='text-white border-2 rounded-md py-3 px-4 transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black hover:border-white'>
            {heroSlides[current].secondaryBtn}
          </NavLink>
        </div>

        <div className="bg-black/50 p-4 rounded-lg z-10 mt-6 w-full">
          <h2 className="font-bold mb-2">Track your Shipment</h2>
          <div className="flex sm:flex-row flex-col lg:flex-row gap-4">
            <input type="text" placeholder="Enter tracking number" className="bg-white text-black px-4 py-2 font-light rounded-md sm:w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" />

            <button className="bg-[#dc2626] font-medium py-2 px-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-[#b82222] sm:w-full">Track Package</button>
          </div>
        </div>

        <div className="flex mx-auto space-x-2 z-10 mt-8">
          {heroSlides.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full transition-colors duration-500 cursor-pointer ${
              index === current ? "bg-red-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
            ></div>
          ))}
          
        </div>
      </div>

    


    </section>
  )
}

export default HeroSection