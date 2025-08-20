
"use client";

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, Ship } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { LoginForm } from '../login-form';
import { SignupForm } from '../signup-form';

export function Header() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  const openAuthDialog = (view: 'login' | 'signup') => {
    setAuthView(view);
    setIsAuthDialogOpen(true);
  }

  const navItems = [
    { 
      name: 'Find', 
      href: '/listings', 
      dropdown: true,
      subItems: [
        { name: 'Boats For Sale', href: '#' },
        { name: 'New Boats', href: '#' },
        { name: 'Boat Types', href: '#' },
        { name: 'Boat Dealers', href: '#' },
        { name: 'Outboard Motors & Engines', href: '#' },
        { name: 'Boat Trailers', href: '#' },
      ]
    },
    { name: 'Sell Your Boat', href: '#' },
    { 
      name: 'Finance', 
      href: '#', 
      dropdown: true,
      subItems: [
        { name: 'Boat Loans', href: '#' },
        { name: 'Boat Loan Calculator', href: '#' },
        { name: 'Boat Loan Rates', href: '#' },
        { name: 'FAQ - How to Finance', href: '#' },
      ]
    },
    { 
      name: 'Services', 
      href: '#', 
      dropdown: true,
      subItems: [
        { name: 'Extended Service Plan', href: '#' },
        { name: 'Tire & Wheel Plan', href: '#' },
        { name: 'GAP Protection', href: '#' },
        { name: 'Roadside Assistance', href: '#' },
        { name: 'Boat Insurance', href: '#' },
        { name: 'Boat Transport', href: '#' },
        { name: 'Boat Warranty', href: '#' },
        { name: 'Boat Documentation', href: '#' },
        { name: 'Boat Rental', href: '#' },
        { name: 'Become a Member', href: '#' },
      ]
    },
    { 
      name: 'Research', 
      href: '#', 
      dropdown: true,
      subItems: [
        { name: 'Get Advice On: Buying', href: '#' },
        { name: 'Get Advice On: Selling', href: '#' },
        { name: 'Get Advice On: Boating', href: '#' },
        { name: 'Read Reviews', href: '#' },
      ]
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-gray-100">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 ml-4">
              <span className="font-brand text-3xl font-bold" style={{color: '#132536'}}>Boat Trader</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
              <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                  item.dropdown ? (
                  <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 text-base text-foreground">
                          {item.name} <ChevronDown className="h-4 w-4" />
                      </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.subItems?.map(subItem => (
                          <DropdownMenuItem key={subItem.name} asChild>
                              <Link href={subItem.href}>{subItem.name}</Link>
                          </DropdownMenuItem>
                        ))}
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
                  <Button variant="ghost" className="text-base text-foreground" onClick={() => openAuthDialog('signup')}>
                    Sign up
                  </Button>
                  <Button variant="ghost" className="text-base text-foreground" onClick={() => openAuthDialog('login')}>
                    Log in
                  </Button>
              </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                   <SheetTitle className="sr-only">Menu</SheetTitle>
                   <SheetDescription className="sr-only">Main navigation menu for Boat Trader</SheetDescription>
                  <Link href="/" className="flex items-center space-x-2 mb-8">
                      <Ship className="h-8 w-8 text-primary" />
                      <span className="font-brand text-2xl font-bold text-primary">Boat Trader</span>
                  </Link>
                </SheetHeader>
                <div className="p-4">
                  <div className="flex flex-col space-y-2">
                    <Accordion type="multiple" className="w-full">
                      {navItems.map((item, index) => (
                        item.dropdown ? (
                          <AccordionItem value={`item-${index}`} key={item.name}>
                            <AccordionTrigger className="text-lg font-semibold">
                              {item.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col space-y-2 pl-4">
                                {item.subItems?.map(subItem => (
                                  <SheetClose key={subItem.name} asChild>
                                    <Link href={subItem.href} className="text-muted-foreground hover:text-primary">
                                      {subItem.name}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <SheetClose key={item.name} asChild>
                            <Link href={item.href} className="py-4 text-lg font-semibold border-b">
                              {item.name}
                            </Link>
                          </SheetClose>
                        )
                      ))}
                    </Accordion>
                    <div className="border-t pt-4 space-y-2">
                      <SheetClose asChild>
                          <Button variant="outline" className="w-full justify-start text-lg" onClick={() => openAuthDialog('signup')}>Sign up</Button>
                      </SheetClose>
                      <SheetClose asChild>
                          <Button variant="outline" className="w-full justify-start text-lg" onClick={() => openAuthDialog('login')}>Log in</Button>
                      </SheetClose>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
        <DialogContent className="sm:max-w-md">
           {authView === 'login' ? (
             <>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Log In</DialogTitle>
                    <DialogDescription>Enter your email below to log in to your account.</DialogDescription>
                </DialogHeader>
                <LoginForm onLoginSuccess={() => setIsAuthDialogOpen(false)} onSignupClick={() => setAuthView('signup')} />
             </>
           ) : (
              <>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Sign Up</DialogTitle>
                    <DialogDescription>Enter your information to create an account.</DialogDescription>
                </DialogHeader>
                <SignupForm onLoginClick={() => setAuthView('login')} />
              </>
           )}
        </DialogContent>
      </Dialog>
    </>
  );
}
