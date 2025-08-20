
"use client"

import Image from "next/image";
import { Card } from "./ui/card";

interface BoatDetailImageGalleryProps {
    images: string[];
    boatName: string;
}

export function BoatDetailImageGallery({ images, boatName }: BoatDetailImageGalleryProps) {
    const mainImage = images[0];

    return (
        <div>
            <Card className="overflow-hidden mb-4 bg-gray-100">
                 <Image 
                    src={mainImage} 
                    alt={`Main image for ${boatName}`}
                    width={800} 
                    height={600} 
                    className="aspect-video w-full object-contain" 
                    data-ai-hint="boat"
                />
            </Card>
        </div>
    )
}
