"use client";

import React from "react";
import { useSearchContext } from "@/lib/hooks";

const SearchForm = () => {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();

  return (
    <form action="" className={"w-full h-full"}>
      <input
        className={
          "h-full w-full bg-white/20 rounded-md px-5 outline-none transition" +
          " focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        }
        placeholder={"Search pets"}
        type={"search"}
        value={searchQuery}
        onChange={(event) => handleChangeSearchQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;
