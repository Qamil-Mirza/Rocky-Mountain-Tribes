/* eslint-disable @next/next/no-img-element */

"use client";
import { Lens } from "@/components/magicui/lens";

const placeholderImg =
  "https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface ChartZoomProps {
  img: string;
  caption?: string;
}

export function ChartZoom({ img, caption }: ChartZoomProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lens
        zoomFactor={2}
        lensSize={100}
        isStatic={false}
        ariaLabel="Zoom Area"
      >
        <img
          src={img || placeholderImg}
          alt="image placeholder"
          width={500}
          height={500}
        />
      </Lens>
      <p className="text-sm text-gray-500 mt-2 px-6">
        {caption || ''}
      </p>
    </div>
  );
}
