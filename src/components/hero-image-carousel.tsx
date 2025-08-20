
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  'https://servedby.boatsgroup.com/e061c2b61/?libBID=4433508',
  'https://servedby.boatsgroup.com/e061c2b61/?libBID=4463621',
  'https://images.boattrader.com/resize/1/11/13/9031113_20230906080646186_1_LARGE.jpg?w=800&h=600&t=1736521177000&exact',
  'https://servedbyadbutler.com/getad.img/;libID=4598090',
  'https://images.boatsgroup.com/images/1/upload/kadeykrogennewhero9123.png',
  'https://images.boatsgroup.com/images/1/upload/hanoverhero41124.png',
  'https://servedby.boatsgroup.com/e061c2b61/?libBID=4601538',
];

export function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000); // Change image every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

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
