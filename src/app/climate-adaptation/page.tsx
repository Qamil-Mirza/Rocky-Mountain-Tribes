import React from "react";
import Image from "next/image";
import { ChartZoom } from "@/components/Chartzoom";
import StatCard from "@/components/StatCard";
import { ArrowBigUp, Plus } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

/* Image imports */
import rmnpClimatebg from "@/public/images/rmnp-climate-bg.jpeg";
import warmingChart from "@/public/images/warming-chart.png";
import CasestudyCard from "@/components/CasestudyCard";
import utedrought from "@/public/images/arid-ute-mountain.jpg";
import ir from "@/public/images/ir.png";
import ltw from "@/public/images/ltw.jpg";

function page() {
  return (
    <div className="bg-background min-h-screen">
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
            Climate Change and Adaptation
          </h1>
          <p className="relative z-20 text-center text-2xl font-light tracking-tighter text-primary">
            Understanding the impacts of climate change on Rocky Mountain
            National Park and the strategies for adaptation.
          </p>
        </div>
      </section>

      <BlurFade delay={0.2} inView>
        <section className="flex flex-col items-center justify-center p-6 bg-background">
          <h2 className="text-4xl font-bold mb-6">
            Climate Changes In Rocky Mountain National Park
          </h2>
          <div className="flex flex-row items-center justify-center">
            <p className="text-lg mb-4 text-left max-w-2xl">
              Rocky Mountain National Park is experiencing significant climate
              shifts that will transform its ecosystems. These changes are
              already visible and are projected to accelerate in the coming
              decades.
            </p>
            <ChartZoom
              img={warmingChart.src}
              caption="Figure 1. Historical annual average temperatures (black; annual average
        of daily average temperatures) and three projections (red, purple, blue)
        at Bear Lake in Rocky Mountain National Park."
            />
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <section className="flex flex-col items-center justify-center p-6 bg-background">
          <h2 className="text-4xl font-bold mb-2">Key Climate Indicators</h2>
          <div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-6 p-6">
              {/* Add your StatCard components here */}
              <StatCard
                title="Temperature Increase"
                value="1-6°C"
                description="All climate models predict a rise in average annual temperatures within RMNP from 1°C to 6°C"
                colorTheme="green"
              />
              <StatCard
                title="Fewer Freezing Days"
                value="35-80"
                description="The park is expected to experience approximately 35 to 80 fewer days with freezing temperatures annually"
                colorTheme="blue"
              />
              <StatCard
                title="Extended Growing Season"
                value="2 months"
                description="Warmer conditions will likely extend the plant growing season by up to two months"
                colorTheme="orange"
                icon={<Plus className="h-6 w-6 translate-y-0.5" />}
              />
              <StatCard
                title="Drier Summer Soils"
                value="Evaporation"
                description="All climate models predict a rise in average annual temperatures within RMNP from 1°C to 6°C"
                colorTheme="red"
                icon={<ArrowBigUp className="h-10 w-10" />}
              />
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <section className="w-full p-6 flex flex-col justify-center bg-background">
          <h2 className="text-center font-bold text-4xl mb-6">
            Adaptation Strategies
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-6">
            How the indigineous tribes of the rocky mountains are adapting to
            climate change
          </p>

          <div className="flex flex-wrap justify-center mb-6 gap-10">
            <CasestudyCard
              title="Enduring Drought and Enduring Injustice: The Struggles of the Ute Tribe in the Face of Climate Change"
              description="The Ute Mountain Ute Tribe’s farm in southwestern Colorado has suffered major losses due to worsening drought, limited water access, and lack of infrastructure, forcing them to cut back on crops and lay off workers. The Tribe is now seeking to adapt to these challenges by exploring new irrigation systems, drought-resistant crops, and sustainable farming practices. This case study highlights the intersection of climate change, water rights, and Indigenous sovereignty."
              image={utedrought.src}
              url="/case-studies/ute-tribe-climate-change"
            />
            <CasestudyCard
              title="Indigenous Resilience: Culturally Grounded Adaptation in the Face of Climate Change"
              description="The Blackfeet Nation’s Climate Change Adaptation Plan exemplifies Indigenous-led resilience by integrating traditional knowledge with modern science to address climate threats. Supported by initiatives like the Climate-Ready Tribes Initiative, the plan spans health, agriculture, water, and cultural resources, embedding adaptation into the Nation’s core governance. It reflects a holistic, values-based approach that ties community well-being to environmental stewardship."
              image={ir.src}
              url="/case-studies/indigenous-resilience"
            />
            <CasestudyCard
              title="Indigenous Climate Action: Chippewa Cree & Fort Belknap Indian Community Leading the Way"
              description="The Chippewa Cree Tribe and Fort Belknap Indian Community are advancing climate adaptation in Montana by blending traditional knowledge with science to protect ecosystems and cultural resources. Their efforts—like sweetgrass migration and forest thinning—set a model for Indigenous-led climate resilience. This case study highlights the importance of community engagement and collaboration in addressing climate change."
              image={ltw.src}
              url="/case-studies/leading-the-way"
            />
          </div>
        </section>
      </BlurFade>
    </div>
  );
}

export default page;
