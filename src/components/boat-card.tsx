
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Boat } from '@/lib/types';
import { FavoriteButton } from './favorite-button';
import { Mail, Wallet } from 'lucide-react';
import { PaymentOptionsDialog } from './payment-options-dialog';
import { Button } from './ui/button';

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
  
  const mailtoHref = `mailto:${boat.seller.email}?subject=Inquiry about the ${boat.year} ${boat.make} ${boat.model}&body=I'm interested in getting more information about your ${boat.year} ${boat.make} ${boat.model}. Please contact me. Boat ID: ${boat.id}`;

  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="relative p-0 bg-gray-100">
        <Link href={`/boats/${boat.id}`}>
          <Image
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
             <PaymentOptionsDialog />
             <p className="text-xs text-muted-foreground mt-2 text-center">
                After payment, please send proof of receipt to the seller's contact information.
             </p>
        </div>
      </CardContent>
    </Card>
  );
}

    
