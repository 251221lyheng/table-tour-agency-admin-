import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { MdOutlineDateRange } from 'react-icons/md'

export default function ReviewCardNoComponent() {
    return (
        <div>
            <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-12 ">
                <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div className="border-b px-4 pb-6">
                        <div className="text-center flex items-center">
                            <div className="">
                                <img className="h-20 w-20 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                    src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                            </div>
                            <div className="p-3 items-center">
                                <h3 className="font-bold text-lg text-black mb-1">Cait Genevieve</h3>

                                <div className="flex items-center gap-2">
                                    <MdOutlineDateRange />
                                    <p className="text-blue-950">2  April 2024</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-blue-950">Sofinny Restaurant and Bar</h1>
                        </div>
                        <div className="flex gap-2 items-center mt-5">
                            <div className="flex gap-2 text-yellow-500 ">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className="line-clamp-2 text-sm mt-5 text-gray">
                            We had a personal tour of Angkor Wat with Kamsan and it was fabulous. He and his excellent driver picked us up from our hotel at 4.45am, so that we were in the perfect place to watch the sunrise ...
                        </p>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}
