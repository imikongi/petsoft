import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  children?: React.ReactNode;
  onClick?: () => void;
};

const PetButton = ({ actionType, children, onClick }: PetButtonProps) => {
  if (actionType === "add") {
    return (
      <Button size="icon">
        <PlusIcon className={"h-6 w-6"} />
      </Button>
    );
  }

  if (actionType === "edit") {
    return <Button variant={"secondary"}>{children}</Button>;
  }

  if (actionType === "checkout") {
    return (
      <Button onClick={onClick} variant={"secondary"}>
        {children}
      </Button>
    );
  }
};

export default PetButton;
