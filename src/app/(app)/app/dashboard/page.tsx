import React from "react";
import H1 from "@/components/H1";
import Stats from "@/components/Stats";
import Branding from "@/components/Branding";

const Dashboard = () => {
  return (
    <main>
      <div className={"flex items-center justify-between text-white py-8"}>
        <Branding />
        <Stats />
      </div>
    </main>
  );
};

export default Dashboard;
