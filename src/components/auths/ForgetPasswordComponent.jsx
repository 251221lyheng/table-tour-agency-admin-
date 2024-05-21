"use client";
import Image from "next/image";
import jalatlogo from "../../../public/assets/jalat-logo.png";
import OtpComponent from "./OtpComponent";

export default function ForgetPasswordComponent() {
  return (
    <div>
      <button
        className="underline"
        onClick={() => document.getElementById("modal_forget").showModal()}
      >
        forget password
      </button>
      <dialog id="modal_forget" className="modal">
        <div className="modal-box bg-white">
          <form className="bg-white" method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute left-5 top-5 bg-main text-white"
              onClick={() => document.getElementById("my_modal_2").showModal()}
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
                        Forget Password?
                      </h2>
                      <p className="text-sm text-start">
                        Please enter the email address associated with your
                        account and we’ll send you a verification code to reset
                        your password.
                      </p>
                    </div>

                    <div className="mt-2 grid">
                      <div className="label">
                        <span className="label-text">Email</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered w-full text-sm"
                      />
                    </div>
                    <div className="mt-5 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
                      <OtpComponent />
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
