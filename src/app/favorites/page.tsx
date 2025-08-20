"use client";

import { useFavorites } from '@/hooks/use-favorites';
import { getBoats } from '@/lib/boats';
import { BoatCard } from '@/components/boat-card';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FavoritesPage() {
  const { favorites, isInitialized } = useFavorites();
  const allBoats = getBoats();
  const favoriteBoats = allBoats.filter(boat => favorites.includes(boat.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center gap-4">
        <Heart className="h-8 w-8 text-destructive" />
        <h1 className="font-headline text-3xl font-bold text-primary">Your Favorites</h1>
      </div>

      {!isInitialized && (
        <p className="text-muted-foreground">Loading your favorites...</p>
      )}

      {isInitialized && favoriteBoats.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favoriteBoats.map(boat => (
            <BoatCard key={boat.id} boat={boat} />
          ))}
        </div>
      )}

      {isInitialized && favoriteBoats.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-card p-12 text-center">
          <h2 className="text-xl font-semibold">No Favorites Yet</h2>
          <p className="mt-2 text-muted-foreground">
            Click the heart icon on any listing to save it here.
          </p>
          <Button asChild className="mt-4">
            <Link href="/listings">Browse Listings</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
