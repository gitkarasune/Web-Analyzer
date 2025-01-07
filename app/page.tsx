"use client" 

import Hero from "@/Components/Hero";
import SectionList from "@/Components/Section-list";

export default function Home() {

  return (
    <div className="min-h-screen pt-20 sm:p-20">
      <div className="flex pt-32 mb-28 justify-center items-center text-center flex-col">
        <Hero />
      </div>

      <SectionList />
    </div>
  );
}
