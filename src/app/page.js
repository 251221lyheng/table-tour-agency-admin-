"use client";
import NavbarComponent from "@/components/auths/NavbarComponent";
import HomepageComponent from "@/components/auths/HomepageComponent";
import { TourGestCardComonent } from "@/components/cards/TourGestCardComponent";
export default function Home() {
  return (
    <main>
      <HomepageComponent/>


      <NavbarComponent/>
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

            {/* cards */}
            <TourGestCardComonent/>
            <TourGestCardComonent/>
            <TourGestCardComonent/>
            <TourGestCardComonent/>
          </div>
 
    </main>
  );
}
