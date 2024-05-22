import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { HiDotsHorizontal, HiOutlineLocationMarker } from 'react-icons/hi'
export default function ThingToDoCardComponent() {
    return (
        <div className="mt-10">
            <div className="h-48 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="relative ">
                        <div className="rounded-md  h-48 p-3">
                            <img
                                className="h-full w-full object-cover rounded-md"
                                src="https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/IMG20181201152118-o0apmvil880d4g2nllqb6gpavdkeiann285s9ynngo.jpg"
                                alt=""
                            />

                        </div>

                    </div>
                    <div className="p-5 w-full">
                        <div className="flex max-w-md justify-between items-center ">
                            <div className="flex items-center gap-2 tracking-wide text-sm font-semibold">
                                <h1 className="font-bold text-lg text-black">
                                    Company retreats
                                </h1>

                            </div>

                        </div>

                        <div className="flex items-center gap-2">
                            <HiOutlineLocationMarker />
                            <p>Angkor, Siem Reap</p>
                        </div>
                        <p className="line-clamp-2 text-sm mt-5 text-gray">
                            We had a personal tour of Angkor Wat with Kamsan and it was fabulous. He and his excellent driver picked us up from our hotel at 4.45am, so that we were in the perfect place to watch the sunrise ...
                        </p>
                        <div className="flex gap-2 items-center mt-5">
                            <div className="flex gap-2 text-yellow-500 ">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p>
                                    102
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
