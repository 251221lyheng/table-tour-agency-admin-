import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { CameraIcon } from "./CameraIcon";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const AddAgency = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div className="flex gap-4 items-center justify-center ">
                <Avatar
                  className="w-20 h-20"
                  showFallback
                  src="https://images.unsplash.com/broken"
                  fallback={
                    <CameraIcon
                      className="animate-pulse w-12 h-12 text-default-500"
                      fill="currentColor"
                      size={20}
                    />
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-6">
                <Input
                  type="firstName"
                  label="First Name"
                  placeholder="Enter your Name"
                />
                <Input
                  type="lastName"
                  label="Last Name"
                  placeholder="Enter your Name"
                />
              </div>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-6">
                <Input
                  type="agencyName"
                  label="Tour Agency Name"
                  placeholder="Enter your Tour Agency Name"
                />
                <Input
                  type="phoneNumber"
                  label="Phone Number"
                  placeholder="+855 98 786 456"
                />
              </div>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-6">
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter your Password"
                />
                <Input
                  type="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your Password"
                />
              </div>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-6">
                <Input
                  type="registerdDate"
                  label="Registerd Date"
                  placeholder="10-02-2024"
                />
                <Input
                  type="address"
                  label="Address"
                  placeholder="st123 steung meanchey phnom penh"
                />
              </div>

              <div className=" w-full my-4">
                <Textarea
                  label="Description"
                  placeholder="Enter your description"
                  className="max-w-3xl max-h-[200px]"
                />
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAgency;
