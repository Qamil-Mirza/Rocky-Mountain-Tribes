import Image from "next/image";
import { NavBar } from "@/components/Navbar";

import rocky_mountain from "@/public/images/rocky-mountain-backdrop.jpg";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Navigation Bar */}
      <NavBar transparent={true} />

      {/* Webpage Hero Section */}
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={rocky_mountain.src}
          alt="Background image of rocky mountains"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            The Tribes Of The Rocky Mountains
          </h1>
          <p className="relative z-20 text-center text-2xl font-light tracking-tighter text-primary">
            An exploration of the tribes of the Rocky Mountains
          </p>
        </div>
      </section>
    </div>
  );
}
