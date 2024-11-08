import React from "react";

const stats = [
  { label: "Downloads", value: "31K" },
  { label: "New Users", value: "4,200" },
  { label: "New Registers", value: "1,200" }
];

export default function StateSection() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 p-10 my-7 text-white flex sm:flex-col items-center gap-10 justify-evenly">
      {stats.map(({ label, value }, index) => (
        <div key={index} className="text-center">
          <div className="text-xl text-white">{label}</div>
          <div className="lg:text-7xl text-5xl font-bold">{value}</div>
        </div>
      ))}
    </div>
  );
}
