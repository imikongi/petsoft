"use client";

import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

const AppHeader = () => {
  const activePath = usePathname();

  return (
    <header
      className={
        "flex justify-between items-center border-b border-white/10 py-2"
      }
    >
      <Logo />

      <nav>
        <ul className={"flex gap-2 text-sm"}>
          {routes.map((item) => (
            <li key={item.path}>
              <Link
                className={cn(
                  `text-white/70 rounded-sm px-2 py-1 hover:text-white  transition`,
                  {
                    "bg-black/10 text-white": activePath === item.path,
                  },
                )}
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
