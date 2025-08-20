import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Boat } from '@/lib/types';
import { FavoriteButton } from './favorite-button';
import { Calendar, MapPin, Ruler } from 'lucide-react';

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

  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="relative p-0">
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
        <Badge className="absolute bottom-3 left-3">{boat.type}</Badge>
      </CardHeader>
      <CardContent className="p-4">
        <Link href={`/boats/${boat.id}`}>
          <CardTitle className="mb-2 truncate text-xl font-bold text-primary hover:underline">
            {boat.name}
          </CardTitle>
        </Link>
        <p className="mb-2 text-2xl font-semibold text-accent">{formatPrice(boat.price)}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{boat.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{boat.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            <span>{boat.length} ft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
