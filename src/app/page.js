"use client";
import * as React from "react";
import NavbarComponent from "@/components/auths/NavbarComponent";
import TourPackageCardComponent from "@/components/cards/TourPackageCardComponent";

export default function Home() {
  return (
    <main>
      <NavbarComponent />
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
            <TourPackageCardComponent />
            <TourPackageCardComponent />
            <TourPackageCardComponent />
            <TourPackageCardComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
