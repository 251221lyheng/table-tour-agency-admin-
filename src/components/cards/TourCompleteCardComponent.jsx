import React from 'react'
import { HiDotsHorizontal, HiOutlineLocationMarker } from 'react-icons/hi'
import { IoEarth, IoTimeOutline } from 'react-icons/io5'
import { MdOutlineDateRange } from 'react-icons/md'

export default function TourCompleteCardComponent() {
    return (
        <div className="mt-10">
            <div className="h-48 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="rounded-md  h-48 p-3">
                        <img
                            className="h-full w-full object-cover rounded-md"
                            src="https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/IMG20181201152118-o0apmvil880d4g2nllqb6gpavdkeiann285s9ynngo.jpg"
                            alt=""
                        />

                    </div>

                    <div className="p-5 w-full">
                        <div className="flex max-w-md justify-between items-center ">
                            <div className="flex items-center gap-2 tracking-wide text-sm font-semibold">
                                <h1 className="font-bold text-lg text-black ">
                                    Company retreats
                                </h1>

                            </div>
                            <div>
                                <button className="bg-green-900 w-auto rounded-xl flex justify-between px-2 text-cyan-50 text-sm items-center ">
                                <p className="m-1">Traveling</p>
                                </button>
                            </div>
                        </div>

                       
                        <div className="flex items-center gap-2">
                            <MdOutlineDateRange />
                            <p className="text-sm text-gray">2  April 2024</p>
                        </div>
                    
                        <p className="line-clamp-2 text-sm text-gray">
                            We had a personal tour of Angkor Wat with Kamsan and it was fabulous. He and his excellent driver picked us up from our hotel at 4.45am, so that we were in the perfect place to watch the sunrise ...
                        </p>
                        <div className="flex justify-between mt-10">
                           <div className="flex items-center gap-2">
                                <HiOutlineLocationMarker />
                                <p className="text-sm ">Kompot, Cambodia</p>
                           </div>
                           <div>
                                <p>
                                    $120
                                </p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
