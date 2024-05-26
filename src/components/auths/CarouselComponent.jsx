import React from 'react'
import { Button } from "@nextui-org/button";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";

export default function CarouselComponent() {
  return (
    <>
   
<div className="carousel w-full rounded-md h-[529px] relative    ">
        <form action="/search" className='absolute z-50 w-full h-[529px] py-[170px] '>
                    <h1 className='text-white text-4xl text-center mt-5 font-Poppins'>Finding your dream trip <br></br>with Mountain </h1>
                    <div class="mx-auto mt-8 rounded-full  bg-white min-w-sm max-w-lg flex flex-col md:flex-row justify-evenly border py-2 px-2  gap-2 shadow-2xl focus-within:border-gray-300">
                    <div className='flex   justify-between'>
                          <div className='flex mr-[100px] '>
                            <div className='bg-white border border-gray  w-10 h-10  rounded-full'>
                            <CiSearch className="ml-2 mt-2 text-2xl" />
                            </div>
                            <div className='ml-3'>
                              <h4 className='text-main text-sm font-Poppins font-bold'>Where</h4>
                              <p className='text-gray text-xs'>Provinces</p>
                            </div>
                          </div>

                          <div className='flex'>
                            <div className='bg-white border border-gray  w-10 h-10  rounded-full'>
                            <AiOutlineBars className="ml-2 mt-2 text-2xl" />
                            </div>
                            <div className='ml-3'>
                              <h4 className='text-main text-sm font-Poppins font-bold'>Where</h4>
                              <p className='text-gray text-xs'>Provinces</p>
                            </div>
                          </div>
                          
                            <Button className=" bg-main text-white rounded-full ml-[90px]">
                                Send
                            </Button>
                        </div>
                    </div>
        </form>
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    </>

  )
}

