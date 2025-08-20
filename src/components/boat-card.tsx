
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Boat } from '@/lib/types';
import { FavoriteButton } from './favorite-button';
import { Mail } from 'lucide-react';
import { PaymentOptionsDialog } from './payment-options-dialog';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { RentBoatDialog } from './rent-boat-dialog';

interface BoatCardProps {
  boat: Boat;
}

export function BoatCard({ boat }: BoatCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const mailtoHref = `mailto:mrarnolddavid23@gmail.com?subject=Inquiry about the ${boat.year} ${boat.make} ${boat.model}&body=I'm interested in getting more information about your ${boat.year} ${boat.make} ${boat.model}. Please contact me. Boat ID: ${boat.id}`;

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageOpen(false);
  };

  return (
    <>
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        {/* Mobile view */}
        <div className="md:hidden">
          <div className="relative">
            <div onClick={handleImageClick} className="cursor-pointer">
              <img
                src={boat.images[0]}
                alt={boat.name}
                data-ai-hint="boat"
                width={400}
                height={300}
                className="aspect-video w-full object-cover"
              />
            </div>
            <div className="absolute right-3 top-3">
              <FavoriteButton boatId={boat.id} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 pb-2 text-white">
              <Link href={`/boats/${boat.id}`}>
                  <h3 className="mb-1 text-lg font-bold hover:underline">{boat.year} {boat.make} {boat.model}</h3>
              </Link>
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
                      <a href={mailtoHref} className="font-semibold hover:underline">Contact Seller</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:block">
            <CardHeader className="relative p-0 bg-gray-100">
              <Link href={`/boats/${boat.id}`}>
                <img
                  src={boat.images[0]}
                  alt={boat.name}
                  data-ai-hint="boat"
                  width={400}
                  height={300}
                  className="aspect-video w-full object-cover"
                />
              </Link>
              <div className="absolute right-3 top-3">
                <FavoriteButton boatId={boat.id} />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Link href={`/boats/${boat.id}`}>
                <p className="mb-2 truncate font-semibold text-primary hover:underline">
                  {boat.year} {boat.make} {boat.model}
                </p>
              </Link>
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
                  <a href={mailtoHref} className="flex items-center font-semibold text-primary hover:underline">
                      <Mail className="mr-2 h-4 w-4" /> Contact Seller
                  </a>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                  <div className="flex gap-2">
                    <PaymentOptionsDialog />
                    <RentBoatDialog boatPrice={boat.price} isCard={true} />
                  </div>
                   <p className="text-xs text-muted-foreground mt-2 text-center">
                      After payment, please send proof of receipt to the seller's contact information.
                   </p>
              </div>
            </CardContent>
        </div>
      </Card>

      {isImageOpen && (
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
                      src={boat.images[0]}
                      alt={`Full screen view of ${boat.name}`}
                      className="object-contain w-full h-full"
                      onClick={handleClose}
                  />
              </div>
          </div>
      )}
    </>
  );
}
