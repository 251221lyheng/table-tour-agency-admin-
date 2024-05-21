"use client";
import Image from "next/image";
import jalatlogo from "../../../public/assets/jalat-logo.png";
import ResetPasswordComponent from "./ResetPasswordComponent";

export default function OtpComponent() {
  return (
    <div>
      <button
        className="w-[120px] h-[40px] bg-main text-sm text-white rounded-2xl"
        onClick={() => document.getElementById("modal_otp").showModal()}
      >
        SEND
      </button>
      <dialog id="modal_otp" className="modal">
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
              <div className="">
                <div className="">
                  <div className="p-8">
                    <div className="space-y-4">
                      <Image
                        src={jalatlogo}
                        className="w-[120px] mt-5 mb-5"
                        alt=""
                      />
                      <h2 className="flex text-xl text-cyan-900 font-bold">
                        Verification Email Address
                      </h2>
                      <p className="text-sm text-start">
                        6-digit verification code sent to your email.
                      </p>
                    </div>
                    <div className="mt-10 grid">
                      <div class="flex justify-center gap-2">
                        <input
                          class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          type="text"
                          maxlength="1"
                          pattern="[0-9]"
                          inputmode="numeric"
                          autocomplete="one-time-code"
                        />
                        <input
                          class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          type="text"
                          maxlength="1"
                          pattern="[0-9]"
                          inputmode="numeric"
                          autocomplete="one-time-code"
                        />
                        <input
                          class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          type="text"
                          maxlength="1"
                          pattern="[0-9]"
                          inputmode="numeric"
                          autocomplete="one-time-code"
                        />
                        <input
                          class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          type="text"
                          maxlength="1"
                          pattern="[0-9]"
                          inputmode="numeric"
                          autocomplete="one-time-code"
                        />
                        <input
                          class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          type="text"
                          maxlength="1"
                          pattern="[0-9]"
                          inputmode="numeric"
                          autocomplete="one-time-code"
                        />
                        <input
                          class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          type="text"
                          maxlength="1"
                          pattern="[0-9]"
                          inputmode="numeric"
                          autocomplete="one-time-code"
                        />
                      </div>
                    </div>
                    <div className="mt-5 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                      {/* <button className="w-[120px] h-[40px] bg-main text-sm text-white rounded-2xl">
                        Verify code
                      </button> */}
                      <ResetPasswordComponent />

                      <p className="text-sm">
                        Haven`t got the email yet?{" "}
                        <button
                          className="text-secondary underline"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Resend Email
                        </button>
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
