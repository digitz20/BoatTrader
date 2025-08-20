
import { getBoatById, getBoats } from '@/lib/boats';
import { notFound } from 'next/navigation';
import BoatDetailClient from './boat-detail-client';

export async function generateStaticParams() {
  const boats = await getBoats();
  return boats.map(boat => ({ id: boat.id }));
}

export default async function BoatDetailPage({ params }: { params: { id: string } }) {
  const boat = await getBoatById(params.id);

  if (!boat) {
    notFound();
  }
  
  return <BoatDetailClient boat={boat} />;
}
