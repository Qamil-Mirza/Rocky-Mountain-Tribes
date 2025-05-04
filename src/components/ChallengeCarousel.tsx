import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Challenge = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

interface ChallengeCarouselProps {
  challenges: Challenge[];
}

function ChallengeCarousel({ challenges }: ChallengeCarouselProps) {
  return (
    <Carousel className="w-full max-w-4xl mx-auto relative">
      <CarouselContent>
        {challenges.map((challenge) => (
          <CarouselItem
            key={challenge.id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="relative overflow-hidden h-72 rounded-lg">
                <Image
                  src={challenge.image || "/placeholder.svg"}
                  alt={challenge.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-bold">{challenge.title}</h3>
                  <p className="text-sm mb-3">{challenge.description}</p>
                  <Button
                    asChild
                    className="w-fit bg-white text-black hover:bg-black hover:text-white"
                  >
                    <a href={challenge.link}>Learn More</a>
                  </Button>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 md:-left-8 top-[47%] -translate-y-1/2 z-30 hover:cursor-pointer" />
      <CarouselNext className="absolute right-2 md:-right-8 top-[47%] -translate-y-1/2 z-30 hover:cursor-pointer" />
    </Carousel>
  );
}

export default ChallengeCarousel;
