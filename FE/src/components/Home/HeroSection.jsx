import React from 'react';
import { FileMusic, KeyRoundIcon, MoveDiagonal, Music, Pyramid, RefreshCcwDotIcon, SuperscriptIcon, TractorIcon, Truck, TruckElectric, TruckIcon, UserRoundCheckIcon, UserRoundPlusIcon } from 'lucide-react';
import FloatingGrid from "./../FloatingGrid";



const HeroSection = () => {
  return (
    <section className="h-screen">
      <div className="h-[80%] flex gap-2 justify-center bg-gradient-to-br from-[#fefefe]  to-[#fff5f5]">
        <div className="w-[600px]  flex justify-center flex-col px-20 gap-3">
          <div>
            <h2 className="text-6xl font-bold">Find your next <span className="text-blue-500">favorite</span> book.</h2>
          </div>
          <div>
            <p className="text-gray-600 ">Curated bestsellers, new releases, and timeless classics delivered to your doorstep.</p>
          </div>
          <div className="flex gap-2" >
            <button className="bg-yellow-500 px-5 py-3 rounded-[17px] text-white font-semibold">Shop Bestsellers</button>
            <button className="bg-transperent px-5 py-3 rounded-[17px]  text-blue-500 border-2 border-blue-400 hover:bg-blue-200">Browse Categories</button>
          </div>
          <div className="flex gap-2">
            <p className="flex gap-1 items-center"><span className="text-green-500"><TruckIcon size={18} /></span>Free shipping over ₹999</p>
            <p className="flex gap-1 items-center"><span className="text-green-500"><RefreshCcwDotIcon size={17} /></span> Easy 7-day returns</p>
          </div>
        </div>
        <div className="w-[600px] h-full  relative ">
          <FloatingGrid />
        </div>
      </div>
      <div className="h-[30%] flex gap-6 p-6  items-center justify-center">
        <div className="w-[260px] h-[150px] bg-gradient-to-br from-[#fefefe]  to-[#ffeaea] rounded-2xl flex flex-col justify-center items-center gap-2 py-1" >
          <p> <span className="text-green-500 text-center"><TruckIcon size={25} /></span></p>
          <h2 className="font-semibold text-xl">Free Shipping</h2>
          <p className="font-normal text-lg">On orders over ₹900</p>
        </div>
        <div className="w-[260px] h-[150px] bg-gradient-to-br from-[#fefefe]  to-[#ffeaea] rounded-2xl flex flex-col justify-center items-center gap-2  py-1" >
          <p> <span className="text-green-500 text-center"><RefreshCcwDotIcon size={25} /></span></p>
          <h2 className="font-semibold text-xl">Easy Returns</h2>
          <p className="font-normal text-lg">7-day hassle-free returns</p>
        </div>
        <div className="w-[260px] h-[150px] bg-gradient-to-br from-[#fefefe]  to-[#ffeaea] rounded-2xl flex flex-col justify-center items-center gap-2  py-1" >
          <p> <span className="text-green-500 text-center"><Pyramid size={25} /></span></p>
          <h2 className="font-semibold text-xl">Secure Payments</h2>
          <p className="font-normal text-lg">SSL encrypted transactions</p>
        </div>
        <div className="w-[260px] h-[150px] bg-gradient-to-br from-[#fefefe]  to-[#ffeaea] rounded-2xl flex flex-col justify-center items-center gap-2  py-1" >
          <p> <span className="text-green-500 text-center"><UserRoundCheckIcon size={25} /></span></p>
          <h2 className="font-semibold text-xl">24/7 Support</h2>
          <p className="font-normal text-lg">Round-the-clock assistant</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
