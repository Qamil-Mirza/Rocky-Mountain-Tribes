import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-lg bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700 text-gray-100">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <Image
          src={caseStudy.image || "/placeholder.svg"}
          alt={caseStudy.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2 border-b border-gray-700/50">
        <h3 className="text-xl font-bold tracking-tight text-white">
          {caseStudy.title}
        </h3>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <p className="text-gray-300">{caseStudy.description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Link
          href={caseStudy.url}
          className="w-full"
        >
          <Button 
            variant="default" 
            className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 border border-gray-600"
          >
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
