import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock } from "lucide-react";
import buffaloReturn from "@/public/images/blackfeet-bison.jpg";
function page() {
  return (
    <div className="container min-w-screen mx-auto bg-background">
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={buffaloReturn.src}
          alt="Ute Tribe Farm"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
          The Buffalo Return: Reviving Culture, Land, and Sovereignty
          </h1>
        </div>
      </section>

      <article className="prose prose-stone dark:prose-invert max-w-none p-6">
        <div className="space-y-2 not-prose">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time className="flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span>May 2nd, 2025</span>
            </time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>5 min read</span>
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The Buffalo Return: Reviving Culture, Land, and Sovereignty
          </h1>
          <hr className="mb-4" />
        </div>

        <p className="mb-6">
          For the Blackfeet Nation, the buffalo is more than an animal—it is an
          ancestor, a relative, a sacred being that has been part of their
          traditions, songs, and survival. The buffalo's disappearance in the
          late 19th century also meant the loss of everything that the buffalo
          provided the people: food, clothing, shelter, and spiritual guidance.
          The disappearance, brought about by settler expansion and deliberate
          extermination policies aimed at breaking the power of Plains tribes,
          was not only a biological loss but a devastating blow to Blackfeet
          cultural integrity and autonomy.
        </p>

        <p className="mb-6">
          In June of 2023, Bison was reintroduced to the Blackfeet Nation,
          marking a significant development in Indigenous-led environmental
          restoration and cultural revitalization. After over a century of
          absence, the 24 released wild bison near Chief Mountain in Montana
          reflect the broader efforts among Indigenous nations to assert
          sovereignty, repair ecological damage, and restore cultural practices
          disrupted by colonization and environmental exploitation.
        </p>

        <p className="mb-6">
          The Bison are and have always been a keystone species within North
          American grassland ecosystems. They are an integral part of
          traditional ecological knowledge (TEK), a broader environmental agenda
          that integrates traditions into contemporary ecological science.
          Bisons are known for their grazing patterns, wallowing behavior, and
          migratory movements which help maintain ecological diversity and soil
          health. Hence, the reintroduction of bison also meant that the
          Blackfeet Nation will have improved rangeland management, enhanced
          biodiversity and most importantly–-a native species restored.
        </p>

        <p className="mb-6">
          With the bison, the Blackfeet Nation are able to manage and restore
          their own lands and species, asserting their right to environmental
          governance and as an act tribal sovereignty. The reintroduction of the
          species was actually led by the Blackfeet Nation themselves, in
          partnership with various NGOs and conservation groups. The
          reintroduction near Chief Mountain, a region with significant
          ecological and cultural importance, represents a shift toward
          Indigenous-led conservation strategies and something far more than a
          wildlife story—it is a story of restoration, resistance, and renewal.
        </p>

      </article>
    </div>
  );
}

export default page;
