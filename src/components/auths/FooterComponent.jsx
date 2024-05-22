import React from "react";

import Image from "next/image";
import jalatlogo from "../../../public/assets/jalat-logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

import { Button } from "@nextui-org/button";
import NavbarComponent from "./NavbarComponent";

export default function FooterComponent() {
  return (
    <>
      <div class=" bg-yellow mt-5 ">
        <div class=" sm:px-1 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 w-[75%] m-auto">
          <div class="p-5">
            <a
              href="/"
              aria-label="Jalat"
              title="jalat logo"
              class="inline-flex items-center"
            >
              <Image src={jalatlogo} className="w-[100px]" alt="" />
            </a>
            <p class=" text-sm font-normal mt-5  text-gray ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div class="py-5 lg:mt-8">
            <div class="text-md uppercase text-main font-bold">
              Location
            </div>
            <div className=" text-gray mt-5">
              <div className="flex  ">
              <MdOutlineEmail className="mt-1/2 text-2xl text-main" />
                <p className="ml-3 ">Ourstudio@hello.com</p>
              </div>
              <div className="flex mt-2 ">
              <MdOutlineLocalPhone className="mt-1/2 text-2xl text-main"/>
                <p className="ml-3 ">+1 386-688-3295</p>
              </div>
              

              <img
                className="rounded-sm mt-5"
                src="https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png"
                alt=""
              />
            </div>
          </div>
          <div class="p-5 lg:mt-8 lg: ml-10">
            <div class="text-md uppercase  text-main font-bold">
              Explore
            </div>
            <a class="my-3 block  text-gray" href="/#">
              Sea <span class=" text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray" href="/#">
              History <span class=" text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray" href="/#">
              Mountain <span class="  text-xs p-1"></span>
              <a class="my-3 block text-gray" href="/#">
                Contry side <span class="  text-xs p-1"></span>
              </a>
            </a>
          </div>
          <div class="p-5 lg:mt-8">
            <div class="   text-main text-md font-bold">Do Business With Us</div>
            <p className="mt-2 text-sm text-gray ">
              you can be a tour agency with us by contact to admin or sent your
              email we will contact back to you. Thanks you!
            </p>
            <div className="mt-4">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray dark:text-white"
              >
                Your email
              </label>
              <div className="flex   ">
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                  placeholder="Email"
                  required
                />
                <Button className="ml-3 bg-main text-white">
                            Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 pt-2">
        <hr className="bg-gray h-1/2" />
        <div
          class="flex pb-5 mt-5  m-auto text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <p class=" font-normal text-gray text-sm">
            Copyright © 2024
            <span className="text-gray-200">
              By <span className="text-secondary font-bold ">Jalat</span>
            </span>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
