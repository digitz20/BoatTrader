
"use client"

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface BoatDetailImageGalleryProps {
    images: string[];
    boatName: string;
}

export function BoatDetailImageGallery({ images, boatName }: BoatDetailImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div>
            <Card className="overflow-hidden mb-4">
                 <Image 
                    src={selectedImage} 
                    alt={`Main image for ${boatName}`}
                    width={800} 
                    height={600} 
                    className="aspect-video w-full object-cover" 
                    data-ai-hint="boat"
                />
            </Card>
            <div className="grid grid-cols-5 md:grid-cols-8 gap-2">
                {images.map((image, index) => (
                    <button key={index} onClick={() => setSelectedImage(image)} className={cn("overflow-hidden rounded-md border-2", selectedImage === image ? "border-primary" : "border-transparent")}>
                        <Image 
                            src={image} 
                            alt={`${boatName} - Thumbnail ${index + 1}`}
                            width={100} 
                            height={75} 
                            className="aspect-video w-full object-cover"
                            data-ai-hint="boat" 
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}
