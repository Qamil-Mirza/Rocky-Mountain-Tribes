import React from "react";
import Image from "next/image";
import tek_bg from "@/public/images/tek-background.jpg";
import CaseStudyCard from "@/components/CasestudyCard";
import { Waypoints, Recycle, Podcast, HandHeart, Mountain } from "lucide-react";
import HighlightCard from "@/components/HighlightCard";
import ChallengeCarousel from "@/components/ChallengeCarousel";

/* Image imports */
import aridUteMountain from "@/public/images/arid-ute-mountain.jpg";
import blackfeetBison from "@/public/images/blackfeet-bison.jpg";
import uteBurn from "@/public/images/ute-burn.jpg";

// CASE STUDY DATA
const caseStudies = [
  {
    id: "1",
    title: "'The Buffalo Return: Reviving Culture, Land, and Sovereignty",
    description:
      "In 2023, the Blackfeet Nation reintroduced bison to their lands, restoring a sacred relative and keystone species. This act revitalizes cultural traditions, strengthens ecological health, and reasserts tribal sovereignty.",
    image: blackfeetBison.src,
    url: "/case-studies/buffalo-return",
  },
  {
    id: "2",
    title: "Southern Ute Tribe, Colorado: Burning for Balance ",
    description:
      "The Southern Ute apply controlled burning to manage forests, increase wildlife habitat, and revitalize ancestral fire stewardship suppressed by federal fire policy which is a practice that enhances biodiversity and reduces wildfire risk.",
    image: uteBurn.src,
    url: "/case-studies/burning-for-balance",
  },
];

// Carousel data
// Sample challenge data
const challenges = [
  {
    id: 1,
    title: "Land Dispossession",
    description:
      "Forced removals broke tribal ties to sacred sites, with 98% of Rocky Mountain lands lost.",
    image: aridUteMountain.src,
    link: "#",
  },
  {
    id: 2,
    title: "Language Erosion",
    description:
      "Fewer native speakers threaten TEK transfer; only 20% now speak tribal languages fluently.",
    image: aridUteMountain.src,
    link: "/articles/digital-transformation",
  },
  {
    id: 3,
    title: "Climate Change",
    description:
      "Shifting seasons disrupt TEK signals like harvest timing and animal migration patterns.",
    image: aridUteMountain.src,
    link: "/articles/ai-ethics",
  },
  {
    id: 4,
    title: "Policy Barriers",
    description:
      "TEK is sidelined in land decisions due to federal bias toward Western science.",
    image: aridUteMountain.src,
    link: "/articles/cybersecurity",
  },
];

function page() {
  return (
    <div className="bg-background min-h-screen">
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={tek_bg.src}
          alt="Background image of rocky mountains"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            Traditional Ecological Knowledge
          </h1>
          <p className="relative z-20 text-center text-2xl font-light tracking-tighter text-primary">
            A dive into generations of Indigineous practices, beliefs and
            Knowledge
          </p>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-center font-bold text-4xl mb-2">What Is TEK?</h2>
        <p>
          <span className="font-bold">
            Traditional Ecological Knowledge (TEK)
          </span>{" "}
          is a cumulative, intergenerational body of knowledge, practices, and
          beliefs about the relationships between humans, plants, animals,
          landscapes, and spiritual systems, developed by Indigenous peoples
          through sustained interaction with their environments. For Rocky
          Mountain tribes like the Blackfeet, Ute, and Shoshone-Bannock, TEK
          encompasses sustainable hunting, fishing, fire management, and
          seasonal migration practices rooted in deep ecological understanding.
          It differs from Western science by emphasizing holistic, place-based
          wisdom transmitted orally and through lived experience.
        </p>
      </section>

      <section className="p-6">
        <h2 className="text-center font-bold text-4xl mb-6">
          Core Principles of TEK
        </h2>
        <div className="flex flex-wrap justify-center mb-6 gap-10">
          <HighlightCard
            title="Holistic Interconnectedness"
            description="TEK views humans as part of ecological and spiritual networks, rejecting the separation of 'nature' and 'culture'"
            icon={<Waypoints />}
            iconbgcolor="bg-black"
            shineColors={["#1f2937", "#374151", "#4b5563"]}
            buttonText=""
          />
          <HighlightCard
            title="Adaptive sustainability"
            description=" Practices evolve over millennia to balance human needs with ecological carrying capacity (e.g., controlled burns for forest health)"
            icon={<Recycle />}
            iconbgcolor="bg-black"
            shineColors={["#1f2937", "#374151", "#4b5563"]}
            buttonText=""
          />
          <HighlightCard
            title="Intergenerational transmission"
            description=" Knowledge is shared through storytelling, ceremonies, and mentorship by elders"
            icon={<Podcast />}
            iconbgcolor="bg-black"
            shineColors={["#1f2937", "#374151", "#4b5563"]}
            buttonText=""
          />
          <HighlightCard
            title="Ethical stewardship"
            description=" Resources are managed with respect, reciprocity, and minimal waste (e.g., honoring animal spirits after a hunt)"
            icon={<HandHeart />}
            iconbgcolor="bg-black"
            shineColors={["#1f2937", "#374151", "#4b5563"]}
            buttonText=""
          />
          <HighlightCard
            title="Place-based specificity"
            description="TEK is tied to ancestral lands, reflecting localized ecological patterns and cultural identity"
            icon={<Mountain />}
            iconbgcolor="bg-black"
            shineColors={["#1f2937", "#374151", "#4b5563"]}
            buttonText=""
          />
        </div>
      </section>

      {/* Timeline Section 
      <section className="px-6 pt-6">
        <h2 className="text-center font-bold text-4xl mb-2">
          Timeline of Events
        </h2>
        <div className="flex justify-center">
          <Timeline />
        </div>
      </section>

      <section className="px-6 pb-6">
        <h2 className="text-center font-bold text-4xl mb-2">Status Quo</h2>
        <p>
          Established in 1915, the park has evolved from early tourism and
          resource use to a strong commitment to wilderness preservation. TEK is
          implemented in Rocky Mountain National Park’s current management plan.
          It mainly encompasses visitor activities including but not limited to
          mountain climbing, trail hiking, new roads and visitor centres.. The
          management understands how the animals there rely heavily on the plans
          in the area, especially in the early stages of wildlife, and use the
          TEK concept of sense of place to preserve that codependence.
        </p>
      </section>
      */}
      <section className="p-6">
        <h2 className="text-center font-bold text-4xl mb-6">
          TEK Case Studies
        </h2>
        <div className="flex flex-wrap justify-center mb-6 gap-10">
          <CaseStudyCard
            title={caseStudies[0].title}
            description={caseStudies[0].description}
            image={caseStudies[0].image}
            url={caseStudies[0].url}
          />
          <CaseStudyCard
            title={caseStudies[1].title}
            description={caseStudies[1].description}
            image={caseStudies[1].image}
            url={caseStudies[1].url}
          />
        </div>
      </section>

      {/* 
      <section className="p-6">
        <h2 className="text-center font-bold text-4xl mb-6">
          TEK and Modern Challenges
        </h2>
        <div className="flex flex-wrap justify-center mb-6 gap-10">
          <ChallengeCarousel challenges={challenges} />
        </div>
      </section>
      */}
    </div>
  );
}

export default page;
