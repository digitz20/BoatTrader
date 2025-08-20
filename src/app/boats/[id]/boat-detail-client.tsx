
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Boat } from '@/lib/types';
import { useViewedBoats } from '@/hooks/use-viewed-boats';
import { getBoats } from '@/lib/boats';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart, Info, Mail, Phone, Ship, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BoatCard } from '@/components/boat-card';
import { FavoriteButton } from '@/components/favorite-button';
import { BoatDetailImageGallery } from '@/components/boat-detail-image-gallery';


export default function BoatDetailClient({ boat }: { boat: Boat }) {
  const { addViewedBoat, isInitialized } = useViewedBoats();
  const { toast } = useToast();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (isInitialized) {
      addViewedBoat(boat);
    }
  }, [boat, addViewedBoat, isInitialized]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Message Sent!",
      description: "The seller has been notified and will get back to you shortly.",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const otherBoatsFromSeller = getBoats().filter(b => b.seller.name === boat.seller.name && b.id !== boat.id).slice(0, 8);


  const boatSpecs = [
      { label: 'Engine', value: `${boat.engine?.type} ${boat.engine?.brand}` },
      { label: 'Total Power', value: `${boat.engine?.power}hp` },
      { label: 'Engine Hours', value: boat.engine?.hours ?? '-' },
      { label: 'Class', value: boat.class },
      { label: 'Length', value: `${boat.length}ft` },
      { label: 'Year', value: boat.year },
      { label: 'Model', value: boat.model },
      { label: 'Capacity', value: boat.capacity ?? '-' },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-4 flex items-center">
            <Link href="/" className="hover:text-primary">Search</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>{boat.year} {boat.make} {boat.model}</span>
        </nav>
        <div className="flex items-center justify-between mb-2">
            <div>
                <h1 className="text-3xl font-bold text-primary">{boat.year} {boat.make} {boat.model}</h1>
                <p className="text-2xl font-semibold text-primary">{formatPrice(boat.price)}</p>
                <p className="text-muted-foreground">{boat.location}</p>
            </div>
            <div className="flex gap-2">
                <FavoriteButton boatId={boat.id} />
                <Button variant="outline">Next Boat <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            <div className="lg:col-span-2">
                <BoatDetailImageGallery images={boat.images} boatName={boat.name} />
                
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Boat Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
                            {boatSpecs.map(spec => (
                                <div key={spec.label}>
                                    <p className="font-semibold text-muted-foreground uppercase text-xs">{spec.label}</p>
                                    <p className="font-semibold">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                        
                        <h3 className="font-bold text-lg mb-2">Boat Trader Overview</h3>
                        <p className="text-muted-foreground mb-4">
                            This {boat.class.toLowerCase()} sail boat is available for sale at {formatPrice(boat.price)}. Built in {boat.year}, this vessel is {boat.length}ft in length overall with a {boat.engine?.brand} {boat.engine?.type} inboard. A used {boat.make} {boat.model} built in {boat.year} is perfect for a variety of water activities. This vessel is located in {boat.location}.
                        </p>
                        
                        <h3 className="font-bold text-lg mb-2">Description</h3>
                        <div className={`relative ${showMore ? '' : 'max-h-24 overflow-hidden'}`}>
                            <p className="text-muted-foreground whitespace-pre-wrap">{boat.description}</p>
                            {!showMore && <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-white"></div>}
                        </div>
                         <Button variant="link" onClick={() => setShowMore(!showMore)} className="pl-0">
                            {showMore ? 'Show Less' : 'Show More'}
                        </Button>
                        
                         <Accordion type="single" collapsible className="w-full mt-4">
                            <AccordionItem value="measurements">
                                <AccordionTrigger>Measurements</AccordionTrigger>
                                <AccordionContent>Details about measurements.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="propulsion">
                                <AccordionTrigger>Propulsion</AccordionTrigger>
                                <AccordionContent>Details about propulsion.</AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="more-details">
                                <AccordionTrigger>More Details</AccordionTrigger>
                                <AccordionContent>More details about the boat.</AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="location">
                                <AccordionTrigger>Location</AccordionTrigger>
                                <AccordionContent>Details about the boat's location.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Boat Loan Payment Calculator</CardTitle>
                        <CardDescription>Estimate your monthly payment based on the boat you want to buy and your specific loan need.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                            <div>
                                <Label>Loan Type</Label>
                                <p className="font-semibold">Used Boat Loan</p>
                            </div>
                             <div>
                                <Label htmlFor="year">Year</Label>
                                <Input id="year" value={boat.year} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="price">Purchase Price</Label>
                                <Input id="price" value={formatPrice(boat.price)} readOnly />
                            </div>
                            <div>
                                <Label htmlFor="down-payment">Down Payment</Label>
                                <Input id="down-payment" placeholder="$349,577" />
                            </div>
                            <div>
                                <Label htmlFor="loan-term">Loan Term (Months)</Label>
                                <Input id="loan-term" placeholder="240" />
                            </div>
                        </form>
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg text-center">
                            <p className="text-muted-foreground">Here is what your monthly payment might look like:</p>
                            <p className="text-3xl font-bold text-primary">$10,623.90</p>
                            <p className="text-sm text-muted-foreground">TOTAL LOAN AMOUNT $1,398,306</p>
                            <p className="text-xs text-muted-foreground mt-2">See Important Disclosure</p>
                        </div>
                    </CardContent>
                </Card>
                
                 <div className="mt-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">More From This Dealer</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {otherBoatsFromSeller.map(b => <BoatCard key={b.id} boat={b}/>)}
                    </div>
                     <div className="text-center mt-6">
                         <Button variant="outline">More Boats from this Dealer</Button>
                         <Button variant="outline" className="ml-4">View Dealer Website</Button>
                    </div>
                </div>

                 <div className="mt-8">
                     <h2 className="text-2xl font-bold text-primary mb-4">Other Services</h2>
                     <Card>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold">Boat Documentation</h3>
                                <p className="text-muted-foreground">Ad</p>
                            </div>
                            <Image src="https://placehold.co/100x50.png" alt="Ad" width={100} height={50} data-ai-hint="advertisement" />
                        </CardContent>
                     </Card>
                </div>


            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Contact {boat.seller.name}</CardTitle>
                        <CardDescription>
                            <p>{boat.seller.address}</p>
                            <p>{boat.seller.phone}</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                         <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                               <Label htmlFor="name">First & Last Name</Label>
                               <Input id="name" required />
                            </div>
                            <div>
                               <Label htmlFor="email">Your Email</Label>
                               <Input id="email" type="email" required />
                            </div>
                             <div>
                               <Label htmlFor="phone">Your Phone</Label>
                               <Input id="phone" type="tel" />
                            </div>
                            <div>
                                <Textarea defaultValue={`I'm interested in getting more information about your ${boat.year} ${boat.make} ${boat.model}. Please contact me.`} />
                            </div>
                            <Button type="submit" className="w-full">Contact Seller</Button>
                         </form>
                    </CardContent>
                </Card>
                 <Image src="https://placehold.co/300x600.png" width={300} height={600} alt="Ad" className="w-full" data-ai-hint="advertisement" />
                 <Image src="https://placehold.co/300x250.png" width={300} height={250} alt="Ad" className="w-full" data-ai-hint="advertisement" />
                 <Image src="https://placehold.co/300x250.png" width={300} height={250} alt="Ad" className="w-full" data-ai-hint="advertisement" />
            </div>
        </div>
    </div>
  );
}
