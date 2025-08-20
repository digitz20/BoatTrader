
import Image from 'next/image';
import { getBoats } from '@/lib/boats';
import { BoatCard } from '@/components/boat-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BoatSearchTabs } from '@/components/boat-search-tabs';

export default function Home() {
  const allBoats = getBoats();
  const featuredBoats = allBoats.slice(0, 8);

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <BoatSearchTabs />
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">Sell Your Boat Fast!</h2>
                <p className="text-muted-foreground mb-4">
                  We want you to have options selling your boat. Listing your boat is easy, or get a cash offer!
                </p>
                <div className="flex gap-2">
                  <Button asChild>
                    <Link href="#">List your boat</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">Get a cash offer</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="https://placehold.co/300x200.png"
                  alt="Boat on a trailer"
                  data-ai-hint="boat trailer"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-bold text-primary">Boats Near You</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBoats.map(boat => (
            <BoatCard key={boat.id} boat={boat} />
          ))}
        </div>
      </section>
    </div>
  );
}
