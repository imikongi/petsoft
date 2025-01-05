"use client";

import React, { createContext, useState } from "react";

type TSearchContext = {
  searchQuery: string;
  handleChangeSearchQuery: (query: string) => void;
};
export const SearchContext = createContext<TSearchContext | null>(null);

type SearchContextProps = {
  children: React.ReactNode;
};

const SearchContextProvider = ({ children }: SearchContextProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
