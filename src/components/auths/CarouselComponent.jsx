import React from 'react'
import { Button } from "@nextui-org/button";

export default function CarouselComponent() {
  return (
    <>
   
<div className="carousel w-full rounded-md h-[529px] relative ">
        <form action="/search" className='absolute z-50 w-full h-[529px] py-[170px] '>
                    <h1 className='text-white text-4xl text-center mt-5 font-poppin'>Finding your dream trip <br></br>with Mountain </h1>
                    <label
                        class="mx-auto mt-8 rounded-full  bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2  gap-2 shadow-2xl focus-within:border-gray-300"
                        for="search-bar">

                        <input id="search-bar" placeholder="your keyword here" name="q"
                            class="px-6 py-2 w-full  flex-1 outline-none bg-white" required=""/>
                        <div className='flex'>
                            <div className='bg-black border-gray w-10 h-10 rounded-full'>

                            </div>

                            <Button className="ml-3 bg-main text-white rounded-full">
                                Send
                            </Button>
                        </div>
                        
                    </label>
        </form>
  <div id="slide1" className="carousel-item relative w-full h-full">
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

