
"use client";

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/use-favorites';
import { Heart, UserCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiRecommendations } from '../ai-recommendations';


export function Header() {
  const { favorites, isInitialized } = useFavorites();

  const navItems = [
    { name: 'Find', href: '/listings' },
    { name: 'Sell Your Boat', href: '#' },
    { name: 'Finance', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Read', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold sm:inline-block font-headline text-primary">Boat Trader</span>
        </Link>
        
        <nav className="hidden items-center space-x-4 lg:flex">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center justify-end space-x-2">
           <AiRecommendations />
           <Button variant="ghost" size="icon" asChild>
            <Link href="/favorites" className="relative">
              <Heart className="h-6 w-6"/>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6" />
                <span className="sr-only">User Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log In</DropdownMenuItem>
              <DropdownMenuItem>Sign Up</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
