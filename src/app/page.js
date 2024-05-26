"use client";
import NavbarComponent from "@/components/NavbarComponent";
import { TourGestCardComonent } from "@/components/cards/TourGestCardComponent";
import TrendingComponents from "@/components/trendings/TrendingComponents";
import * as React from "react";
export default function Home() {
  return (
    <main>
      <div className="max-w-screen-xl m-auto ">
        <div>Corual</div>
        <div className="w-[85%] m-auto">
          <div className="grid m-auto gap-5">
            {/* Title */}
            <div>Title</div>
            <div className="line-clamp-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              accusamus beatae laborum!
            </div>
          </div>

          <div className="mt-5 m-auto grid grid-cols-4 gap-6">
            {/* cards */}
            <TourGestCardComonent />
            <TourGestCardComonent />
            <TourGestCardComonent />
            <TourGestCardComonent />
          </div>
        </div>
      </div>
    </main>
  );
}

// import NavbarComponent from '@/components/NavbarComponent'
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <NavbarComponent/>
//     </div>
//   )
// }
