import React from "react";

const TrendingComponents = () => {
  return (
    <div>
      <section className="bg-cover bg-center bg-green-100 py-20">
        <h3 className="text-3xl font-bold mt-3">
        Trending History Places 
        </h3>
        <p className="">
        Discover top coastal spots with Sea Area, from the tropical beaches of the Maldives to the scenic shores of the Mediterranean. Find your perfect seaside getaway today.
        </p>
        {/* Pic 1 */}
        <div className="flex gap-3 mt-6">
          <div className=" relative w-[40%]">
            <img
              className="rounded-3xl h-[362px]"
              src="https://lh3.googleusercontent.com/p/AF1QipOkhrI1Cm6qXOR5hwfIKyXyJ_1Mnfmbwdz3oFwh=s1360-w1360-h1020"
              alt=""
            />
            <div className=" absolute bottom-3 left-5 text-white font-bold">
              <h1>lorem</h1>
            </div>
          </div>
          {/* Pic 2 */}
          <div className=" grid gap-3 w-[60%]">
            <div className=" relative h-[150px] object-cover">
              <img
                className="rounded-3xl w-[100%] h-[100%] object-cover"
                src="https://cdn.britannica.com/49/94449-050-ECB0E7C2/Angkor-Wat-temple-complex-Camb.jpg"
                alt=""
              />
              <div className=" absolute bottom-3 left-5 text-white font-bold">
                <h1>lorem</h1>
              </div>
            </div>
            {/* Pic 3 */}
            <div className=" grid grid-cols-2 gap-3">
              <div className=" relative">
                <img
                  className="rounded-3xl h-[200px] w-[100%] object-cover"
                  src="https://cdn.expeditions.com/globalassets/expedition-stories/cambodia-up-close-7-must-see-sites-at-angkor-wat/angkor-wat-main.jpg"
                  alt=""
                />
                <div className=" absolute bottom-3 left-5 text-white font-bold">
                  <h1>lorem</h1>
                </div>
              </div>
              {/* Pic 4 */}
              <div className=" relative">
                <img
                  className="rounded-3xl h-[200px] w-[100%] object-cover"
                  src="https://static.toiimg.com/img/105416313/Master.jpg"
                  alt=""
                />
                <div className=" absolute bottom-3 left-5 text-white font-bold">
                  <h1>lorem</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingComponents;
