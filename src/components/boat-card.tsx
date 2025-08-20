
"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Boat } from '@/lib/types';
import { FavoriteButton } from './favorite-button';
import { Mail } from 'lucide-react';
import { PaymentOptionsDialog } from './payment-options-dialog';
import { RentBoatDialog } from './rent-boat-dialog';

interface BoatCardProps {
  boat: Boat;
}

export function BoatCard({ boat }: BoatCardProps) {
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const mailtoHref = `mailto:mrarnolddavid23@gmail.com?subject=Inquiry about the ${boat.year} ${boat.make} ${boat.model}&body=I'm interested in getting more information about your ${boat.year} ${boat.make} ${boat.model}. Please contact me. Boat ID: ${boat.id}`;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col group relative">
      
      <Link href={`/boats/${boat.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${boat.name}`} />

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="relative">
          <img
            src={boat.images[0]}
            alt={boat.name}
            data-ai-hint="boat"
            width={400}
            height={300}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-4 left-0 right-0 p-4 pb-3 text-white">
            <h3 className="mb-1 text-lg font-bold">{boat.year} {boat.make} {boat.model}</h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="uppercase text-gray-300">Price</p>
                <p className="font-semibold">{formatPrice(boat.price)}</p>
              </div>
              <div>
                <p className="uppercase text-gray-300">Location</p>
                <p className="font-semibold">{boat.location}</p>
              </div>
              <div>
                <p className="uppercase text-gray-300">&nbsp;</p>
                <span className="font-semibold">View Details</span>
              </div>
            </div>
          </div>
          <div className="absolute right-3 top-3 z-20" onClick={stopPropagation}>
            <FavoriteButton boatId={boat.id} />
          </div>
        </div>
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:block flex-grow">
        <CardHeader className="relative p-0 bg-gray-100">
          <img
            src={boat.images[0]}
            alt={boat.name}
            data-ai-hint="boat"
            width={400}
            height={300}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute right-3 top-3 z-20" onClick={stopPropagation}>
            <FavoriteButton boatId={boat.id} />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow">
          <div>
             <h3 className="mb-2 truncate font-semibold text-primary group-hover:underline">
              {boat.year} {boat.make} {boat.model}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <p className="text-xs text-muted-foreground">PRICE</p>
              <p className="font-semibold text-primary">{formatPrice(boat.price)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LOCATION</p>
              <p className="font-semibold text-primary">{boat.location}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">OFFERED BY</p>
              <p className="font-semibold text-primary">{boat.seller.name}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">&nbsp;</p>
              <a href={mailtoHref} onClick={stopPropagation} className="relative z-20 flex items-center font-semibold text-primary hover:underline">
                <Mail className="mr-2 h-4 w-4" /> Contact Seller
              </a>
            </div>
          </div>
          <div className="mt-4 border-t pt-4 flex-grow flex flex-col justify-end relative z-20" onClick={stopPropagation}>
            <div className="flex gap-2">
              <PaymentOptionsDialog triggerLabel="Purchase"/>
              <RentBoatDialog boatPrice={boat.price} isCard={true} />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              After payment, please send proof of receipt to the seller's contact information.
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
