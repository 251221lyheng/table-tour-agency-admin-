"use client";
import * as React from "react";
import NavbarComponent from "@/components/auths/NavbarComponent";
import TourPackageCardComponent from "@/components/cards/TourPackageCardComponent";
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
            <TourGestCardComonent/>
            <TourGestCardComonent/>
            <TourGestCardComonent/>
            <TourGestCardComonent/>
          </div>

          <h1>TripPlanCardComonent</h1>

          <div className="bg-red-300">
            {/* cards TripPlanCardComonent*/}

            <TripPlanCardComonent/>
            <TripPlanCardComonent/>
            <TripPlanCardComonent/>
          </div>
          <h1>TourCompleteCardComponent</h1>

          <div className="bg-red-300">
            {/* cards TourCompleteCardComponent*/}

            <TourCompleteCardComponent/>
            <TourCompleteCardComponent/>
            <TourCompleteCardComponent/>

          </div>
          <h1>ThingToDoCardComponent</h1>
          <div className="bg-red-300">
            {/* cards ThingToDoCardComponent*/}

           <ThingToDoCardComponent/>
           <ThingToDoCardComponent/>

           <ThingToDoCardComponent/>

          </div>
          <h1>ReviewCardComponent</h1>

          <div className="bg-red-300 flex gap-10 p-10">
            {/* cards ReviewCardComponent*/}

            <ReviewCardComponent/>
            <ReviewCardNoComponent/>

          </div>
          {/* <div>
            <ProfileTravelerComponent/>
          </div> */}
        </div>
      </div>
    </main>
  );
}
