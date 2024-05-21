"use client";
import Image from "next/image";
import React from "react";
import jalatlogo from "../../../public/assets/jalat-logo.png";
import googleLogo from "../../../public/assets/icons/google-logo.svg";
import EmailLoginComponent from "./EmailLoginComponent";

export default function LoginComponent() {
  return (
    <div>
      <button
        className="w-[90px] h-[40px] bg-main text-white text-sm rounded-xl"
        onClick={() => document.getElementById("modal_signin").showModal()}
      >
        Sign In
      </button>
      <dialog id="modal_signin" className="modal">
        <div className="modal-box bg-white">
          <form className="bg-white" method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-main text-white">
              <i class="fa-solid fa-xmark"></i>
            </button>

            <div className="w-full">
              <div className="m-auto">
                <div className="">
                  <div className="p-8">
                    <div className="">
                      <Image
                        src={jalatlogo}
                        className="w-[120px] mb-10"
                        alt=""
                      />
                      <h2 className=" text-xl text-cyan-900 font-bold">
                        Sign in to start your journey <br />
                        with <span className="text-secondary">Jalat.</span>
                      </h2>
                    </div>
                    <div className="mt-10 grid space-y-4">
                      <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-secondary">
                        <div className="relative flex items-center space-x-4 justify-center">
                          <Image
                            src={googleLogo}
                            className="absolute left-0 w-5"
                            alt="google logo"
                          />
                          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-secondary sm:text-base">
                            Continue with Google
                          </span>
                        </div>
                      </button>
                      <EmailLoginComponent />
                    </div>
                    <div className="mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                      <p className="text-xs">
                        By proceeding, you agree to our
                        <a href="/privacy-policy/" className="underline">
                          Terms of Use
                        </a>
                        and confirm you have read our
                        <a href="/privacy-policy/" className="underline">
                          Privacy and Cookie Statement
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
