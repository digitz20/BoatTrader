"use client";

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/use-favorites';
import { Heart, Sailboat, Sparkles } from 'lucide-react';
import { AiRecommendations } from '@/components/ai-recommendations';

export function Header() {
  const { favorites, isInitialized } = useFavorites();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sailboat className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block font-headline">AquaFind</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/listings" className="transition-colors hover:text-foreground/80 text-foreground/60">
            All Listings
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <AiRecommendations />
          <Button variant="ghost" size="icon" asChild>
            <Link href="/favorites" className="relative">
              <Heart />
              {isInitialized && favorites.length > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-1 text-xs"
                >
                  {favorites.length}
                </Badge>
              )}
              <span className="sr-only">Favorites</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
