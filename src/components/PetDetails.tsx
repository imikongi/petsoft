"use client";

import React from "react";
import Image from "next/image";
import { usePetContext } from "@/lib/hooks";
import { Pet } from "@/lib/types";

type SectionsProps = {
  pet: Pet;
};

const TopBar = ({ pet }: SectionsProps) => (
  <div
    className={
      "flex items-center bg-white px-8 py-5 border-b border-black/[0.08]"
    }
  >
    <Image
      src={pet.imageUrl}
      alt={"Selected pet image"}
      width={75}
      height={75}
      className={"w-[75px] h-[75px] rounded-full object-cover"}
    />
    <h2 className={"text-3xl font-semibold leading-7 ml-5"}>{pet.name}</h2>
  </div>
);

const PetInfo = ({ pet }: SectionsProps) => (
  <div className={"flex justify-around py-10 px-5 text-center"}>
    <div>
      <h3 className={"text-[13px] fon"}>Owner name</h3>
      <p className={"mt-1 text-lg text-zinc-800"}>{pet?.ownerName}</p>
    </div>

    <div>
      <h3 className={"text-[13px] fon"}>Age</h3>
      <p className={"mt-1 text-lg text-zinc-800"}>{pet?.age}</p>
    </div>
  </div>
);

const PetNotes = ({ pet }: SectionsProps) => (
  <section
    className={
      "flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-black/[0.08]"
    }
  >
    {pet?.notes}
  </section>
);

const EmptyView = () => (
  <div className={"h-full flex justify-center items-center"}>
    <p className={"text-2xl font-medium"}>No pet selected</p>
  </div>
);

const PetDetails = () => {
  const { selectedPet } = usePetContext();

  if (!selectedPet) return <EmptyView />;

  return (
    <section className={"flex flex-col h-full w-full"}>
      <TopBar pet={selectedPet} />

      <PetInfo pet={selectedPet} />

      <PetNotes pet={selectedPet} />
    </section>
  );
};

export default PetDetails;
