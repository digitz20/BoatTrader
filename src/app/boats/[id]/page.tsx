import { getBoatById, getBoats } from '@/lib/boats';
import { notFound } from 'next/navigation';
import BoatDetailClient from './boat-detail-client';

export async function generateStaticParams() {
  const boats = getBoats();
  return boats.map(boat => ({ id: boat.id }));
}

export default function BoatDetailPage({ params }: { params: { id: string } }) {
  const boat = getBoatById(params.id);

  if (!boat) {
    notFound();
  }
  
  return <BoatDetailClient boat={boat} />;
}
