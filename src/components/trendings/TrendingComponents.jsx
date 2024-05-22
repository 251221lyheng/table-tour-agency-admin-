import React from "react";

const TrendingComponents = () => {
  return (
    <div>
      <section className="bg-cover bg-center bg-green-100 py-20">
        <h3 className="text-4xl font-bold mb-5">
          The Travel that good Experiences
        </h3>
        <p className="">
          Our customers' feedback is essential in building a great reputation
          and maintaining
        </p>
        {/* Pic 1 */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className=" relative">
            <img
              className="rounded-md h-[362px]"
              src="https://lh3.googleusercontent.com/p/AF1QipOkhrI1Cm6qXOR5hwfIKyXyJ_1Mnfmbwdz3oFwh=s1360-w1360-h1020"
              alt=""
            />
            <div className=" absolute bottom-3 left-5 text-slate-300 font-bold">
              <h1>lorem</h1>
            </div>
          </div>
          {/* Pic 2 */}
          <div className=" grid gap-3">
            <div className=" relative h-[150px]">
              <img
                className="rounded-md w-[100%] h-[100%] object-cover"
                src="https://cdn.britannica.com/49/94449-050-ECB0E7C2/Angkor-Wat-temple-complex-Camb.jpg"
                alt=""
              />
              <div className=" absolute bottom-3 left-5 text-slate-300 font-bold">
                <h1>lorem</h1>
              </div>
            </div>
            {/* Pic 3 */}
            <div className=" grid grid-cols-2 gap-3">
              <div className=" relative">
                <img
                  className="rounded-md h-[200px] object-cover"
                  src="https://lh3.googleusercontent.com/p/AF1QipOkhrI1Cm6qXOR5hwfIKyXyJ_1Mnfmbwdz3oFwh=s1360-w1360-h1020"
                  alt=""
                />
                <div className=" absolute bottom-3 left-5 text-slate-300 font-bold">
                  <h1>lorem</h1>
                </div>
              </div>
              {/* Pic 4 */}
              <div className=" relative">
                <img
                  className="rounded-md h-[200px] object-cover"
                  src="https://lh3.googleusercontent.com/p/AF1QipOkhrI1Cm6qXOR5hwfIKyXyJ_1Mnfmbwdz3oFwh=s1360-w1360-h1020"
                  alt=""
                />
                <div className=" absolute bottom-3 left-5 text-slate-300 font-bold">
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
