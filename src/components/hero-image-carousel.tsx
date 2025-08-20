
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  'https://servedby.boatsgroup.com/e061c2b61/?libBID=4433508',
  'https://servedby.boatsgroup.com/e061c2b61/?libBID=4463621',
  'https://servedby.boatsgroup.com/e061c2b61/?libBID=4601538',
];

export function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (randomIndex === currentIndex);
        setCurrentIndex(randomIndex);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={cn(
            'transition-opacity duration-1000 ease-in-out',
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          )}
          data-ai-hint="boat lake"
          priority={index === 0}
        />
      ))}
    </div>
  );
}
