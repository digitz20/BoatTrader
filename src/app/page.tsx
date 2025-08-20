

import Image from 'next/image';
import { getBoats } from '@/lib/boats';
import { BoatCard } from '@/components/boat-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ship, Anchor, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const featuredBoats = getBoats().slice(0, 8);
  
  const featuredBrands = [
    { name: 'Tige', logo: 'https://placehold.co/100x50.png' },
    { name: 'Neptunus Yachts', logo: 'https://placehold.co/100x50.png' },
    { name: 'Horizon Yachts', logo: 'https://placehold.co/100x50.png' },
    { name: 'Wajer', logo: 'https://placehold.co/100x50.png' },
    { name: 'ATX Surf Boats', logo: 'https://placehold.co/100x50.png' },
    { name: 'Krogen Yachts', logo: 'https://placehold.co/100x50.png' },
    { name: 'Centurion', logo: 'https://placehold.co/100x50.png' },
    { name: 'Aviara', logo: 'https://placehold.co/100x50.png' },
    { name: 'Hanover Yachts', logo: 'https://placehold.co/100x50.png' },
    { name: 'Intrepid', logo: 'https://placehold.co/100x50.png' },
  ]

  const recentArticles = [
    {
      category: 'buying',
      title: 'Used Center Console Fishing Boats: 5 Best Bets',
      description: 'Buying a used boat? These five center consoles are great options.',
      image: 'https://placehold.co/400x300.png'
    },
    {
      category: 'boating',
      title: 'Solace 37 Pilot: Flying High',
      description: 'The Solace 37 Pilot is unlike any other pilothouse boat on the water.',
      image: 'https://placehold.co/400x300.png'
    },
    {
      category: 'boating.boat-engines',
      title: 'New Mercury V10 5.7L 350, 400, and 425 Horsepower Outboards',
      description: 'The world\'s first V10 outboards, the Mercury Verado 350 and 400, just got boosted to 425-hp.',
      image: 'https://placehold.co/400x300.png'
    },
    {
      category: 'boating',
      title: 'Boat Loans With Bad Credit — It\'s Possible',
      description: 'How to get a boat loan even with a poor credit score.',
      image: 'https://placehold.co/400x300.png'
    }
  ]

  return (
    <div>
      <section style={{backgroundColor: '#132536'}}>
        <div className="container mx-auto px-4 text-white">
          <Tabs defaultValue="boats" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 pt-6">
               <TabsList className="grid w-full grid-cols-2 bg-transparent p-0">
                <TabsTrigger value="boats" className="flex gap-2 items-center data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-white rounded-none">
                  <Ship /> Boats
                </TabsTrigger>
                <TabsTrigger value="engines" className="flex gap-2 items-center data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-white rounded-none">
                  <Anchor /> Engines
                </TabsTrigger>
              </TabsList>
              <TabsContent value="boats" className="pt-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Find your perfect boat</h2>
                  <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Boat Types" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Boat Types</SelectItem>
                      <SelectItem value="yacht">Yacht</SelectItem>
                      <SelectItem value="sailboat">Sailboat</SelectItem>
                    </SelectContent>
                  </Select>
                   <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Boat Manufacturers" /></SelectTrigger>
                     <SelectContent>
                       <SelectItem value="sunseeker">Sunseeker</SelectItem>
                       <SelectItem value="beneteau">Beneteau</SelectItem>
                     </SelectContent>
                  </Select>
                  <a href="#" className="text-blue-400 hover:underline">Within 200 Miles of Your Location</a>
                  <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">Search</Button>
                </div>
              </TabsContent>
               <TabsContent value="engines" className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Find your perfect engine</h2>
                  <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Engine Types" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Engine Types</SelectItem>
                      <SelectItem value="inboard">Inboard</SelectItem>
                      <SelectItem value="outboard">Outboard</SelectItem>
                    </SelectContent>
                  </Select>
                   <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Engine Manufacturers" /></SelectTrigger>
                     <SelectContent>
                       <SelectItem value="mercury">Mercury</SelectItem>
                       <SelectItem value="yamaha">Yamaha</SelectItem>
                     </SelectContent>
                  </Select>
                  <a href="#" className="text-blue-400 hover:underline">Within 200 Miles of Your Location</a>
                  <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">Search</Button>
                </div>
                 <div className="pt-4 border-t border-gray-600">
                    <h3 className="text-lg font-semibold">Sell Your Boat Fast!</h3>
                    <p className="text-gray-300 my-2">We want you to have options selling your boat. Listing your boat is easy, or get a cash offer!</p>
                    <Button variant="outline" className="w-full h-12 bg-white text-blue-600 hover:bg-gray-200">Sell Your Boat</Button>
                 </div>
              </TabsContent>
            </div>
            <div className="md:col-span-2 relative min-h-[400px]">
              <Image
                src="https://placehold.co/800x600.png"
                alt="Tige boat"
                data-ai-hint="boat lake"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
                <h2 className="text-4xl font-bold">LUXURY THAT PUTS YOU FIRST</h2>
                <p className="text-2xl my-2">tigé BOATS</p>
                <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black">
                  EXPLORE TIGÉ >
                </Button>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-bold">Boats Near You</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBoats.map(boat => (
            <BoatCard key={boat.id} boat={boat} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-headline mb-8 text-center text-3xl font-bold">Featured Brands Offering New Boats</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {featuredBrands.map(brand => (
              <div key={brand.name} className="flex justify-center">
                <Image src={brand.logo} alt={`${brand.name} logo`} width={120} height={60} objectFit="contain" data-ai-hint="logo boat" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">Shop All Brands <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-bold">Recent Articles and Reviews</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {recentArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image src={article.image} alt={article.title} width={400} height={300} className="w-full h-auto" data-ai-hint="boat sailing" />
              </CardHeader>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                <CardTitle className="text-lg font-bold hover:underline">
                  <Link href="#">{article.title}</Link>
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">{article.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">See more articles</Button>
        </div>
      </section>
    </div>
  );
}
