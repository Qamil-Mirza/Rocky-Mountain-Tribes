import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock } from "lucide-react";
import ir from "@/public/images/ir.png";
function page() {
  return (
    <div className="container min-w-screen mx-auto bg-background">
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={ir.src}
          alt="Ute Tribe Farm"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            Indigenous Resilience: Culturally Grounded Adaptation in the Face of
            Climate Change
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
            Indigenous Resilience: Culturally Grounded Adaptation in the Face of
            Climate Change
          </h1>
          <hr className="mb-4" />
        </div>

        <p className="mb-6">
          Indigenous communities throughout North America—many of which are
          situated directly in the path of accelerating environmental change—are
          taking significant and intentional steps to adapt to the growing
          threats of climate change. Far from being passive recipients of its
          consequences, these nations are drawing on profound ancestral
          relationships with the land, time-honored ecological wisdom, and
          strong intergenerational ties to shape resilient futures. With
          targeted efforts to enhance tribal capacity, many Indigenous groups
          are engaging in thorough planning efforts that intertwine cultural
          perspectives with modern science, presenting innovative and meaningful
          models for adaptation. A standout example of such an approach is the
          Blackfeet Nation’s comprehensive Climate Change Adaptation Plan, which
          exemplifies this culturally rooted, forward-looking mindset. cultural
          integrity and autonomy.
        </p>

        <p className="mb-6">
          In light of the mounting climate risks, tribes across the country are
          embracing proactive adaptation planning, with a heightened awareness
          of how health disparities make their communities especially
          vulnerable. Insights from the Climate-Ready Tribes Initiative (CRTI),
          featured in Health Affairs, highlight how these efforts reach beyond
          technical assessments. Tribes frequently rely on community-driven,
          values-based data to shape strategies that reflect their own cultural
          ideals and broader notions of wellness. Education and outreach remain
          central to these initiatives, keeping both leadership and local
          populations well-informed and actively involved in implementing best
          practices. Since 2016, the CRTI—developed by the CDC and the National
          Indian Health Board—has provided key support in the form of
          competitive grants, hands-on technical assistance, and platforms for
          peer learning among tribal professionals across the nation.
        </p>

        <p className="mb-6">
          The Blackfeet Nation’s adaptation plan, as profiled on their official
          website and within the CRTI context, brings these principles to life.
          Launched in 2016 under the guidance of the Blackfeet Environmental
          Office, the plan was deliberately inclusive—designed to span all
          governmental departments while grounding every decision in traditional
          knowledge and a shared vision for future generations. At its heart is
          a belief that the well-being of people is inseparable from the health
          of the natural world, a guiding philosophy that shaped every step of
          the planning process. By utilizing resources like the Institute for
          Tribal Environmental Professionals’ (ITEP) Adaptation Planning Toolkit
          and applying locally relevant climate forecasts, the Nation was able
          to identify vulnerabilities and chart effective responses.
        </p>

        <p className="mb-6">
          This plan is notable for its breadth and depth, presenting actionable
          adaptation goals and strategies across a range of sectors—from
          agriculture and cultural heritage to fish, forests, public health,
          land use, water resources, and wildlife. Among its achievements is a
          dedicated Climate Health Guide, supported by CRTI, which outlines
          specific health challenges and offers ways for communities to engage
          meaningfully in solutions. Importantly, the Blackfeet Nation has
          embedded climate adaptation into the broader fabric of its governance.
          The climate plan now informs key strategic documents such as the
          Agricultural Resource Management Plan and the Integrated Resource
          Management Plan. This alignment demonstrates a lasting commitment to
          resilience and sustainability woven into all aspects of tribal
          resource management.
        </p>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Sources</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <p>
                <strong>Blackfeet Nation. (n.d.)</strong> "The Blackfeet Nation
                is adapting" <em>Blackfeet Climate Change.</em>
                <Link
                  href="https://blackfeetclimatechange.com/what-kind-of-future-do-we-want/the-blackfeet-nation-is-adapting/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://blackfeetclimatechange.com/what-kind-of-future-do-we-want/the-blackfeet-nation-is-adapting/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Blackfeet Nation. (n.d.)</strong> "The Blackfeet Nation
                is adapting" <em>Blackfeet Climate Change.</em>
                <Link
                  href="https://blackfeetclimatechange.com/what-kind-of-future-do-we-want/the-blackfeet-nation-is-adapting/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://blackfeetclimatechange.com/what-kind-of-future-do-we-want/the-blackfeet-nation-is-adapting/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Martinez, R. A., et al. (2020, December)</strong>{" "}
                "Tribal Epidemiology Centers’ Public Health Authority Helps
                Address COVID-19 And Persistent Health Inequities"{" "}
                <em>Health Affairs.</em>
                <Link
                  href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00997"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00997
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
