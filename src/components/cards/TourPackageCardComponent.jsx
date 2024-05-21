import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";

export default function TourPackageCardComponent() {
  return (
    <div>
      <div className="grid gap-4 p-2 shadow-md rounded-md">
        <div className="">
          <img
            className="rounded-lg"
            src="https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/IMG20181201152118-o0apmvil880d4g2nllqb6gpavdkeiann285s9ynngo.jpg"
            alt=""
          />
        </div>
        <h3>Title</h3>
        <p className="line-clamp-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          rerum assumenda id expedita culpa modi? Quae commodi placeat dolores
          in nobis totam aperiam ab quia accusamus. Adipisci nam laudantium
          alias.
        </p>
        <div className="flex gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="h-[1px] bg-secondary"></div>
        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker />
          <p>Angkor, Siem Reap</p>
        </div>
      </div>
    </div>
  );
}
