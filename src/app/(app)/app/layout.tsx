import React from "react";
import BackgroundPattern from "@/components/BackgroundPattern";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import PetContextProvider from "@/contexts/pet-context-provider";
import { Pet } from "@/lib/types";
import SearchContextProvider from "@/contexts/search-context-provider";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const response = await fetch(
    "http://bytegrad.com/course-assets/projects/petsoft/api/pets",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch PetSystem data");
  }

  const data: Pet[] = await response.json();

  return (
    <>
      <BackgroundPattern />
      <div className={"flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen"}>
        <AppHeader />

        <SearchContextProvider>
          <PetContextProvider data={data}>{children}</PetContextProvider>
        </SearchContextProvider>

        <AppFooter />
      </div>
    </>
  );
};

export default Layout;
