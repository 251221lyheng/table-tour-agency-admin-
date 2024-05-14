'use client'
import * as React from "react";
import NavbarComponent from "@/components/NavbarComponent";
import Image from "next/image";
import slider from "../../public/assets/slider.jpg"

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      {/* <div className="w-[80%] m-auto">
        <Image src={slider} alt="" />
      </div> */}
    </main>
  );
}
