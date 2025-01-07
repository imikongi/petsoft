"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Pet } from "@/lib/types";
import { usePetContext, useSearchContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const PetList = () => {
  const { pets, selectedPetId, handleChangeSelectedPetId } = usePetContext();
  const { searchQuery } = useSearchContext();

  const filteredPets = useMemo(
    () => pets.filter((pet) => pet.name.toLowerCase().includes(searchQuery)),
    [searchQuery, pets],
  );

  return (
    <ul className={"bg-white border-b border-light"}>
      {filteredPets.map((pet: Pet) => (
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
