import React from "react";
import { Building2, BookOpen, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from "@/components/ResourceCard";
import { NavBar } from "@/components/Navbar";
import Image from "next/image";

// IMAGE IMPORTS
import aridUteMountain from "@/public/images/arid-ute-mountain.jpg";

// MOCK DATA
// Sample data
const organizations = [
  {
    title: "Native American Rights Fund",
    description:
      "Legal organization dedicated to asserting and defending the rights of Indian tribes and organizations.",
    link: "https://www.narf.org/",
    image: aridUteMountain.src,
    tribes: ["Multiple Tribes"],
  },
  {
    title: "American Indian College Fund",
    description:
      "Provides scholarships and support for Native American students and tribal colleges.",
    link: "https://collegefund.org/",
    image: aridUteMountain.src,
    tribes: ["Multiple Tribes"],
  },
  {
    title: "Cultural Survival",
    description:
      "Cultural Survival advocates for Indigenous Peoples' rights and supports Indigenous communities’ self-determination, cultures and political resilience since 1972.",
    link: "https://www.culturalsurvival.org/",
    image: aridUteMountain.src,
    tribes: ["Multiple Tribes"],
  },
];

const articles = [
  {
    title: "Traditional Ecological Knowledge of the Rocky Mountains",
    description:
      "Academic paper exploring indigenous knowledge systems related to Rocky Mountain ecosystems.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Blackfeet", "Shoshone", "Salish"],
  },
  {
    title: "The Ute People: History and Contemporary Life",
    description:
      "Comprehensive article about the history, culture, and modern challenges of the Ute tribes.",
    link: "https://www.southernute-nsn.gov/history/",
    image: aridUteMountain.src,
    tribes: ["Ute"],
  },
  {
    title: "Indigenous Place Names in the Rocky Mountains",
    description:
      "Research on original indigenous place names and their meanings throughout the mountain range.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Multiple Tribes"],
  },
];

const videos = [
  {
    title: "Voices of the Shoshone-Bannock",
    description:
      "Documentary featuring elders sharing stories and cultural knowledge of the Shoshone-Bannock tribes.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Shoshone", "Bannock"],
  },
  {
    title: "The Blackfeet Nation: Guardians of the Rockies",
    description:
      "Film exploring the Blackfeet people's historical and contemporary relationship with the mountains.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Blackfeet"],
  },
  {
    title: "Sacred Sites of the Rocky Mountains",
    description:
      "Documentary about culturally significant locations and their importance to indigenous communities.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Multiple Tribes"],
  },
];

const books = [
  {
    title: "The Utes: A Forgotten People",
    description:
      "Comprehensive history of the Ute tribes and their cultural heritage.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Ute"],
  },
  {
    title: "Blackfeet Tales of Glacier National Park",
    description:
      "Collection of traditional stories and legends from the Blackfeet Nation.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Blackfeet"],
  },
  {
    title: "Indigenous Peoples of the Rocky Mountain Region",
    description:
      "Academic text covering the diverse indigenous cultures of the Rocky Mountains.",
    link: "#",
    image: aridUteMountain.src,
    tribes: ["Multiple Tribes"],
  },
];

function page() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar transparent={true} />

      <section className="p-3 relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen">
        <Image
          src={aridUteMountain.src}
          alt="Background image of rocky mountains"
          fill
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="p-3">
          <h1 className="relative z-20 text-center text-6xl font-bold tracking-tighter text-primary mb-4">
            Resources
          </h1>
          <p className="relative z-20 text-center text-2xl font-light tracking-tighter text-primary">
            Learn more about the indigenous peoples of the Rocky Mountains
          </p>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="w-min-screen mx-auto mb-4">
              <TabsList className="flex space-x-1 border-b">
                <TabsTrigger value="all" className="hover:cursor-pointer">
                  All
                </TabsTrigger>
                <TabsTrigger value="ngos" className="hover:cursor-pointer">
                  NGOs
                </TabsTrigger>
                <TabsTrigger value="articles" className="hover:cursor-pointer">
                  Articles
                </TabsTrigger>
                <TabsTrigger value="videos" className="hover:cursor-pointer">
                  Videos
                </TabsTrigger>
                <TabsTrigger value="books" className="hover:cursor-pointer">
                  Books
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Building2 className="mr-2" />
                  Organizations & NGOs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {organizations.map((org, index) => (
                    <ResourceCard
                      key={index}
                      title={org.title}
                      description={org.description}
                      link={org.link}
                      type="Organization"
                      image={org.image}
                      tribes={org.tribes}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <BookOpen className="mr-2" />
                  Articles & Publications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <ResourceCard
                      key={index}
                      title={article.title}
                      description={article.description}
                      link={article.link}
                      type="Article"
                      image={article.image}
                      tribes={article.tribes}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Video className="mr-2" />
                  Videos & Documentaries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <ResourceCard
                      key={index}
                      title={video.title}
                      description={video.description}
                      link={video.link}
                      type="Video"
                      image={video.image}
                      tribes={video.tribes}
                    />
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="ngos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizations.map((org, index) => (
                  <ResourceCard
                    key={index}
                    title={org.title}
                    description={org.description}
                    link={org.link}
                    type="Organization"
                    image={org.image}
                    tribes={org.tribes}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <ResourceCard
                    key={index}
                    title={article.title}
                    description={article.description}
                    link={article.link}
                    type="Article"
                    image={article.image}
                    tribes={article.tribes}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <ResourceCard
                    key={index}
                    title={video.title}
                    description={video.description}
                    link={video.link}
                    type="Video"
                    image={video.image}
                    tribes={video.tribes}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="books">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book, index) => (
                  <ResourceCard
                    key={index}
                    title={book.title}
                    description={book.description}
                    link={book.link}
                    type="Book"
                    image={book.image}
                    tribes={book.tribes}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-[#5c4033] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About This Resource</h3>
              <p>
                This collection aims to provide educational resources about the
                indigenous peoples of the Rocky Mountains. We strive to include
                accurate, respectful information from reliable sources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contribute</h3>
              <p>
                Know of a resource that should be included? Please contact us to
                suggest additions or corrections to this collection.
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent hover:bg-white hover:text-[#5c4033]"
              >
                Submit a Resource
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Acknowledgment</h3>
              <p>
                We acknowledge that the Rocky Mountains are the ancestral lands
                of many indigenous nations including the Ute, Shoshone,
                Blackfeet, Salish, Kootenai, and many others.
              </p>
            </div>
          </div>
          {/* 
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>© {new Date().getFullYear()} Indigenous Resources Collection</p>
          </div>
          */}
        </div>
      </footer>
    </div>
  );
}

export default page;
