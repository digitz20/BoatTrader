

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
import { HeroImageCarousel } from '@/components/hero-image-carousel';

export default async function Home() {
  const featuredBoats = (await getBoats()).slice(0, 12);
  
  const featuredBrands = [
    { name: 'Tige', logo: 'https://images.boatsgroup.com/images/1/upload/TigeBoatsLogo.png' },
    { name: 'Neptunus Yachts', logo: 'https://images.boatsgroup.com/images/1/upload/NBEPYUNUS-LOGO-BLUE.png' },
    { name: 'Horizon Yachts', logo: 'https://images.boatsgroup.com/images/1/upload/Horizon.png' },
    { name: 'Wajer', logo: 'https://images.boatsgroup.com/images/1/upload/WajerLogo43025.png' },
    { name: 'ATX Surf Boats', logo: 'https://images.boatsgroup.com/images/1/upload/ATX-Surf-Boats-Brand-Showroom-Logo.png' },
    { name: 'Krogen Yachts', logo: 'https://images.boatsgroup.com/resize/1/upload/KrogenYachts+Logo7292025.png' },
    { name: 'Centurion', logo: 'https://images.boatsgroup.com/images/1/upload/Evolvedcenturionlogo32725.png' },
    { name: 'Aviara', logo: 'https://images.boatsgroup.com/images/1/upload/logo_aviara21.png' },
    { name: 'Hanover Yachts', logo: 'https://images.boatsgroup.com/images/1/upload/Hanover+YACHTS+logo+VECTOR+blue.png' },
    { name: 'Intrepid', logo: 'https://images.boatsgroup.com/images/1/upload/Intrepid_LogoImage.png' },
  ]

  const recentArticles = [
    {
      category: 'buying',
      title: 'Used Center Console Fishing Boats: 5 Best Bets',
      description: 'Buying a used boat? These five center consoles are great options.',
      image: 'https://images.boattrader.com/resize/wp/43/files/230-outrage-2.jpg?w=702&ratio=default&format=webp&exact'
    },
    {
      category: 'boating',
      title: 'Solace 37 Pilot: Flying High',
      description: 'The Solace 37 Pilot is unlike any other pilothouse boat on the water.',
      image: 'https://images.boattrader.com/resize/wp/43/files/solace-37-pilothouse.jpg?w=702&ratio=default&format=webp&exact'
    },
    {
      category: 'boating.boat-engines',
      title: 'New Mercury V10 5.7L 350, 400, and 425 Horsepower Outboards',
      description: 'The world\'s first V10 outboards, the Mercury Verado 350 and 400, just got boosted to 425-hp.',
      image: 'https://images.boattrader.com/resize/wp/43/files/mercury-425-hp-outboard.jpg?w=702&ratio=default&format=webp&exact'
    },
    {
      category: 'boating',
      title: 'Boat Loans With Bad Credit — It\'s Possible',
      description: 'How to get a boat loan even with a poor credit score.',
      image: 'https://images.boattrader.com/resize/wp/43/files/boat-loans-for-bad-credit-scores.jpeg?w=702&ratio=default&format=webp&exact'
    }
  ]

  const boatTypesForSearch = [
    'Yacht', 'Sailboat', 'Fishing Boat', 'Speedboat', 'Catamaran', 'Pontoon', 'Jet Ski', 'Houseboat', 'Trawler', 'Cabin Cruiser',
    'Bowrider', 'Center Console', 'Cuddy Cabin', 'Deck Boat', 'Dinghy', 'High Performance', 'Inflatable', 'Jon Boat', 'Lifeboat', 'Motor Yacht',
    'Multi-Hull', 'Pilothouse', 'Runabout', 'Ski and Wakeboard', 'Sport Fisherman', 'Superyacht', 'Tender', 'Tugboat', 'Utility', 'Walkaround',
    'Classic', 'Convertible', 'Cruiser', 'Downeast', 'Express Cruiser', 'Flybridge', 'Mega Yacht', 'Sedan Bridge', 'Skiff', 'Bay Boat'
  ];

  const boatManufacturers = [
    'Sea Ray', 'Boston Whaler', 'Grady-White', 'Beneteau', 'Jeanneau', 'Bavaria', 'Lagoon', 'Fountaine Pajot', 'Leopard', 'Sunseeker',
    'Princess', 'Azimut', 'Ferretti', 'Riva', 'Hatteras', 'Viking', 'Bertram', 'Tiara', 'Regal', 'Chaparral',
    'Cobalt', 'MasterCraft', 'Nautique', 'Malibu', 'Axis', 'Tracker', 'Ranger', 'Lund', 'Alumacraft', 'Crestliner',
    'Bayliner', 'Four Winns', 'Glastron', 'Wellcraft', 'Scout', 'Key West', 'Robalo', 'Pursuit', 'Contender', 'Intrepid'
  ];

  const engineTypes = [
    'Inboard', 'Outboard', 'Sterndrive', 'Jet Drive', 'Pod Drive', 'Surface Drive', 'Electric', 'Hybrid', 'Gasoline', 'Diesel',
    'V-Drive', 'Direct Drive', 'Forward Drive', '2-Stroke', '4-Stroke', 'EFI', 'MPI', 'Carbureted', 'Supercharged', 'Turbocharged',
    'Air Cooled', 'Water Cooled', 'Raw Water Cooled', 'Closed Cooling', 'Single Prop', 'Dual Prop', 'Counter-Rotating', 'Verado', 'SHO', 'E-TEC',
    'HPDI', 'DFI', 'TDI', 'Common Rail', 'Mechanical Injection', 'Hydraulic', 'Saildrive', 'Z-Drive', 'IPS', 'Zeus'
  ];

  const engineManufacturers = [
    'Mercury', 'Yamaha', 'Evinrude', 'Honda', 'Suzuki', 'Tohatsu', 'Volvo Penta', 'MerCruiser', 'Crusader', 'Indmar',
    'PCM', 'Ilmor', 'Caterpillar', 'Cummins', 'MAN', 'MTU', 'Yanmar', 'Beta Marine', 'Nanni Diesel', 'Westerbeke',
    'Perkins', 'Scania', 'FPT', 'Steyr', 'Torqeedo', 'Elco', 'Vetus', 'Lombardini', 'Sole Diesel', 'Bukh',
    'Minn Kota', 'MotorGuide', 'Rotax', 'Kawasaki', 'Sea-Doo', 'Kodiak', 'Marine Power', 'Rolls-Royce', 'ZF Marine', 'Twin Disc'
  ];


  return (
    <div>
      <section style={{backgroundColor: '#132536'}}>
        <div className="container mx-auto px-4 py-8 text-white">
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
              <TabsContent value="boats" className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Find your perfect boat</h2>
                  <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Boat Types" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Boat Types</SelectItem>
                      {boatTypesForSearch.map(type => <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                   <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Boat Manufacturers" /></SelectTrigger>
                     <SelectContent>
                       <SelectItem value="all">All Boat Manufacturers</SelectItem>
                       {boatManufacturers.map(m => <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>)}
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
               <TabsContent value="engines" className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Find your perfect engine</h2>
                  <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Engine Types" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Engine Types</SelectItem>
                      {engineTypes.map(type => <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                   <Select>
                    <SelectTrigger className="w-full h-12 bg-white text-black"><SelectValue placeholder="All Engine Manufacturers" /></SelectTrigger>
                     <SelectContent>
                       <SelectItem value="all">All Engine Manufacturers</SelectItem>
                       {engineManufacturers.map(m => <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>)}
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
              <HeroImageCarousel />
            </div>
          </Tabs>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="font-headline mb-8 text-xl text-primary">
          <span className="font-bold">Boats near you</span> based on your location
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBoats.map(boat => (
            <BoatCard key={boat.id} boat={boat} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-headline mb-8 text-center text-3xl font-bold text-primary">Featured Brands Offering New Boats</h2>
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
        <h2 className="font-headline mb-8 text-center text-3xl font-bold text-primary">Recent Articles and Reviews</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {recentArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image src={article.image} alt={article.title} width={400} height={300} className="w-full h-auto object-cover" data-ai-hint="boat sailing" />
              </CardHeader>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                <CardTitle className="text-lg font-bold text-primary hover:underline">
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
