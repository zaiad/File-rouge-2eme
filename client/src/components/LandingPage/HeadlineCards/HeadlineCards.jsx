import React from "react";
import { Button } from "../../../accessoires/Buttons/Button";
import { Images } from "../../../accessoires/immgComponent/Images";
import watch from '../../../assets/images/watch2.jpg'
import Mac_pro from '../../../assets/images/Mac_pro.jpg'
import Ipad from '../../../assets/images/Ipad.jpg'

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Smart Watch</p>
          <p className="px-2 font-semibold text-xl text-red-600">Series 8</p>
          <Button className="bg-white rounded-lg text-black right-2 absolute bottom-4 p-2" text='Order Now' />
        </div>
        <Images className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={watch} alt='/' />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">MacBook Pro</p>
          <p className="px-2 font-semibold text-xl text-red-600">Supercharged by M2 Max</p>
          <Button className="bg-white rounded-lg text-black right-2 absolute bottom-4 p-2" text='Order Now' />
        </div>
        <Images className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Mac_pro} alt='/' />
      </div>
      <div className="rounded-xl relative whitespace-pre-wrap">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">IPad</p>
          <p className="px-2 font-semibold text-xl text-red-600">Drawable.Magecal</p>
          <Button className="bg-white rounded-lg text-black right-2 absolute bottom-4 p-2" text='Order Now' />
        </div>
        <Images className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Ipad} alt='/' />
      </div>
    </div>
  );
}

export default HeadlineCards;
