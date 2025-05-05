import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock } from "lucide-react";
import uteBurn from "@/public/images/ute-burn.jpg";
import ltw from "@/public/images/ltw.jpg";

function page() {
  return (
    <div className="container min-w-screen mx-auto bg-background">
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={ltw.src}
          alt="leading the way"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
          Indigenous Climate Action: Chippewa Cree & Fort Belknap Indian Community Leading the Way
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
          Indigenous Climate Action: Chippewa Cree & Fort Belknap Indian Community Leading the Way
          </h1>
          <hr className="mb-4" />
        </div>

        <p className="mb-6">
          Indigenous communities throughout the United States—especially those
          located in the Northern Rocky Mountains—are facing the mounting
          pressures of climate change, which are not only reshaping local
          ecosystems but also threatening long-standing cultural practices and
          traditional ways of life. In north-central Montana, the Chippewa Cree
          Tribe of the Rocky Boy’s Reservation and the Fort Belknap Indian
          Community, home to the Aaniiih and Nakoda peoples, have emerged as
          proactive leaders in tackling these challenges. Both Nations are
          advancing comprehensive climate adaptation efforts that combine
          Traditional Ecological Knowledge (TEK) with contemporary science,
          forging partnerships to protect their lands, natural resources, and
          cultural heritage for future generations.
        </p>

        <strong>
          The Chippewa Cree Tribe: Safeguarding Water and Cultural Identity
        </strong>

        <p className="mb-6">
          Nestled within the Bear Paw Mountains, the Chippewa Cree Tribe is
          confronting climate-related threats head-on—particularly those linked
          to increasingly frequent and severe droughts, which are worsened by a
          steady rise in temperatures. These changes place the community’s water
          sources—especially the fragile headwater wetlands—at serious risk,
          while also threatening key cultural species. Of particular concern is
          the documented decline of sweetgrass (Hierochloe odorata), a plant of
          profound spiritual and cultural significance. Observations from Tribal
          Elders and monitoring data have confirmed this decline, highlighting
          the deep connection between environmental health and cultural
          preservation.
        </p>

        <p className="mb-6">
          To address these intertwined challenges, the Tribe has developed a
          layered climate strategy. Building on groundwork laid through a Bureau
          of Indian Affairs (BIA)-supported adaptation initiative from around
          FY2014, the Tribe recently completed a Priority Climate Action Plan
          (PCAP) for 2024. This plan revisits and expands upon earlier goals,
          focusing both on reducing local greenhouse gas emissions and adapting
          to the realities of increased drought. Simultaneously, the Tribe is
          advancing a Drought Contingency Plan, supported by NOAA’s National
          Integrated Drought Information System (NIDIS), which will be
          integrated into their broader Climate Change Plan.
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

        <p className="mb-6">
          Several key strategies are already in motion. The Tribe’s Wetlands
          Program Plan (FY2022–2024) guides monitoring and restoration
          activities in essential headwater areas to bolster water quality and
          improve storage capacity. A particularly innovative effort involves
          assisted migration for sweetgrass—relocating the species to
          higher-elevation wetlands in hopes of improving survival, with
          guidance from both TEK and scientific assessments. Alongside
          ecological efforts, the PCAP also outlines sustainability initiatives
          such as promoting solar energy, installing EV charging infrastructure,
          and expanding food sovereignty programs. These actions are made
          possible through partnerships with agencies including the EPA, BIA,
          and NOAA, as well as collaboration across tribal departments.
        </p>

        <strong className="mb-6">
          The Fort Belknap Indian Community: Forest Health and Rangeland
          Adaptation
        </strong>

        <p className="mb-6">
          The Fort Belknap Indian Community, located near the Little Rocky
          Mountains, is grappling with similar climate-related pressures.
          Warming temperatures, erratic precipitation patterns, and intensifying
          drought are depleting water supplies, degrading rangelands essential
          for both buffalo and livestock, heightening wildfire threats in their
          only mountain range, and impacting traditional food plants such as
          serviceberries. These disruptions extend beyond the environment,
          endangering food systems, biodiversity, livelihoods, and sacred sites.
        </p>
        <p className="mb-6">
          Since 2015, a full-time Climate Change Coordinator has led Fort
          Belknap’s comprehensive climate planning efforts. In partnership with
          the Center for Large Landscape Conservation (CLLC) and other allies,
          the community developed the Fort Belknap Climate Change Plan 2023.
          This document integrates both TEK and extensive community input to
          identify key vulnerabilities and chart an actionable path forward.
        </p>
        <p className="mb-6">
          At the heart of the Tribe’s strategy lies the Little Rockies Forest
          Resilience (LRFR) project, which utilizes adaptive management
          approaches—most notably forest thinning—to mitigate wildfire risks,
          enhance ecosystem resilience to drought, protect carbon storage, and
          maintain wildlife habitat. Parallel efforts to improve rangeland
          conditions include meticulous monitoring, enhanced grazing practices,
          and infrastructure upgrades like fencing and water systems, supported
          by the NRCS and BIA. On the food security front, the Tribe is
          investigating ways to sustain traditional berry species, including
          plans to establish a tribal nursery. Fort Belknap also advocates for
          recognition of its water rights and for a greater Indigenous presence
          in broader climate policy conversations, reinforcing the role of
          Native stewardship in addressing ecological crises. These programs are
          bolstered by collaborations with CLLC, BIA, NRCS, and grant support
          from sources like the WCS Climate Adaptation Fund.
        </p>
        <p className="mb-6">
          Together, the climate adaptation initiatives of the Chippewa Cree and
          Fort Belknap Nations exemplify Indigenous-led resilience rooted in
          cultural knowledge and pragmatic planning. By restoring vulnerable
          wetlands, protecting sacred plants like sweetgrass, bolstering forest
          health, and ensuring food sovereignty, these communities are not only
          defending their homelands and heritage—they are setting a powerful
          precedent for community-driven climate adaptation on a wider scale.
        </p>
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Sources</h2>
          <ol className="list-decimal pl-5 space-y-3">
          <li>
              <p>
                <strong>Chippewa Cree Tribe. (n.d.)</strong> "Chippewa Cree
                Pollution Control and Prevention Plan"{" "}
                <em>Environmental Protection Agency.</em>
                <Link
                  href="https://www.epa.gov/system/files/documents/2024-04/chippewa-cree-pcap.pdf"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.epa.gov/system/files/documents/2024-04/chippewa-cree-pcap.pdf
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>
                  National Integrated Drought Information System. (2024,
                  December 9)
                </strong>{" "}
                "NIDIS Awards $1.95 Million to Support Tribal Drought
                Resilience" <em>Drought.gov.</em>
                <Link
                  href="https://www.drought.gov/news/nidis-awards-195-million-support-tribal-drought-resilience-2024-12-09"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.drought.gov/news/nidis-awards-195-million-support-tribal-drought-resilience-2024-12-09
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>
                  National Association of Wetland Managers. (2023, April)
                </strong>{" "}
                "Wetland Headwater Monitoring at Rocky Boy's Indian Reservation"{" "}
                <em>Tribal Wetland Programs Webinar.</em>
                <Link
                  href="https://nawm.org/pdf_lib/tribal_wetland_programs_webinar/wetland_headwater_monitoring_rocky_boys_indian_reservation_042023_gopher.pdf"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://nawm.org/pdf_lib/tribal_wetland_programs_webinar/wetland_headwater_monitoring_rocky_boys_indian_reservation_042023_gopher.pdf
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>American Bar Association. (2025)</strong> "Chippewa Cree
                Teachings, Constitutional Amendments, and the Climate Crisis"{" "}
                <em>Natural Resources & Environment.</em>
                <Link
                  href="https://www.americanbar.org/groups/environment_energy_resources/resources/natural-resources-environment/2025-winter/chippewa-cree-teachings-constitutional-amendments-climate-crisis/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.americanbar.org/groups/environment_energy_resources/resources/natural-resources-environment/2025-winter/chippewa-cree-teachings-constitutional-amendments-climate-crisis/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Bureau of Indian Affairs. (2014)</strong> "2014 Award
                Summary" <em>Tribal Climate Resilience Program.</em>
                <Link
                  href="https://www.bia.gov/sites/default/files/dup/assets/bia/ots/tcrp/2014AwardSummary.pdf"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.bia.gov/sites/default/files/dup/assets/bia/ots/tcrp/2014AwardSummary.pdf
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Drought.gov. (n.d.)</strong> "Drought Resilience
                Planning and Assisted Migration for Imperiled Sweetgrass"{" "}
                <em>Drought Research.</em>
                <Link
                  href="https://www.drought.gov/drought-research/drought-resilience-planning-and-assisted-migration-imperiled-sweetgrass"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.drought.gov/drought-research/drought-resilience-planning-and-assisted-migration-imperiled-sweetgrass
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Chippewa Cree Tribe. (2022, February)</strong> "Chippewa
                Cree at Rocky Boy Reservation FY 2022-2024 Updated Wetland
                Program Plan" <em>Environmental Protection Agency.</em>
                <Link
                  href="https://www.epa.gov/system/files/documents/2022-02/chippewa-cree-at-rocky-boy-reservation-fy-2022-2024-updated-wpp.pdf"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.epa.gov/system/files/documents/2022-02/chippewa-cree-at-rocky-boy-reservation-fy-2022-2024-updated-wpp.pdf
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Wildlife Conservation Society. (n.d.)</strong> "Center
                for Large Landscape Conservation"{" "}
                <em>WCS Climate Adaptation Fund.</em>
                <Link
                  href="https://www.wcsclimateadaptationfund.org/center-for-large-landscape-conservation-1"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.wcsclimateadaptationfund.org/center-for-large-landscape-conservation-1
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Natural Resources Conservation Service. (n.d.)</strong>{" "}
                "Sustaining the Land: Tribal Land Management"{" "}
                <em>Montana State Offices News.</em>
                <Link
                  href="https://www.nrcs.usda.gov/state-offices/montana/news/sustaining-the-land-tribal-land-management"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.nrcs.usda.gov/state-offices/montana/news/sustaining-the-land-tribal-land-management
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Large Landscape Conservation. (n.d.)</strong> "FBIC
                Climate Change Planning" <em>News.</em>
                <Link
                  href="https://largelandscapes.org/news/fbic-climate-change-planning/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://largelandscapes.org/news/fbic-climate-change-planning/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Large Landscape Conservation. (2020)</strong> "Annual
                Report 2020" <em>Reports.</em>
                <Link
                  href="https://largelandscapes.org/wp-content/uploads/2020/12/Annual-Report-2020.pdf"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://largelandscapes.org/wp-content/uploads/2020/12/Annual-Report-2020.pdf
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Protect Our Winters. (n.d.)</strong> "Fort Belknap"{" "}
                <em>Climate Initiatives.</em>
                <Link
                  href="https://protectourwinters.org/fort-belknap/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://protectourwinters.org/fort-belknap/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Large Landscape Conservation. (n.d.)</strong> "Climate
                Adaptation Plans" <em>News.</em>
                <Link
                  href="https://largelandscapes.org/news/climate-adaptation-plans/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://largelandscapes.org/news/climate-adaptation-plans/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Environmental Protection Agency. (n.d.)</strong> "EPA
                Regional Climate Adaptation Contacts and State Websites"{" "}
                <em>Air, RCRA, and Climate.</em>
                <Link
                  href="https://www.epa.gov/arc-x/epa-regional-climate-adaptation-contacts-state-websites"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.epa.gov/arc-x/epa-regional-climate-adaptation-contacts-state-websites
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Fort Belknap Indian Community. (n.d.)</strong> "Forms
                and Documents" <em>Official Website.</em>
                <Link
                  href="https://ftbelknap.org/forms%2Fdocuments"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://ftbelknap.org/forms%2Fdocuments
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Tribal Climate Adaptation Guidebook. (n.d.)</strong>{" "}
                "Blackfeet Nation Example" <em>Tribal Climate Adaptation.</em>
                <Link
                  href="https://tribalclimateadaptationguidebook.org/tribal-example/blackfeet-nation/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://tribalclimateadaptationguidebook.org/tribal-example/blackfeet-nation/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Blackfeet Indian Tribe. (2024, April)</strong>{" "}
                "Blackfeet Indian Tribe Pollution Control and Prevention Plan"{" "}
                <em>Environmental Protection Agency.</em>
                <Link
                  href="https://www.epa.gov/system/files/documents/2024-04/blackfeet-indian-tribe-pcap.pdf"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.epa.gov/system/files/documents/2024-04/blackfeet-indian-tribe-pcap.pdf
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Confederated Salish and Kootenai Tribes. (n.d.)</strong>{" "}
                "Climate" <em>Official Website.</em>
                <Link
                  href="https://cskt.org/climate/"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://cskt.org/climate/
                </Link>
              </p>
            </li>
            <li>
              <p>
                <strong>Drought.gov. (n.d.)</strong> "Native Drought Resilience:
                Confederated Salish and Kootenai Tribes Climate and Drought
                Adaptation" <em>Drought Research.</em>
                <Link
                  href="https://www.drought.gov/drought-research/native-drought-resilience-confederated-salish-kootenai-tribes-climate-drought-adaptation"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  https://www.drought.gov/drought-research/native-drought-resilience-confederated-salish-kootenai-tribes-climate-drought-adaptation
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
