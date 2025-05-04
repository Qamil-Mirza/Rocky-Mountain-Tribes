import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


interface ResourceCardProps {
    title: string
    description: string
    link: string
    type: string
    image: string
    tribes: string[]
  }
  
  function ResourceCard({ title, description, link, type, image, tribes }: ResourceCardProps) {
    return (
      <Card className="overflow-hidden flex flex-col h-full">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-[#5c4033]">{type}</Badge>
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {tribes.map((tribe, index) => (
              <Badge key={index} variant="outline" className="mr-1 mb-1">
                {tribe}
              </Badge>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>{description}</p>
        </CardContent>
        <CardFooter className='p-3'>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-[#5c4033] hover:bg-[#7d5a48]">
              View Resource <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

export default ResourceCard
