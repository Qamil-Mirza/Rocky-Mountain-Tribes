import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock } from "lucide-react";
import uteBurn from "@/public/images/ute-burn.jpg";
function page() {
  return (
    <div className="container min-w-screen mx-auto bg-background">
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={uteBurn.src}
          alt="Ute Tribe Farm"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            Southern Ute Tribe, Colorado: Burning for Balance
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
            Southern Ute Tribe, Colorado: Burning for Balance
          </h1>
          <hr className="mb-4" />
        </div>

        <p className="mb-6">
          As the number of wildfires increase and the severity of them worsen in
          the Western United States, there has been a prompting for a
          reevaluation of land management strategies. The Southern Ute Indian
          Tribe have been implementing “prescribed fire management” as a
          strategic approach to forest health, wildfire mitigation, and cultural
          preservation. In 2016, a prescribed burn was conducted in Garcia
          Canyon and Pargin Mountain to highlight its ecological benefits and
          cultural significance of controlled burns as part of traditional
          ecological knowledge. The analysis underscores the Tribe's role in
          leading sustainable land management practices that align traditional
          knowledge with contemporary forestry techniques. The Southern Ute
          Indian Tribe's adoption of prescribed burning exemplifies this
          integration of ancestral practices with modern forestry.
        </p>

        <p className="mb-6">
          The main reason why these prescribed burns can mitigate the risk of
          uncontrolled wildfires is by reducing the accumulation of dead
          underbrush and other flammable materials. Additionally, the burns were
          intended to restore ponderosa pine stands, increase forage
          availability, and improve habitats for various wildlife species. The
          2016 prescribed burn involved approximately 70 personnel from various
          agencies, including the Bureau of Indian Affairs, Navajo Nation, Ute
          Mountain Ute Tribe, Jicarilla Apache Tribe, Mescalero Apache Tribe,
          Zuni Pueblo, Los Pinos Fire Department, and the BIA Southwest Regional
          Office.
        </p>

        <p className="mb-6">
          Beyond ecological considerations and partnerships, prescribed burning
          holds cultural importance for the Southern Ute Indian Tribe.
          Traditionally, fiire has been used in various ceremonies and as a
          means of land stewardship. The integration of prescribed burns into
          contemporary land management reflects a continuation of these
          practices, reinforcing cultural identity and sovereignty. By actively
          managing their lands through fire, the Tribe not only exercises
          self-determination and honors ancestral knowledge systems, but it
          demonstrates a holistic approach to land stewardship that balances
          ecological health with cultural preservation.This case study
          emphasizes the potential for Indigenous-led initiatives to inform and
          enhance broader land management strategies in the face of
          environmental challenges.
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

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Sources</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <p>
                <strong>Southern Ute Drum. (2016, September 16)</strong>{" "}
                "Prescribed fires conducted on reservation"{" "}
                <em>The Southern Ute Drum.</em>
                <Link
                  href="https://www.sudrum.com/news/2016/09/16/prescribed-fires-conducted-on-reservation/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.sudrum.com/news/2016/09/16/prescribed-fires-conducted-on-reservation/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Southern Ute Indian Tribe. (n.d.)</strong> "Forestry
                Division"{" "}
                <em>Southern Ute Indian Tribe – Natural Resources.</em>
                <Link
                  href="https://www.southernute-nsn.gov/natural-resources/forestry/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.southernute-nsn.gov/natural-resources/forestry/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Southern Ute Indian Tribe. (2025, April 10)</strong>{" "}
                "BIA Southern Ute Agency prescribed burn pile news release"{" "}
                <em>Southern Ute Indian Tribe – Newsroom.</em>
                <Link
                  href="https://www.southernute-nsn.gov/2025/04/10/bia-southern-ute-agency-prescribed-burn-pile-news-release/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.southernute-nsn.gov/2025/04/10/bia-southern-ute-agency-prescribed-burn-pile-news-release/
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
