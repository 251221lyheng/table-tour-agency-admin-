import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
export const TourGestCardComonent = () => {
  return (
    <div>
       <div className="grid gap-4 p-2 bg-white rounded-sm shadow-md">
        <div className=" relative">
          <img
            className="rounded-sm h-40"
            src="https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/IMG20181201152118-o0apmvil880d4g2nllqb6gpavdkeiann285s9ynngo.jpg"
            alt=""
           
          />
            <div className="absolute top-2 right-2">
                <div className="bg-green-900 w-auto rounded-xl flex justify-between px-2 text-cyan-50 text-sm items-center">
                    <IoTimeOutline/>
                    <p className="m-1">10 days</p>
                </div>
            </div>
            
        </div>
        <div className="flex justify-between">
            <h3 className="underline font-bold text-lg text-black ">Title</h3>
            <FaRegHeart className="mr-2" />
        </div>
        <p className="line-clamp-2 text-sm text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          rerum assumenda id expedita culpa modi? Quae commodi placeat dolores
          in nobis totam aperiam ab quia accusamus. Adipisci nam laudantium
          alias.
        </p>
        <div className="h-[1px] bg-secondary"></div>
        <div className="flex justify-between text-blue-950 text-sm">
            <h3 className="">for 30 persons</h3>
            <h3>Total 19$</h3>
        </div>
        <div className="flex items-center gap-2 text-green-700 ">
            <MdOutlineDateRange />
          <p className="text-sm">Angkor, Siem Reap</p>
        </div>
      </div>
    </div>
  )
}
