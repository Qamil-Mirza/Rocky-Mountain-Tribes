import { NavBar } from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { ChartZoom } from "@/components/Chartzoom";
import StatCard from "@/components/StatCard";
import { ArrowBigUp, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurFade } from "@/components/magicui/blur-fade";

/* Image imports */
import rmnpClimatebg from "@/public/images/rmnp-climate-bg.jpeg";
import warmingChart from "@/public/images/warming-chart.png";
import CasestudyCard from "@/components/CasestudyCard";

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
            shifts that will transform its ecosystems. These changes are already
            visible and are projected to accelerate in the coming decades.
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
        <p>Some copy here please</p>
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
      <section className="w-full">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="effects" className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ecological Impact
              </h2>
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="effects" className="hover:cursor-pointer">
                  Effects
                </TabsTrigger>
                <TabsTrigger value="causes" className="hover:cursor-pointer">
                  Causes
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="effects" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Ecosystem Disruption</h3>
                  <p className="text-gray-700">
                    These climatic shifts are anticipated to disrupt the
                    competitive balance among plant species, potentially
                    altering the composition of the park's ecosystems. Earlier
                    snowmelt and extended growing seasons may favor certain
                    species over others, leading to changes in species
                    distribution and abundance.
                  </p>
                  <h3 className="text-2xl font-bold">Plant Competition</h3>
                  <p className="text-gray-700">
                    Cold-adapted species could be outcompeted by lower elevation
                    plants that use the extended growing season to monopolize
                    space. Some of these new species will probably be nonnative
                    or weedy, like cheatgrass (Bromus tectorum).
                  </p>
                  <h3 className="text-2xl font-bold">Root System Advantages</h3>
                  <p className="text-gray-700">
                    Drier summertime soils would put shallower-rooted plants,
                    such as wild strawberries (Fragaria virginiana), at a
                    disadvantage against deeper-rooted shrubs and trees, like
                    wild roses (Rosa woodsii) and Ponderosa pines (Pinus
                    ponderosa).
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="causes" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    Greenhouse Gas Emissions
                  </h3>
                  <p className="text-gray-700">
                    The primary driver of climate change in Rocky Mountain
                    National Park is the increase in greenhouse gas emissions
                    from human activities, particularly the burning of fossil
                    fuels for energy and transportation.
                  </p>
                  <h3 className="text-2xl font-bold">Land Use Changes</h3>
                  <p className="text-gray-700">
                    Changes in land use surrounding the park, including
                    urbanization and deforestation, contribute to local climate
                    effects and habitat fragmentation.
                  </p>
                  <h3 className="text-2xl font-bold">
                    Global Climate Patterns
                  </h3>
                  <p className="text-gray-700">
                    Changes in global climate patterns affect precipitation,
                    temperature, and seasonal transitions in the Rocky
                    Mountains, with amplified effects at higher elevations.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      </BlurFade>

      <BlurFade delay={0.2} inView>
      <section className="w-full p-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Adaptation Strategies
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How the indigineous tribes of the rocky mountains are adapting to
              climate change
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-6 gap-10">
            <CasestudyCard
              title="Confederated Salish and Kootenai Tribes (CSKT) Climate Adaptation Planning"
              description="The CSKT in Montana have developed a comprehensive climate adaptation plan that addresses vulnerabilities in forestry, land, fish, wildlife, water, air, infrastructure, people, and culture. Their strategy integrates Traditional Ecological Knowledge (TEK) by involving elders and knowledge holders, and includes actions such as gathering and planting whitebark pine seedlings resistant to warming-related diseases. The plan aims to maintain cultural practices and sovereignty while adapting to increased wildfire risk, altered precipitation, and other climate impacts"
              image={rmnpClimatebg.src}
              url="/case-studies/cskt-climate-adaptation-planning"
            />
            <CasestudyCard 
            title="Blackfeet Nation Youth and Community Climate Resilience Initiatives" 
            description="The Blackfeet Nation has engaged in collaborative climate resilience efforts, including youth, staff, and leadership training through partnerships with the Confederated Salish and Kootenai Tribes and other First Nations. Projects include efficient straw bale building techniques, building insulation, composting toilets, and solar panel installations to improve energy efficiency and sustainability. Youth-led conferences and climate training have empowered the next generation to address local climate challenges"
            image={rmnpClimatebg.src}
            url="/case-studies/blackfeet-nation-youth-and-community-climate-resilience-initiatives"
            />
            <CasestudyCard 
              title="Chippewa Cree and Fort Belknap Indian Community Climate Adaptation Planning" 
              description="The Chippewa Cree Indians of the Rocky Boy’s Reservation and the Fort Belknap Indian Community have initiated climate adaptation planning processes. These efforts include youth engagement through mini-conferences, climate training, and community education to build capacity for addressing climate impacts such as longer dry spells and extreme weather events. The tribes have received funding to attend climate training and are working on innovative adaptation strategies"
              image={rmnpClimatebg.src}
              url="/case-studies/chippewa-cree-and-fort-belknap-indian-community-climate-adaptation-planning"
              />
          </div>
        </div>
      </section>
      </BlurFade>
    </div>
  );
}

export default page;
