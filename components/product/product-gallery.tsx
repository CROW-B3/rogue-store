"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
        <Image
          src={images[selectedImage]}
          alt={`${title} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-md border-2 transition-all",
                selectedImage === index
                  ? "border-primary"
                  : "border-transparent hover:border-primary/50",
              )}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12.5vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
