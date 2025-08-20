
"use client";

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';


export function Header() {
  const navItems = [
    { name: 'Find', href: '/listings', dropdown: true },
    { name: 'Sell Your Boat', href: '#' },
    { name: 'Finance', href: '#', dropdown: true },
    { name: 'Services', href: '#', dropdown: true },
    { name: 'Research', href: '#', dropdown: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center justify-between">
        <nav className="hidden items-center space-x-6 lg:flex">
          {navItems.map((item) => (
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                   <Button variant="ghost" className="flex items-center gap-1 text-base text-foreground">
                    {item.name} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Boats For Sale</DropdownMenuItem>
                  <DropdownMenuItem>New Boats</DropdownMenuItem>
                  <DropdownMenuItem>Boat Types</DropdownMenuItem>
                  <DropdownMenuItem>Boat Dealers</DropdownMenuItem>
                  <DropdownMenuItem>Outboard Motors & Engines</DropdownMenuItem>
                  <DropdownMenuItem>Boat Trailers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button key={item.name} variant="ghost" asChild>
                <Link href={item.href} className="text-base font-medium text-foreground">
                  {item.name}
                </Link>
              </Button>
            )
          ))}
        </nav>

        <div className="flex items-center justify-end space-x-4">
           <Button variant="ghost" className="text-base text-foreground">Sign up</Button>
           <Button variant="ghost" className="text-base text-foreground">Log in</Button>
           <Link href="/" className="flex items-center space-x-2">
             <span className="font-brand text-3xl font-bold" style={{color: '#132536'}}>Boat Trader</span>
           </Link>
        </div>
      </div>
    </header>
  );
}
