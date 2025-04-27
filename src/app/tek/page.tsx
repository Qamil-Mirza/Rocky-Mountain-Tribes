import React from "react";
import Image from "next/image";
import { NavBar } from "@/components/Navbar";
import tek_bg from "@/public/images/tek-background.jpg";
import Timeline from "@/components/Timeline";
import { CaseStudyCard } from "@/components/CaseStudyCard";

// CASE STUDY DATA
const caseStudies = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    description: "How we increased conversion rates by 45% through UX improvements and performance optimization.",
    image: "/placeholder.svg?height=300&width=500",
    url: "/case-studies/ecommerce-redesign",
  },
  {
    id: "2",
    title: "Financial App Dashboard",
    description: "Creating an intuitive dashboard that helped users better understand and manage their finances.",
    image: "/placeholder.svg?height=300&width=500",
    url: "/case-studies/financial-dashboard",
  },
  {
    id: "3",
    title: "Healthcare Patient Portal",
    description: "Designing an accessible patient portal that improved patient engagement and satisfaction.",
    image: "/placeholder.svg?height=300&width=500",
    url: "/case-studies/healthcare-portal",
  },
]

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
          a dynamic, place-based understanding of the relationships between
          living beings and their environment, developed by Indigenous
          communities and long-term local communities over centuries through
          direct interaction with nature. It encompasses knowledge, practices,
          and beliefs passed down through generations, integrating ecological,
          social and cultural dimensions.​
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
        <h2 className="text-center font-bold text-4xl mb-2">
          TEK Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
      </section>
    </div>
  );
}

export default page;
