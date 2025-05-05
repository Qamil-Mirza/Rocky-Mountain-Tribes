import Image from "next/image";
import { NavBar } from "@/components/Navbar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import HighlightCard from "@/components/HighlightCard";
import { Leaf, Flame, Globe } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

import rocky_mountain from "@/public/images/rocky-mountain-backdrop.jpg";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
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
        <div className="p-3 z-20">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            The Tribes Of The Rocky Mountains
          </h1>
          <p className="relative z-20 text-center text-2xl font-light tracking-tighter text-primary">
            An exploration of the tribes of the Rocky Mountains
          </p>
          <div className="flex justify-center mt-4">
            <Link href={"/tek"}>
              <InteractiveHoverButton>Learn more</InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Webpage Introduction Section */}
      <BlurFade delay={0.1} inView>
      <section className="p-6">
        <div className="mb-6">
          <h2 className="text-center font-bold text-4xl mb-2">Our Purpose</h2>
          <p className="mb-6 text-justify">
            Welcome to our digital exploration of the Rocky Mountains, a sacred
            region whose peaks and valleys have long been home to Indigenous
            Nations. Before these lands were marked as a national park, they
            were places of ceremony, migration, and deep ecological wisdom. This
            website honors the enduring presence, knowledge, and strength of the
            Tribes who have called the Rockies home for thousands of years. As
            you navigate our pages, we invite you to reflect on the stories,
            contributions, and futures of these communities, not as distant
            histories, but as living cultures shaping the present and stewarding
            the future. Through this project, we aim to highlight the following:
          </p>


          <div className="flex flex-wrap justify-center mb-6 gap-10">
            <HighlightCard
              title="TEK"
              description="Rooted in deep connection to land, Traditional Ecological Knowledge (TEK) offers powerful models for sustainable environmental stewardship today."
              url="/tek"
              icon={<Leaf className="text-green-500" />}
              iconbgcolor="bg-green-100"
              shineColors={["#6EE7B7", "#3ABFA1", "#10B981"]}
            />
            <HighlightCard
              title="Climate Adaptation"
              description="Tribal communities are innovating at the frontlines of climate change, blending ancestral knowledge with modern tools to adapt and thrive."
              url="/climate-adaptation"
              icon={<Flame className="text-red-500" />}
              iconbgcolor="bg-red-100"
              shineColors={["#FCA5A5", "#F87171", "#EF4444"]}
            />
            <HighlightCard
              title="Tourism & Policy"
              description="Tourism and government policies often overlook Indigenous voices, yet these communities continue to fight for sovereignty and sustainability."
              url="/tourism-policy"
              icon={<Globe className="text-blue-500" />}
              iconbgcolor="bg-blue-100"
              shineColors={["#93C5FD", "#60A5FA", "#3B82F6"]}
            />
          </div>
        </div>
      </section>
      </BlurFade>
    </div>
  );
}
