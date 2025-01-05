"use client";

import React from "react";
import Image from "next/image";
import { Pet } from "@/lib/types";
import { usePetContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const PetList = () => {
  const { pets, selectedPetId, handleChangeSelectedPetId } = usePetContext();

  return (
    <ul className={"bg-white border-b border-black/[0.08]"}>
      {pets.map((pet: Pet) => (
        <li key={pet.id}>
          <button
            className={cn(
              `flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] transition`,
              {
                "bg-[#EFF1F2]": selectedPetId === pet.id,
              },
            )}
            onClick={() => handleChangeSelectedPetId(pet.id)}
          >
            <Image
              src={pet.imageUrl}
              alt={"pet image"}
              width={45}
              height={45}
              className={"w-[45px] h-[45px] rounded-full object-cover"}
            />
            <p className={"font-semibold"}>{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PetList;
