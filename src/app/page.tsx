import Image from "next/image";

import rocky_mountain from "@/public/images/rocky-mountain-backdrop.jpg"

export default function Home() {
  return (
    <div>
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image 
          src={rocky_mountain.src}
          alt="Background image of rocky mountains"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <h1 className="relative z-20 text-center text-4xl font-bold tracking-tighter text-primary">The Tribes Of The Rocky Mountains</h1>
        <p></p>
      </section>
    </div>
  );
}
