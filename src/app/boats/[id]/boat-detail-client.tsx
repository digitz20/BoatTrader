"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import type { Boat } from '@/lib/types';
import { useViewedBoats } from '@/hooks/use-viewed-boats';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FavoriteButton } from '@/components/favorite-button';
import { ContactSellerDialog } from '@/components/contact-seller-dialog';
import { Calendar, DollarSign, Mail, MapPin, Phone, Ruler, Ship } from 'lucide-react';

export default function BoatDetailClient({ boat }: { boat: Boat }) {
  const { addViewedBoat, isInitialized } = useViewedBoats();
  
  useEffect(() => {
    if (isInitialized) {
        addViewedBoat(boat);
    }
  }, [boat, addViewedBoat, isInitialized]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const boatDetails = [
      { icon: Ship, label: 'Make/Model', value: `${boat.make} ${boat.model}` },
      { icon: Calendar, label: 'Year', value: boat.year },
      { icon: Ruler, label: 'Length', value: `${boat.length} ft` },
      { icon: DollarSign, label: 'Price', value: formatPrice(boat.price) },
      { icon: MapPin, label: 'Location', value: boat.location },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
           <Carousel className="w-full">
            <CarouselContent>
              {boat.images.map((src, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <Image 
                      src={src} 
                      alt={`${boat.name} - Image ${index + 1}`}
                      data-ai-hint="boat interior"
                      width={800} 
                      height={600} 
                      className="aspect-video w-full object-cover" 
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <Card className="mt-8">
            <CardHeader>
                <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{boat.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div>
                            <Badge className="mb-2">{boat.type}</Badge>
                            <CardTitle className="text-3xl font-bold text-primary">{boat.name}</CardTitle>
                        </div>
                        <FavoriteButton boatId={boat.id} />
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {boatDetails.map(detail => (
                            <li key={detail.label} className="flex items-center text-lg">
                                <detail.icon className="mr-3 h-5 w-5 text-accent" />
                                <div>
                                    <span className="font-semibold">{detail.label}:</span>{' '}
                                    <span className="text-muted-foreground">{detail.value}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Seller Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center">
                        <Ship className="mr-3 h-5 w-5 text-accent"/> {boat.seller.name}
                    </div>
                    <div className="flex items-center">
                        <Mail className="mr-3 h-5 w-5 text-accent"/> {boat.seller.email}
                    </div>
                     <div className="flex items-center">
                        <Phone className="mr-3 h-5 w-5 text-accent"/> {boat.seller.phone}
                    </div>
                    <Separator className="my-4" />
                    <ContactSellerDialog boat={boat} />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
