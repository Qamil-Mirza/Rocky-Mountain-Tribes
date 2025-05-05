import React from "react";
import { NavBar } from "@/components/Navbar";
import Image from "next/image";
import utetreaty from "@/public/images/utetreaty.png";
import yellowstone from "@/public/images/yellowstone.jpg";
import rockymountain from "@/public/images/rocky-mountain-backdrop.jpg";
import yosemite from "@/public/images/yosemite.jpg";
import grandcanyon from "@/public/images/grandcanyon.jpg";
import greatsmoky from "@/public/images/greatsmoky.jpg";
import { HistoricalTimeline } from "@/components/Timeline";

function page() {
  return (
    <div className="bg-background min-h-screen">
      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={utetreaty.src}
          alt="Background image of rocky mountains"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            Tourism and Policy
          </h1>
          <p className="relative z-20 text-center text-2xl font-light tracking-tighter text-primary">
            Understanding the impact of tourism on Indigineous well-being and
            the policies that can mitigate it.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-bold text-3xl">
          Greater Yellowstone (established 1872)
        </h2>
        <div className="flex flex-col items-center justify-center py-5">
          <Image
            src={yellowstone.src}
            alt="Background image of rocky mountains"
            width={500}
            height={500}
            className="rounded-lg shadow-lg mb-4"
          />
          <span>Yellowstone National Park</span>
        </div>
        <p className="mb-4">
          Long before Yellowstone became the world’s first national park, its
          geysers, valleys, and rivers were integral to the lifeways of at least
          27 tribes—including the Eastern Shoshone (Sheepeaters), Bannock, Nez
          Perce (Nimiipuu), Blackfeet, Crow, and others—who followed seasonal
          migrations for bison, elk, trout, and camas root harvesting.
          Archaeological evidence shows human presence in the region dating back
          over 15,000 years, with horse acquisition in the early 1700s greatly
          expanding tribal hunting ranges.
        </p>

        <p>
          After the 1868 Treaty of Fort Laramie, the Sheepeaters ceded much of
          this land but retained hunting rights. Yet those rights were
          unratified and soon nullified: by 1877, Chief Joseph’s band of roughly
          750 Nez Perce, fleeing U.S. Army forces, passed through Yellowstone in
          a desperate bid for freedom—an episode now commemorated by Nez Perce
          Creek—only to surrender in Montana. In 1895, settlers forcibly
          destroyed a Bannock encampment in Jackson Hole, killing and displacing
          families, and the 1896 “Racehorse” court decision stripped all
          off-reservation hunting rights, effectively criminalizing subsistence
          practices—all to protect an imagined “wild” landscape that was already
          deeply managed by its original stewards.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-bold text-3xl">
          Rocky Mountain National Park (Established 1915)
        </h2>
        <div className="flex flex-col items-center justify-center py-5">
          <Image
            src={rockymountain.src}
            alt="Background image of rocky mountains"
            width={500}
            height={500}
            className="rounded-lg shadow-lg mb-4"
          />
          <span>Rocky Mountain National Park</span>
        </div>
        <p>
          For millennia the Ute and later the Eastern Arapaho traversed the
          Estes Valley, burning meadows to promote elk habitat, gathering
          chokecherries and medicinal roots, and fishing trout-rich streams on
          both sides of the Continental Divide. Seasonal encampments clustered
          around Grand Lake and Lake Granby for summer hunting, while winter
          villages sat at lower elevations. After gold was discovered in 1858,
          massive influxes of miners and settlers overwhelmed the region. Broken
          treaties—the 1851 and 1861 Treaties of Fort Laramie and Fort
          Wise—rapidly confined tribes to reservations;{" "}
          <span className="font-bold">
            the Arapaho were forcibly relocated, with the Southern Arapaho
            removed to Oklahoma after 1867, and the Northern Arapaho settled on
            the Wind River Reservation in Wyoming by 1878. The Ute, meanwhile,
            were pushed into southwestern Colorado and Utah by the 1880s.
          </span>{" "}
          When RMNP was proclaimed in 1915, those displacement policies were
          enshrined: customary access for subsistence, ceremony, and stewardship
          ceased virtually overnight.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-bold text-3xl">
          Yosemite National Park (Established 1890){" "}
        </h2>
        <div className="flex flex-col items-center justify-center py-5">
          <Image
            src={yosemite.src}
            alt="Background image of rocky mountains"
            width={500}
            height={500}
            className="rounded-lg shadow-lg mb-4"
          />
          <span>Yosemite National Park</span>
        </div>
        <p>
          Human habitation in Yosemite Valley dates back at least 3,000 years,
          and throughout the Sierra Nevada for nearly 8,000–10,000 years. By the
          late 18th century, Southern and Central Sierra Miwok peoples, along
          with Mono, Paiute, and Ahwahnechee bands, managed the valley’s oak
          woodlands—gathering acorns from oak groves, trading obsidian, and
          conducting annual “Big Times” ceremonies. The 1849 Gold Rush triggered
          the Mariposa War (1850–51), when the state-authorized Mariposa
          Battalion, led by settler James Savage, attacked Ahwahnechee villages,
          burned food stores, and marched survivors to the Fresno River
          Reservation. Although some Ahwahnechee later returned under Chief
          Tenaya, further violence and disease decimated populations. When
          Yosemite Valley was ceded to California in 1864 and then incorporated
          into the national park in 1890, Miwok acorn harvesting, obsidian
          trade, and village sites like Ahwahnee were closed to Indigenous use,
          even as their cultural labor and knowledge were appropriated to build
          tourism infrastructure.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-bold text-3xl">
          Grand Canyon National Park (Established 1919)
        </h2>
        <div className="flex flex-col items-center justify-center py-5">
          <Image
            src={grandcanyon.src}
            alt="Background image of rocky mountains"
            width={500}
            height={500}
            className="rounded-lg shadow-lg mb-4"
          />
          <span>Grand Canyon National Park</span>
        </div>
        <p>
          The Grand Canyon’s sheer walls and river corridors have sustained
          Hualapai, Havasupai (“people of the blue-green waters”), Hopi, Navajo,
          Zuni, Kaibab Paiute, and other tribes for at least 2,000 years, if not
          much longer. These communities farmed in canyon bottoms, hunted mule
          deer on plateaus, and held origin-story ceremonies in cliff alcoves.
          1882 President Chester A. Arthur unilaterally established a mere
          518-acre Havasupai reservation, cutting the tribe off from most of
          their ancestral lands. When Congress created Grand Canyon NP in 1919,
          the park surrounded that reservation, prohibiting tribal access to
          sacred springs, cave shrines, and grazing lands. Only after decades of
          litigation—culminating in the 1975 Grand Canyon National Park
          Enlargement Act—Congress returned roughly 188,077 acres to the
          Havasupai.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-bold text-3xl">
          Great Smoky Mountains National Park (Established 1934)
        </h2>
        <div className="flex flex-col items-center justify-center py-5">
          <Image
            src={greatsmoky.src}
            alt="Background image of rocky mountains"
            width={500}
            height={500}
            className="rounded-lg shadow-lg mb-4"
          />
          <span>Grand Canyon National Park</span>
        </div>
        <p>
          For over 11,000 years, the Cherokee people, who call these
          mist-shrouded peaks “Shaconag,e”—lived in year-round towns, farmed
          river bottoms, and wove extensive trails across what is now Tennessee
          and North Carolina. Following the 1838 Trail of Tears, most Cherokee
          were forcibly removed to Oklahoma, but a band led by Yonaguska and
          William Thomas remained in the Oconaluftee region. When Congress
          authorized GSMNP in 1926 (formally created in 1934), much of the
          Qualla Boundary land was purchased or ceded under pressure, and
          Cherokee access was restricted, though a small enclave was maintained
          by buying back parcels or through right-of-way agreements on the Blue
          Ridge Parkway. Today, the Eastern Band of Cherokee Indians stewards
          both the park’s cultural interpretation and their Qualla Boundary
          homeland, preserving language, basketry, and traditional ecological
          knowledge through museums and living-culture villages.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-bold text-3xl">Tourism: A doubled-Edged Sword</h2>
        <p className="mb-4">
          The very creation of our National Parks served as a tool of Indigenous
          removal. Once lands were “protected” under federal designation,
          treaties were ignored or rescinded, and customary hunting, fishing,
          and ceremonial access were outlawed. Ute and Arapaho people who had
          stewarded these valleys for millennia found themselves barred from the
          rivers where they once spear-fished, the meadows where they picked
          berries, and the high passes where they held seasonal ceremonies. At
          the same time, park service and concession jobs were often low-wage
          positions, relegating Indigenous laborers to roles that served the
          recreational pursuits of white tourists rather than honoring their own
          deep ecological knowledge and traditions.
        </p>
        <p className="mb-4">
          Yet tourism can also commodify and misrepresent Indigenous cultures in
          harmful ways. When sacred ceremonies are repackaged as staged
          “performances,” or when authentic crafts are mass-produced and sold as
          mere souvenirs, the spiritual and cultural significance of those
          practices is stripped away. Visitors may leave with little more than a
          snapshot or trinket—an experience that reinforces the idea of
          Indigenous heritage as a relic of the past, rather than a living,
          evolving presence. This form of cultural exploitation perpetuates
          stereotypes and erases the complex realities of contemporary tribal
          life.
        </p>
        <p>
          Despite these risks, tourism holds tremendous potential as a platform
          for Indigenous self-determination and cultural revitalization. By
          supporting tribal-owned guiding services, campgrounds, and
          interpretive centers, visitors help keep economic benefits within
          Native communities. Authentic storytelling tours—led by Ute and
          Arapaho experts—can transmit language, ecological wisdom, and oral
          histories to younger generations, ensuring continuity of traditions.
          When tribal artisans sell their crafts through fair-trade cooperatives
          or visitor center boutiques, they control the narrative and retain the
          full value of their work. In this way, tourism becomes not a means of
          erasure, but a powerful tool for reclaiming land, language, and
          legacy.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-background">
        <HistoricalTimeline />
      </section>
    </div>
  );
}

export default page;
