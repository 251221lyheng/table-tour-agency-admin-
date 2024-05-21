"use client";
import Image from "next/image";
import React, { useState } from "react";
import jalatlogo from "../../../public/assets/jalat-logo.png";
import emailLogo from "../../../public/assets/icons/email-regular.svg";
import SignupComponent from "./SignupComponent";
import ForgetPasswordComponent from "./ForgetPasswordComponent";

export default function EmailLoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <button
        className="w-full group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-secondary"
        onClick={() => document.getElementById("modal_mailSignin").showModal()}
      >
        <div className="relative flex items-center space-x-4 justify-center">
          <Image
            src={emailLogo}
            className="absolute left-0 w-5"
            alt="email logo"
          />
          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-secondary sm:text-base">
            Continue with Email
          </span>
        </div>
      </button>
      <dialog id="modal_mailSignin" className="modal">
        <div className="modal-box bg-white">
          <form className="bg-white" method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute left-5 top-5 bg-main text-white"
              onClick={() =>
                document.getElementById("modal_signin").showModal()
              }
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-main text-white">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <div className="w-full">
              <div className="m-auto">
                <div className="">
                  <div className="p-8">
                    <div className="space-y-4">
                      <Image
                        src={jalatlogo}
                        className="w-[120px] mt-5 mb-5"
                        alt=""
                      />
                      <h2 className=" text-xl text-cyan-900 font-bold">
                        Welcome back to{" "}
                        <span className="text-secondary">Jalat.</span>
                      </h2>
                    </div>
                    <div className="mt-5 grid">
                      <div className="label">
                        <span className="label-text">Email</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered w-full text-sm"
                      />
                    </div>
                    <div className="mt-2 grid">
                      <div className="relative">
                        <div className="label">
                          <span className="label-text">Password</span>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          className="input input-bordered w-full text-sm"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          id="togglePassword"
                          className="bi bi-eye absolute top-[60px] right-5 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                          viewBox="0 0 16 16"
                          onClick={() => {
                            setShowPassword((prev) => !prev);
                          }}
                        >
                          {showPassword ? (
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-slash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                            </svg>
                          )}

                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                          id="mama"
                          viewBox="0 0 16 16"
                        >
                          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                        </svg>
                      </div>
                    </div>
                    <button className="mt-5 text-sm underline">
                      <ForgetPasswordComponent />
                    </button>
                    <div className="mt-2 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                      <button className="w-[120px] h-[40px] bg-main text-sm text-white rounded-2xl">
                        Sign In
                      </button>
                      <p className="text-sm flex justify-center gap-2">
                        Don`t have an account? <SignupComponent />
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
