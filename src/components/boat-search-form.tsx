
"use client";

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { boatTypes } from '@/lib/boats';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Search } from 'lucide-react';

const searchSchema = z.object({
  query: z.string().optional(),
  type: z.string().optional(),
});

export function BoatSearchForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query: '', type: '' },
  });

  function onSubmit(values: z.infer<typeof searchSchema>) {
    const params = new URLSearchParams();
    if (values.query) params.set('query', values.query);
    if (values.type) params.set('type', values.type);
    router.push(`/listings?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormControl>
                <Input placeholder="Enter make, model, or location..." {...field} className="h-12 bg-card text-card-foreground" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
               <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-card text-card-foreground">
                    <SelectValue placeholder="All Boat Types" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="">All Boat Types</SelectItem>
                  {boatTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="h-12">
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </form>
    </Form>
  );
}
