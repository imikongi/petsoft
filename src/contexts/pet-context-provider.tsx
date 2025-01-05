"use client";

import React, { createContext, useState } from "react";
import { Pet } from "@/lib/types";

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectedPetId: (id: string) => void;
  selectedPet: Pet | undefined;
  petsLength: number;
};
export const PetContext = createContext<TPetContext | null>(null);

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Pet[];
};

const PetContextProvider = ({ children, data }: PetContextProviderProps) => {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const petsLength = pets.length;

  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        selectedPet,
        petsLength,
        handleChangeSelectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
