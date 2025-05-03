import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";  
import { Button } from "@/components/ui/button";

import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

function CasestudyCard({ title, description, image, url }: CaseStudyCardProps) {
    return (
      <Card className="relative max-w-md shadow-none h-full">
        <CardHeader className="p-0 overflow-hidden rounded-t-md">
          <div className="relative h-48 w-full">
            <Image 
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
  
        <CardContent>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
  
        <CardFooter className="py-4">
          <Link href={url}>
            <Button className='border-2 bg-white text-black hover:cursor-pointer hover:bg-black hover:text-white'>Learn More</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }
  

export default CasestudyCard
