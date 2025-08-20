

import type { Boat, BoatType } from './types';

const boats: Boat[] = [
  {
    id: '1',
    name: 'The Salty Splinter',
    type: 'Sailboat',
    class: 'Cruiser',
    price: 120000,
    location: 'Newport, RI',
    year: 2018,
    length: 45,
    make: 'Beneteau',
    model: 'Oceanis 45',
    description: 'A beautiful and well-maintained sailboat perfect for coastal cruising or long-distance voyages. Features a spacious cockpit, modern navigation equipment, and comfortable living quarters.',
    images: ['https://storage.googleapis.com/studioprod/41974558-4541-477a-9764-d6213768652d.jpg', 'https://storage.googleapis.com/studioprod/401a4e50-4822-446a-84a1-0268a23c34a2.jpg', 'https://storage.googleapis.com/studioprod/8461a257-21a8-4e8c-8f15-f55a31f7535b.jpg'],
    seller: { name: 'Oceanic Yachts', email: 'sales@oceanicyachts.com', phone: '+1-555-123-4567', address: '123 Ocean Ave, Newport, RI' },
    engine: {
        brand: 'Yanmar',
        type: '4JH57',
        power: 57,
        hours: 500
    }
  },
  {
    id: '2',
    name: 'Wave Dancer',
    type: 'Yacht',
    class: 'Flybridge',
    price: 750000,
    location: 'Miami, FL',
    year: 2022,
    length: 60,
    make: 'Sunseeker',
    model: 'Predator 60',
    description: 'Experience luxury on the water with this sleek and powerful yacht. Boasting impressive speed, a sophisticated design, and lavish amenities for entertaining guests.',
    images: ['https://storage.googleapis.com/studioprod/f752c1df-8a58-406a-83a3-b40557458428.jpg', 'https://storage.googleapis.com/studioprod/735a1197-2a54-47b6-96d5-6548545e1a38.jpg', 'https://storage.googleapis.com/studioprod/24432095-25b8-4c9f-8646-621815e98516.jpg'],
    seller: { name: 'Prestige Marine', email: 'contact@prestigemarine.net', phone: '+1-555-987-6543', address: '456 Marina Bay, Miami, FL' },
    engine: {
        brand: 'MAN',
        type: 'V12',
        power: 1550,
        hours: 150
    }
  },
  {
    id: '3',
    name: 'The Reel Deal',
    type: 'Fishing Boat',
    class: 'Center Console',
    price: 85000,
    location: 'Outer Banks, NC',
    year: 2020,
    length: 35,
    make: 'Grady-White',
    model: 'Canyon 336',
    description: 'A top-tier fishing machine, fully equipped for offshore adventures. Comes with outriggers, a large livewell, advanced fish-finding electronics, and ample rod storage.',
    images: ['https://storage.googleapis.com/studioprod/e6423a63-7182-4f36-963e-32d2f2b3e83b.jpg', 'https://storage.googleapis.com/studioprod/f8776657-61c0-4200-a549-3732d8479e0f.jpg'],
    seller: { name: 'Coastal Charters', email: 'info@coastalcharters.com', phone: '+1-555-321-9876', address: '789 Dockside Dr, Outer Banks, NC' },
     engine: {
        brand: 'Yamaha',
        type: 'F300',
        power: 300,
        hours: 200
    }
  },
  {
    id: '4',
    name: 'Velocity',
    type: 'Speedboat',
    class: 'Bowrider',
    price: 95000,
    location: 'Lake Tahoe, CA',
    year: 2021,
    length: 28,
    make: 'Formula',
    model: '270 Bowrider',
    description: 'Feel the thrill of speed with this high-performance speedboat. Perfect for water sports, day cruising, and making a statement on the lake. Low hours and immaculate condition.',
    images: ['https://storage.googleapis.com/studioprod/d8c83556-2e64-4e36-97d5-8664150b0162.jpg', 'https://storage.googleapis.com/studioprod/8d1e2e1d-4034-4537-b6a6-f28829f0e137.jpg'],
    seller: { name: 'Tahoe Power Sports', email: 'sales@tahoepower.com', phone: '+1-555-555-1212', address: '101 Lakeside Blvd, Lake Tahoe, CA' },
    engine: {
        brand: 'Mercruiser',
        type: '8.2L MAG',
        power: 380,
        hours: 80
    }
  },
  {
    id: '5',
    name: 'Twin Hulls',
    type: 'Catamaran',
    class: 'Sailing Catamaran',
    price: 450000,
    location: 'Fort Lauderdale, FL',
    year: 2019,
    length: 42,
    make: 'Lagoon',
    model: '42',
    description: 'Spacious and stable, this catamaran offers an incredible amount of living space, both indoors and out. Ideal for family cruising, chartering, or living aboard in comfort.',
    images: ['https://storage.googleapis.com/studioprod/c7f465c7-c377-4b68-8742-99049449a0d8.jpg', 'https://storage.googleapis.com/studioprod/046429b9-2534-469a-8c88-de9784774612.jpg', 'https://storage.googleapis.com/studioprod/c615848f-c30f-48d5-9831-2856f6424a1b.jpg', 'https://storage.googleapis.com/studioprod/1a789a58-8255-4a58-8686-2187d9047321.jpg'],
    seller: { name: 'The Catamaran Company', email: 'cats@catamarans.com', phone: '+1-555-246-8135', address: '200 Yacht Haven, Fort Lauderdale, FL' },
    engine: {
        brand: 'Yanmar',
        type: '4JH45',
        power: 45,
        hours: 600
    }
  },
  {
    id: '6',
    name: 'Classic Grace',
    type: 'Sailboat',
    class: 'Cutter',
    price: 95000,
    location: 'Annapolis, MD',
    year: 2015,
    length: 38,
    make: 'Island Packet',
    model: 'Estero',
    description: 'A timeless sailboat known for its quality construction and seaworthiness. This vessel is ready to take you on any adventure, equipped for comfort and reliability.',
    images: ['https://storage.googleapis.com/studioprod/364a59f5-195b-4a58-8120-9943b593684a.jpg', 'https://storage.googleapis.com/studioprod/d95e7d58-9c16-419b-866d-cb511942c262.jpg'],
    seller: { name: 'Chesapeake Bay Yachts', email: 'sales@cbyachts.com', phone: '+1-555-135-7924', address: '300 Severn Ave, Annapolis, MD' },
    engine: {
        brand: 'Yanmar',
        type: '3JH5E',
        power: 39,
        hours: 750
    }
  },
    {
    id: '7',
    name: 'The Mako',
    type: 'Fishing Boat',
    class: 'Sport Fisherman',
    price: 150000,
    location: 'Key West, FL',
    year: 2023,
    length: 40,
    make: 'Contender',
    model: '44ST',
    description: 'Dominate the fishing grounds with this brand new, state-of-the-art center console. Quad engines provide unmatched speed and reliability to get you to the fish first.',
    images: ['https://storage.googleapis.com/studioprod/5c2c589b-8f3e-4f7f-8e2b-f1d2d00c4e1f.jpg'],
    seller: { name: 'Reel Time Brokers', email: 'sales@reeltime.com', phone: '+1-555-246-8135', address: '400 Caroline St, Key West, FL' },
    engine: {
        brand: 'Mercury',
        type: 'Verado 400',
        power: 400,
        hours: 50
    }
  },
  {
    id: '8',
    name: 'AquaLuxe',
    type: 'Yacht',
    class: 'Motor Yacht',
    price: 1250000,
    location: 'San Diego, CA',
    year: 2021,
    length: 75,
    make: 'Azimut',
    model: 'S7',
    description: 'The pinnacle of Italian design and luxury. This sport yacht features a carbon fiber superstructure, innovative technology, and breathtaking performance. Entertain in style.',
    images: ['https://storage.googleapis.com/studioprod/7e034b7f-3151-4b1f-9988-598d9753e1f5.jpg', 'https://storage.googleapis.com/studioprod/4a49c6f2-a083-4c9c-9c7f-b6e8a0f82d1c.jpg'],
    seller: { name: 'West Coast Yachts', email: 'info@wcyachts.com', phone: '+1-555-975-3186', address: '500 Harbor Island Dr, San Diego, CA' },
    engine: {
        brand: 'Volvo Penta',
        type: 'IPS 1350',
        power: 1000,
        hours: 250
    }
  },
  {
    id: '50',
    name: '1991 Jongert 2900M',
    make: 'Jongert',
    model: '2900M',
    type: 'Sailboat',
    class: 'Cruisers',
    year: 1991,
    length: 97,
    price: 1747883,
    location: 'Mallorca, PM 07015',
    description: `The Jongert 2900M semi-custom series presents a range of 29-meter sailing yachts designed by Tony Castro to combine grace and elegance with exceptional performance. With her steel hull and aluminium superstructure, the sloop design is a precise, fast cruiser.

Alta Marea is the embodiment of Dutch quality, synonymous with premium handcrafted design, construction and finish. This maintained, powerful yacht, is easy to handle due to the fully hydraulically operated sail and furling system, the hydraulic bowthruster and a transom hatch that also transforms into a bathing platform.

Alta Marea’s accommodation offers 3 suites for up to 8 guests, comprising of 1 owners cabin and 2 twin cabins with Pullman. She is also capable of carrying up to 3 crew onboard to ensure a relaxed luxury yacht experience.`,
    images: [
      'https://storage.googleapis.com/studioprod/9d3132a7-f0d7-4632-9856-a19e527d2ebb.jpg', 'https://storage.googleapis.com/studioprod/41974558-4541-477a-9764-d6213768652d.jpg', 'https://storage.googleapis.com/studioprod/401a4e50-4822-446a-84a1-0268a23c34a2.jpg', 'https://storage.googleapis.com/studioprod/8461a257-21a8-4e8c-8f15-f55a31f7535b.jpg', 'https://storage.googleapis.com/studioprod/c7f465c7-c377-4b68-8742-99049449a0d8.jpg', 'https://storage.googleapis.com/studioprod/d8c83556-2e64-4e36-97d5-8664150b0162.jpg', 'https://storage.googleapis.com/studioprod/e6423a63-7182-4f36-963e-32d2f2b3e83b.jpg', 'https://storage.googleapis.com/studioprod/f8776657-61c0-4200-a549-3732d8479e0f.jpg', 'https://storage.googleapis.com/studioprod/f752c1df-8a58-406a-83a3-b40557458428.jpg', 'https://storage.googleapis.com/studioprod/735a1197-2a54-47b6-96d5-6548545e1a38.jpg', 'https://storage.googleapis.com/studioprod/24432095-25b8-4c9f-8646-621815e98516.jpg', 'https://storage.googleapis.com/studioprod/5c2c589b-8f3e-4f7f-8e2b-f1d2d00c4e1f.jpg', 'https://storage.googleapis.com/studioprod/7e034b7f-3151-4b1f-9988-598d9753e1f5.jpg', 'https://storage.googleapis.com/studioprod/4a49c6f2-a083-4c9c-9c7f-b6e8a0f82d1c.jpg', 'https://storage.googleapis.com/studioprod/364a59f5-195b-4a58-8120-9943b593684a.jpg', 'https://storage.googleapis.com/studioprod/d95e7d58-9c16-419b-866d-cb511942c262.jpg', 'https://storage.googleapis.com/studioprod/c615848f-c30f-48d5-9831-2856f6424a1b.jpg', 'https://storage.googleapis.com/studioprod/1a789a58-8255-4a58-8686-2187d9047321.jpg', 'https://storage.googleapis.com/studioprod/046429b9-2534-469a-8c88-de9784774612.jpg', 'https://storage.googleapis.com/studioprod/8d1e2e1d-4034-4537-b6a6-f28829f0e137.jpg'
    ],
    seller: {
      name: 'Northrop and Johnson (Palma)',
      email: 'palma@northropandjohnson.com',
      phone: '+34 971 707 900',
      address: 'Calle Porto,Pi 4A, Edf. Dux 1º A, Baleares, 07015'
    },
    engine: {
      brand: 'Mercedes',
      type: 'MTU V10',
      power: 320
    }
  },
];

export const boatTypes: BoatType[] = ['Sailboat', 'Yacht', 'Fishing Boat', 'Speedboat', 'Catamaran'];

export async function getBoats(): Promise<Boat[]> {
  return boats;
}

export async function getBoatById(id: string | undefined): Promise<Boat | undefined> {
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
