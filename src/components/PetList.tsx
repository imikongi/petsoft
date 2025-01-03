import React from "react";
import Image from "next/image";

const PetList = () => {
  return (
    <ul className={"bg-white border-b border-black/[0.08]"}>
      <li>
        <button
          className={
            "flex items-center h-[70px]" +
            " w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition"
          }
        >
          <Image
            src={
              "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            }
            alt={"pet image"}
            width={45}
            height={45}
            className={"rounded-full object-cover"}
          />
          <p className={"font-semibold"}>Bobo</p>
        </button>
      </li>
    </ul>
  );
};

export default PetList;
