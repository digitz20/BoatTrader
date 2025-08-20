import type { Boat, BoatType } from './types';

const boats: Boat[] = [
  {
    id: '1',
    name: 'The Salty Splinter',
    type: 'Sailboat',
    price: 120000,
    location: 'Newport, RI',
    year: 2018,
    length: 45,
    make: 'Beneteau',
    model: 'Oceanis 45',
    description: 'A beautiful and well-maintained sailboat perfect for coastal cruising or long-distance voyages. Features a spacious cockpit, modern navigation equipment, and comfortable living quarters.',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    seller: { name: 'Oceanic Yachts', email: 'sales@oceanicyachts.com', phone: '555-1234' },
  },
  {
    id: '2',
    name: 'Wave Dancer',
    type: 'Yacht',
    price: 750000,
    location: 'Miami, FL',
    year: 2022,
    length: 60,
    make: 'Sunseeker',
    model: 'Predator 60',
    description: 'Experience luxury on the water with this sleek and powerful yacht. Boasting impressive speed, a sophisticated design, and lavish amenities for entertaining guests.',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    seller: { name: 'Prestige Marine', email: 'contact@prestigemarine.net', phone: '555-5678' },
  },
  {
    id: '3',
    name: 'The Reel Deal',
    type: 'Fishing Boat',
    price: 85000,
    location: 'Outer Banks, NC',
    year: 2020,
    length: 35,
    make: 'Grady-White',
    model: 'Canyon 336',
    description: 'A top-tier fishing machine, fully equipped for offshore adventures. Comes with outriggers, a large livewell, advanced fish-finding electronics, and ample rod storage.',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    seller: { name: 'Coastal Charters', email: 'info@coastalcharters.com', phone: '555-9012' },
  },
  {
    id: '4',
    name: 'Velocity',
    type: 'Speedboat',
    price: 95000,
    location: 'Lake Tahoe, CA',
    year: 2021,
    length: 28,
    make: 'Formula',
    model: '270 Bowrider',
    description: 'Feel the thrill of speed with this high-performance speedboat. Perfect for water sports, day cruising, and making a statement on the lake. Low hours and immaculate condition.',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    seller: { name: 'Tahoe Power Sports', email: 'sales@tahoepower.com', phone: '555-3456' },
  },
  {
    id: '5',
    name: 'Twin Hulls',
    type: 'Catamaran',
    price: 450000,
    location: 'Fort Lauderdale, FL',
    year: 2019,
    length: 42,
    make: 'Lagoon',
    model: '42',
    description: 'Spacious and stable, this catamaran offers an incredible amount of living space, both indoors and out. Ideal for family cruising, chartering, or living aboard in comfort.',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    seller: { name: 'The Catamaran Company', email: 'cats@catamarans.com', phone: '555-7890' },
  },
  {
    id: '6',
    name: 'Classic Grace',
    type: 'Sailboat',
    price: 95000,
    location: 'Annapolis, MD',
    year: 2015,
    length: 38,
    make: 'Island Packet',
    model: 'Estero',
    description: 'A timeless sailboat known for its quality construction and seaworthiness. This vessel is ready to take you on any adventure, equipped for comfort and reliability.',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    seller: { name: 'Chesapeake Bay Yachts', email: 'sales@cbyachts.com', phone: '555-1122' },
  },
    {
    id: '7',
    name: 'The Mako',
    type: 'Fishing Boat',
    price: 150000,
    location: 'Key West, FL',
    year: 2023,
    length: 40,
    make: 'Contender',
    model: '44ST',
    description: 'Dominate the fishing grounds with this brand new, state-of-the-art center console. Quad engines provide unmatched speed and reliability to get you to the fish first.',
    images: ['https://placehold.co/800x600.png'],
    seller: { name: 'Reel Time Brokers', email: 'sales@reeltime.com', phone: '555-4455' },
  },
  {
    id: '8',
    name: 'AquaLuxe',
    type: 'Yacht',
    price: 1250000,
    location: 'San Diego, CA',
    year: 2021,
    length: 75,
    make: 'Azimut',
    model: 'S7',
    description: 'The pinnacle of Italian design and luxury. This sport yacht features a carbon fiber superstructure, innovative technology, and breathtaking performance. Entertain in style.',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    seller: { name: 'West Coast Yachts', email: 'info@wcyachts.com', phone: '555-8899' },
  },
];

export const boatTypes: BoatType[] = ['Sailboat', 'Yacht', 'Fishing Boat', 'Speedboat', 'Catamaran'];

export function getBoats(): Boat[] {
  return boats;
}

export function getBoatById(id: string | undefined): Boat | undefined {
  if (!id) return undefined;
  return boats.find(boat => boat.id === id);
}

export function filterBoats({ type, query }: { type?: string; query?: string }): Boat[] {
  return boats.filter(boat => {
    const typeMatch = type ? boat.type === type : true;
    const queryMatch = query
      ? boat.name.toLowerCase().includes(query.toLowerCase()) ||
        boat.make.toLowerCase().includes(query.toLowerCase()) ||
        boat.model.toLowerCase().includes(query.toLowerCase()) ||
        boat.location.toLowerCase().includes(query.toLowerCase())
      : true;
    return typeMatch && queryMatch;
  });
}
