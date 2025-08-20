
"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Boat } from '@/lib/types';
import { FavoriteButton } from './favorite-button';
import { Mail } from 'lucide-react';
import { PaymentOptionsDialog } from './payment-options-dialog';
import { RentBoatDialog } from './rent-boat-dialog';
import Image from 'next/image';

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

  return (
    <Card className="group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <Link href={`/boats/${boat.id}`}>
          <CardHeader className="relative p-0 h-48">
            <Image
              src={boat.images[0]}
              alt={boat.name}
              data-ai-hint="boat"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
             <div className="absolute right-3 top-3 z-10">
              <FavoriteButton boatId={boat.id} />
            </div>
            <div className="absolute bottom-0 p-4">
              <h3 className="font-semibold text-white">
                {boat.year} {boat.make} {boat.model}
              </h3>
            </div>
          </CardHeader>
        </Link>
        <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                    <p className="text-xs text-muted-foreground">PRICE</p>
                    <p className="font-semibold text-primary">{formatPrice(boat.price)}</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">LOCATION</p>
                    <p className="font-semibold text-primary truncate">{boat.location.split(',')[0]}</p>
                </div>
                <div>
                    <a href={mailtoHref} className="flex flex-col items-start font-semibold text-primary hover:underline">
                         <span className="text-xs text-muted-foreground">CONTACT</span>
                         <span>Contact Seller</span>
                    </a>
                </div>
            </div>
        </CardContent>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-col md:flex-1">
        <CardHeader className="relative p-0">
            <Link href={`/boats/${boat.id}`}>
                <div className="aspect-video w-full overflow-hidden">
                    <Image
                        src={boat.images[0]}
                        alt={boat.name}
                        data-ai-hint="boat"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </Link>
            <div className="absolute right-3 top-3 z-10">
              <FavoriteButton boatId={boat.id} />
            </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-4">
            <h3 className="mb-2 truncate font-semibold text-primary">
                <Link href={`/boats/${boat.id}`} className="hover:underline">
                    {boat.year} {boat.make} {boat.model}
                </Link>
            </h3>
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
                    <a href={mailtoHref} className="flex items-center font-semibold text-primary hover:underline">
                        <Mail className="mr-2 h-4 w-4" /> Contact Seller
                    </a>
                </div>
            </div>
            <div className="mt-auto border-t pt-4 flex flex-col justify-end">
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
