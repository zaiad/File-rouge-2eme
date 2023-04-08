import React from "react";
import { Images } from "../../../accessoires/immgComponent/Images";
import hero_iphone14pro from "../../../assets/images/hero_iphone14pro.jpg";
import hero_iphone14pro_2 from "../../../assets/images/hero_iphone14pro_2.jpg";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-white maw-h-[500px] flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl lg:text-7xl font-bold ">
            The <span className="text-gray-400">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl lg:text-7xl font-bold ">
            <span className="text-gray-400">Iphones </span>
            <span> Here</span>
          </h1>
        </div>
        <Images
      className="w-full h-auto max-h-[500px] object-cover hidden md:block"
      src={hero_iphone14pro}
      alt='/'
    />
    <Images
      className="w-full h-auto max-h-[500px] object-cover block md:hidden "
      src={hero_iphone14pro_2}
      alt='/'
    />
      </div>
    </div>
  );
}

export default Hero;
