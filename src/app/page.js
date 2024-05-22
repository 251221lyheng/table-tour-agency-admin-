"use client";
import * as React from "react";
import NavbarComponent from "@/components/auths/NavbarComponent";
import TourPackageCardComponent from "@/components/cards/TourPackageCardComponent";
import FooterComponent from "@/components/auths/FooterComponent";
import CarouselComponent from "@/components/auths/CarouselComponent";
import HomepageComponent from "@/components/auths/HomepageComponent";


import { TourGestCardComonent } from "@/components/cards/TourGestCardComponent";
import TripPlanCardComonent from "@/components/cards/TripPlanCardComponent";
import TourCompleteCardComponent from "@/components/cards/TourCompleteCardComponent";
import ThingToDoCardComponent from "@/components/cards/ThingToDoCardComponent";
import ReviewCardComponent from "@/components/cards/ReviewCardComponent";
import ReviewCardNoComponent from "@/components/cards/ReviewCardNoComponent";
import ProfileTravelerComponent from "@/components/cards/ProfileTravelerComponent";


export default function Home() {
  return (
    <main>
        {/* Test homepage */}
      <HomepageComponent/>



      <NavbarComponent />
      <div className="max-w-screen-xl m-auto ">
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
           

          </div>
        </div>
      </div>
    

    </main>
  );
}
