
export type BoatType = 'Sailboat' | 'Yacht' | 'Fishing Boat' | 'Speedboat' | 'Catamaran';

export interface Boat {
  id: string;
  name: string;
  type: BoatType;
  price: number;
  location: string;
  year: number;
  length: number; // in feet
  make: string;
  model: string;
  class: string;
  description: string;
  images: string[];
  seller: {
    name: string;
    email: string;
    phone: string;
    address?: string;
  };
   engine?: {
    brand: string;
    type: string;
    power: number;
    hours?: number;
  };
  capacity?: number;
}
