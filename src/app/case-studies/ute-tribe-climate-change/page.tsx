import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock, User } from "lucide-react";
import aridMountain from "@/public/images/arid-ute-mountain.jpg";
function page() {
  return (
    <div className="container min-w-screen mx-auto bg-background">
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={aridMountain.src}
          alt="Ute Tribe Farm"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            Enduring Drought and Enduring Injustice: The Struggles of the Ute
            Tribe in the Face of{" "}
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
            Enduring Drought and Enduring Injustice: The Struggles of the Ute
            Tribe in the Face of Climate Change
          </h1>
          <hr className="mb-4" />
        </div>

        <p className="mb-6">
          The Ute tribe live on the 7,700-acre Farm & Ranch Enterprise, once a
          thriving source of corn and hay, is now experiencing drastic
          reductions in production due to limited water availability from the
          McPhee Reservoir in southwestern Colorado as the drought worsens.
          Historically, the Ute Mountain Ute exchanged these for junior rights
          to water from the Dolores River, making them more vulnerable during
          droughts. Tribe held senior water rights from Lake Nighthorse, a
          reservoir built to meet Native American water claims, dating back to
          1868 and in a 1988 settlement, they exchanged these for junior rights
          to water from the Dolores River, making them more vulnerable during
          droughts. However, the people of the Ute tribe lack the infrastructure
          and pipelines to access it, despite having the rights to the water
          there and the deal promising to bring infrastructure improvements as
          well. In 2021, this has resulted in an 80% cut in water deliveries,
          forcing the tribe to abandon planting on over half of their farmland
          and lay off many farm workers, deeply affecting the local economy, and
          highlighting the ongoing issues with water rights and infrastructure
          development for Indigenous communities.
        </p>

        <p className="mb-6">
          With the onset of the drought and the increasing of severity, the
          tribe were forced to implement certain adaptive strategies, ranging
          from investing in value-added processing of corn products at their Bow
          & Arrow Brand mill, shifting away from water-intensive crops like
          alfalfa and exploring regenerative agriculture and exploring
          regenerative agriculture. The Ute tribal leader at the time, Chairman
          Manuel Heart, has also mentioned that while they’ve made efforts to
          modernize their agricultural enterprise and water infrastructure, the
          federal government must do more to help tribes implement their water
          rights and build resilience amid the West’s intensifying drought. To
          adapt to the intensifying climate change, they need the tools, funding
          and as well as legal recognition to exercise their sovereignty and
          protect their resources.{" "}
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
          Ultimately, the Ute tribe in the Ute mountain manifests as a microcosm
          of a broader crisis. Across the West, Indigenous nations are on the
          frontlines of climate change, disproportionately affected by
          environmental degradation though being the least to its causes.
          Historically, their exclusion from decision-making processes around
          water and land use, that they initially have rights to, continues to
          shape their present struggles. Yet, despite these challenges, the Ute
          people are not passive victims—they are organizing, innovating, and
          advocating, striving to reclaim not only their water but their future.
          Their story is not just one of loss, but of resilience.
        </p>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Sources</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <p>
                <strong>Griffith, E. (2022, September 21)</strong> "Drought
                threatens an Indigenous tribe's farm in an isolated corner of
                Colorado" <em>NBC News.</em>
                <Link href="#" className="ml-2 text-blue-500 hover:underline">
                  https://www.nbcnews.com/news/us-news/drought-threatens-indigenous-tribes-farm-isolated-corner-colorado-rcna46472
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Tory, S. (2021, July 28)</strong> "As drought in the
                West worsens, the Ute Mountain Ute Tribe in Colorado faces a
                dwindling water supply." <em>The Colorado Sun.</em>
                <Link href="#" className="ml-2 text-blue-500 hover:underline">
                  https://coloradosun.com/2021/07/28/ute-mountain-ute-drought-dolores-river-four-corners/
                </Link>
              </p>
            </li>
          </ol>
        </div>
      </article>
    </div>
  );
}

export default page;
