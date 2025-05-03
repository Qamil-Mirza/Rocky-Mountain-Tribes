import React from "react";
import { NavBar } from "@/components/Navbar";
import Image from "next/image";
import rmnpClimatebg from "@/public/images/rmnp-climate-bg.jpeg";

function page() {
  return (
    <div className="bg-background min-h-screen">
      <NavBar transparent={true} />

      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={rmnpClimatebg.src}
          alt="Background image of rocky mountains"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            Tourism and Policy
          </h1>
          <p className="relative z-20 text-center text-2xl font-light tracking-tighter text-primary">
            Understanding the impact of tourism on Indigineous well-being and the policies that can mitigate it.
          </p>
        </div>
      </section>

      <section>
        <h2></h2>
      </section>
    </div>
  );
}

export default page;
