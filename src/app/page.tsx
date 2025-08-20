import Image from 'next/image';
import { BoatSearchForm } from '@/components/boat-search-form';
import { getBoats } from '@/lib/boats';
import { BoatCard } from '@/components/boat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const allBoats = getBoats();
  const featuredBots = allBoats.slice(0, 4);

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="https://placehold.co/1800x900.png"
          alt="Sailboat on the open water"
          data-ai-hint="boat sailing"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">Find Your Next Adventure</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Search thousands of boats for sale, from sailboats to yachts and everything in between.
          </p>
          <Card className="mt-8 w-full max-w-4xl bg-white/10 p-4 backdrop-blur-sm">
            <CardContent className="p-2 md:p-4">
              <BoatSearchForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-bold text-primary">Featured Boats</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBots.map(boat => (
            <BoatCard key={boat.id} boat={boat} />
          ))}
        </div>
      </section>
    </div>
  );
}
