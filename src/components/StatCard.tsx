import React, { JSX } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShineBorder } from "./magicui/shine-border";
import { title } from "process";

type colorTheme = keyof typeof colorThemes;

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon?: JSX.Element;
  colorTheme?: colorTheme;
  shineColors?: string[];
}
const colorThemes = {
    green: {
      title: "text-green-800",
      value: "text-green-700",
      shine: ["#6EE7B7", "#3ABFA1", "#10B981"],
    },
    blue: {
      title: "text-blue-800",
      value: "text-blue-700",
      shine: ["#93C5FD", "#3B82F6", "#1D4ED8"],
    },
    orange: {
      title: "text-orange-800",
      value: "text-orange-700",
      shine: ["#FCD34D", "#FB923C", "#F97316"],
    },
    red: {
      title: "text-red-800",
      value: "text-red-700",
      shine: ["#FCA5A5", "#EF4444", "#B91C1C"],
    },
    black: {
      title: "text-black-800",
      value: "text-black-700",
      shine: ["#D1D5DB", "#9CA3AF", "#6B7280"],
    },
  };
  

function StatCard({
  title,
  value,
  description,
  icon,
  colorTheme = "black",
  shineColors,
}: StatCardProps) {
  return (
<Card className="relative w-full max-w-md overflow-hidden p-6">
  <ShineBorder shineColor={shineColors || colorThemes[colorTheme]?.shine || colorThemes.black.shine} />
  <CardHeader>
    <CardTitle className={`text-2xl font-semibold flex items-center ${colorThemes[colorTheme]?.title}`}>
      <span>{title}</span>
    </CardTitle>
  </CardHeader>
  <CardContent className="flex flex-col flex-grow justify-between space-y-2">
    <div className={`text-3xl flex flex-row items-center font-bold break-words ${colorThemes[colorTheme]?.value}`}>
    {icon && <span>{icon}</span>}{value}
    </div>
    <p className="text-sm text-gray-600 leading-snug">
      {description}
    </p>
  </CardContent>
</Card>

  );
}

export default StatCard;
