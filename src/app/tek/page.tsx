import React from "react";
import Image from "next/image";
import { NavBar } from "@/components/Navbar";
import tek_bg from "@/public/images/tek-background.jpg";
import Timeline from "@/components/Timeline";
import CaseStudyCard from "@/components/CasestudyCard";

/* Image imports */
import aridUteMountain from "@/public/images/arid-ute-mountain.jpg";
import blackfeetBison from "@/public/images/blackfeet-bison.jpg";
import uteBurn from "@/public/images/ute-burn.jpg";

// CASE STUDY DATA
const caseStudies = [
  {
    id: "1",
    title: "Ute Mountain Ute Tribe, Colorado: Stewarding Arid Lands",
    description:
      "The Ute Mountain Ute Tribe combines traditional dryland farming techniques with sustainable irrigation systems to grow corn, beans, and squash — sustaining cultural practices and enhancing food sovereignty.",
    image: aridUteMountain.src,
    url: "/case-studies/ecommerce-redesign",
  },
  {
    id: "2",
    title: "Blackfeet Nation, Montana: The Return of the Buffalo",
    description:
      "The Blackfeet’s Iinnii Initiative focuses on restoring bison to Blackfeet lands, revitalizing traditional hunting, grazing rotation, and spiritual practices linked to prairie ecosystem balance and biodiversity.",
    image: blackfeetBison.src,
    url: "/case-studies/financial-dashboard",
  },
  {
    id: "3",
    title: "Southern Ute Tribe, Colorado: Burning for Balance",
    description:
      "The Southern Ute apply controlled burning to manage forests, increase wildlife habitat, and revitalize ancestral fire stewardship suppressed by federal fire policy which is a practice that enhances biodiversity and reduces wildfire risk.",
    image: uteBurn.src,
    url: "/case-studies/healthcare-portal",
  },
];

function page() {
  return (
    <div className="bg-background min-h-screen">
      {/* NAVBAR */}
      <NavBar transparent={true} />

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
        <h2 className="text-center font-bold text-4xl mb-2">Introduction</h2>
        <p>
          Nestled within the diverse landscapes of the Rocky Mountains,
          Indigenous communities have cultivated deep, intergenerational
          relationships with the land for millennia. Central to their ways of
          life is Traditional Ecological Knowledge (TEK) — a dynamic,
          place-based understanding of ecosystems rooted in cultural values,
          spiritual beliefs, and practical experience. Far from being static
          folklore, TEK reflects a holistic environmental ethic that integrates
          observation, oral history, seasonal cycles, and sustainable practices.
          Among the Rocky Mountain tribes — including the Blackfeet, Shoshone,
          Ute, and Salish — TEK informs land stewardship, fire management, plant
          harvesting, and wildlife tracking in ways that modern science is only
          beginning to appreciate. As the climate crisis intensifies, the
          resurgence and recognition of Indigenous ecological knowledge offer
          not just a blueprint for resilience, but a reimagining of human-nature
          relationships grounded in respect, reciprocity, and long-term
          sustainability.
        </p>
      </section>

      <section className="p-6">
        <h2 className="text-center font-bold text-4xl mb-2">
          History & Significance
        </h2>
        <p>
          Rocky Mountain National Park now showcases some of the most iconic
          landscapes of the southern Rocky Mountains, including over 60 peaks
          above 12,000 feet and panoramic views of the Continental Divide. It
          protects a variety of natural habitats, from montane and subalpine
          forests to one of the best-preserved tundra ecosystems in the region.
          There was once an abundance of Native Americans living on these lands
          with tribes such as Ute, Cheyenne, Arapaho and Comanche. It’s
          acknowledged that these are dying communities as more recreational
          areas are put up.
        </p>
      </section>

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
          <CaseStudyCard
            title={caseStudies[2].title}
            description={caseStudies[2].description}
            image={caseStudies[2].image}
            url={caseStudies[2].url}
          />
        </div>
      </section>
    </div>
  );
}

export default page;
