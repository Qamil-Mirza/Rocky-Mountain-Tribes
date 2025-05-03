import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import Link from "next/link";

import React, { JSX } from "react";

interface HighlightCardProps {
  title: string;
  description: string;
  url?: string;
  icon?: JSX.Element;
  iconbgcolor?: string;
  shineColors?: string[];
}

function HighlightCard({ title, description, url, icon, iconbgcolor, shineColors }: HighlightCardProps) {
  return (
    <Card className="relative overflow-hidden max-w-[350px] w-full py-6">
      <ShineBorder shineColor={shineColors || ["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader className="text-center space-y-2">
        {icon && (
          <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${iconbgcolor || 'bg-primary'} text-primary`}>
            {icon}
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <Link href={url || "#"}>
          <Button variant="outline" className="w-full hover:cursor-pointer">
            Explore
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default HighlightCard;
