"use client";

import React from "react";
import { usePetContext } from "@/lib/hooks";

const Stats = () => {
  const { petsLength } = usePetContext();

  return (
    <section className={"text-center"}>
      <p className={"text-2xl font-bold leading-6"}>{petsLength}</p>
      <p className={"opacity-80"}>current guests</p>
    </section>
  );
};

export default Stats;
