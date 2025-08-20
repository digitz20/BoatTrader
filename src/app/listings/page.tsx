import { BoatCard } from '@/components/boat-card';
import { filterBoats } from '@/lib/boats';
import { Card } from '@/components/ui/card';
import { BoatSearchForm } from '@/components/boat-search-form';

export default function ListingsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = typeof searchParams.query === 'string' ? searchParams.query : undefined;
  const type = typeof searchParams.type === 'string' ? searchParams.type : undefined;

  const filteredBoats = filterBoats({ query, type });

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 p-6">
        <BoatSearchForm />
      </Card>
      
      <h1 className="font-headline mb-2 text-3xl font-bold text-primary">
        {query || type ? 'Search Results' : 'All Boats'}
      </h1>
      <p className="mb-8 text-muted-foreground">
        Found {filteredBoats.length} boat(s) matching your criteria.
      </p>

      {filteredBoats.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBoats.map(boat => (
            <BoatCard key={boat.id} boat={boat} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-card p-12 text-center">
            <h2 className="text-xl font-semibold">No boats found</h2>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search filters to find what you're looking for.
            </p>
        </div>
      )}
    </div>
  );
}
