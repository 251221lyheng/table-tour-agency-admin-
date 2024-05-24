import React from 'react'
import NavbarComponent from './NavbarComponent'
import Image from "next/image";
import iland from "../../../public/assets/island 1.png";
import history from "../../../public/assets/history.png";
import mountain from "../../../public/assets/mountain.png";
import contryside from "../../../public/assets/contry-side.png";
import CarouselComponent from './CarouselComponent'
import TourPackageCardComponent from '../cards/TourPackageCardComponent'
import { TourGestCardComonent } from '../cards/TourGestCardComponent'
import TrendingComponents from '../trendings/TrendingComponents';
import ThingToDoCardComponent from '../cards/ThingToDoCardComponent';
import FooterComponent from './FooterComponent';

export default function HomepageComponent() {
  return (
    <>
        <NavbarComponent/>
        <div className="max-w-screen-xl m-auto ">
            <CarouselComponent/>
        <div className="w-[85%] m-auto">
          <div className="grid m-auto gap-5">
            <div className='mt-[30px] mb-[30px]'>

                {/* Our tours */}
                <h1 className='text-center text-2xl font-bold text-main  mt-[40px] '>Our Tours</h1>
                <div className='flex justify-center gap-10 mt-5 '>
                    <div className='w-[150px] h-[130px]  rounded-md border-2 border-blue-200 '>
                    <Image src={iland} className="w-[50px] m-auto mt-5 " alt="" />
                        <p className='text-main font-bold text-center'>Sea</p>
                    </div>
                    <div className='w-[150px] h-[130px]  rounded-md border-2 border-blue-200 '>
                    <Image src={history} className="w-[50px] m-auto mt-5 " alt="" />
                        <p className='text-main font-bold text-center'>Sea</p>
                    </div>
                    <div className='w-[150px] h-[130px]  rounded-md border-2 border-blue-200 '>
                    <Image src={mountain} className="w-[50px] m-auto mt-5 " alt="" />
                        <p className='text-main font-bold text-center'>Sea</p>
                    </div>
                    <div className='w-[150px] h-[130px]  rounded-md border-2 border-blue-200 '>
                    <Image src={contryside} className="w-[50px] m-auto mt-5 " alt="" />
                        <p className='text-main font-bold text-center'>Sea</p>
                    </div>
                </div>
                
            </div>
            
            <h1 className='text-2xl text-main font-bold'>Top Destinations</h1>
            
          </div>
          <TrendingComponents/>
          <h1 className='text-2xl text-main font-bold mt-16'>Tour packages</h1>
          <div className="mt-5 m-auto grid grid-cols-4 gap-6">
           
                 {/* cards */}
            <TourPackageCardComponent/>
            <TourPackageCardComponent />
            <TourPackageCardComponent />
            <TourPackageCardComponent />
          </div>
          <h1 className='text-2xl text-main font-bold mt-16'>Tour packages</h1>
          <div className="mt-5 m-auto grid grid-cols-4 gap-6">
           
                 {/* cards */}
            <TourGestCardComonent/>
            <TourGestCardComonent/>
            <TourGestCardComonent/>
            <TourGestCardComonent/>
          </div>
        </div>
      </div>

    <div className=' bg-green mt-10 py-5'>
        <div className=' w-[73%] m-auto py-8 '>
        <h1 className='text-2xl text-main font-bold '>Popular Destination in Seim Reap</h1>
          <TrendingComponents/>
        </div>
    </div>
    <FooterComponent/>
    </>
  )
}
