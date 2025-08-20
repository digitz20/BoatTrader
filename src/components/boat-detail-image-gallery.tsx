
"use client"

import { useState } from "react";
import { Card } from "./ui/card";
import { ArrowLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BoatDetailImageGalleryProps {
    images: string[];
    boatName: string;
}

export function BoatDetailImageGallery({ images, boatName }: BoatDetailImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const mainImage = images[0];

    return (
        <div>
            <Card className="overflow-hidden mb-4 bg-gray-100 cursor-pointer" onClick={() => handleImageClick(mainImage)}>
                 <img 
                    src={mainImage} 
                    alt={`Main image for ${boatName}`}
                    width={800} 
                    height={600} 
                    className="aspect-video w-full object-cover" 
                    data-ai-hint="boat"
                />
            </Card>

            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <button 
                        className="absolute top-4 left-4 text-white z-60"
                        onClick={handleClose}
                    >
                        <ArrowLeft className="h-8 w-8" />
                        <span className="sr-only">Back</span>
                    </button>
                    
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full p-4" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt={`Full screen view of ${boatName}`}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

    