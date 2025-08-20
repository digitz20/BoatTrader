
"use client";

import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface FavoriteButtonProps {
  boatId: string;
}

export function FavoriteButton({ boatId }: FavoriteButtonProps) {
  const { isFavorite, addFavorite, removeFavorite, isInitialized } = useFavorites();
  const { toast } = useToast();
  const isFav = isFavorite(boatId);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFavorite(boatId);
      toast({ description: "Removed from favorites." });
    } else {
      addFavorite(boatId);
      toast({ description: "Added to favorites." });
    }
  };

  if (!isInitialized) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm"
        disabled
      >
        <Heart className="h-5 w-5 text-muted-foreground" />
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleFavorite}
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm transition-colors hover:bg-background"
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        className={cn(
          "h-5 w-5", 
          isFav ? "fill-destructive text-destructive" : "text-muted-foreground"
        )} 
      />
    </Button>
  );
}
