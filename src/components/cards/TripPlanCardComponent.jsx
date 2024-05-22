import React from 'react'
import { HiDotsHorizontal, HiOutlineLocationMarker } from "react-icons/hi";
import { IoEarth, IoTimeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from 'react-icons/md';
export default function TripPlanCardComonent() {
    return (
        <div className="mt-10">
            <div className="h-48 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="relative">
                        <img
                            className="h-48 w-full object-cover "
                            src="https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/IMG20181201152118-o0apmvil880d4g2nllqb6gpavdkeiann285s9ynngo.jpg"
                            alt=""
                        />
                        <div className="absolute bottom-2 left-2">
                            <div className="bg-green-900 w-auto rounded-xl flex justify-between px-2 text-cyan-50 text-sm items-center">
                                <IoTimeOutline />
                                <p className="m-1">10 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 w-full">
                        <div className="flex max-w-md justify-between items-center ">
                            <div className="flex items-center gap-2 tracking-wide text-sm font-semibold">
                                <h1 className="font-bold text-lg text-black ">
                                    Company retreats
                                </h1>
                                <IoEarth />
                            </div>
                            <div>
                                <HiDotsHorizontal />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <HiOutlineLocationMarker />
                            <p className="text-sm text-gray">Angkor, Siem Reap</p>
                        </div>
                        <div className="flex items-center gap-2 text-green-700">
                            <MdOutlineDateRange />
                            <p className="text-sm ">May 05, 2024 / May 10, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
