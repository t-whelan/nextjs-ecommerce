"use client";
import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export default function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="hero image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center "
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "border   mr-2 cursor-pointer hover:border-blue-600",
              current === index && "  border-blue-500"
            )}
            onClick={() => setCurrent(index)}
          >
            <Image src={image} alt={"image"} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
