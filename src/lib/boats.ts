

import type { Boat, BoatType } from './types';

const boats: Boat[] = [
  {
    id: '1',
    name: '2016 Sunseeker 131',
    type: 'Yacht',
    class: 'Motor Yacht',
    price: 14950000,
    location: 'Fort Lauderdale, FL',
    year: 2016,
    length: 131,
    make: 'Sunseeker',
    model: '131 Yacht',
    description: 'This Sunseeker 131 is a masterpiece of design and engineering. She offers a spacious and luxurious interior with accommodation for up to 12 guests in 5 cabins. Her sleek lines and powerful engines ensure an unforgettable cruising experience.',
    images: ['https://images.boattrader.com/resize/1/67/79/8526779_20230111123940491_1_XLARGE.jpg?w=891&ratio=default&t=1675278529000&format=webp&exact', 'https://storage.googleapis.com/studioprod/401a4e50-4822-446a-84a1-0268a23c34a2.jpg', 'https://storage.googleapis.com/studioprod/8461a257-21a8-4e8c-8f15-f55a31f7535b.jpg'],
    seller: { name: 'Prestige Marine', email: 'contact@prestigemarine.net', phone: '+1-555-987-6543', address: '456 Marina Bay, Miami, FL' },
    engine: {
        brand: 'MTU',
        type: '12V 2000 M94',
        power: 1950,
        hours: 2200
    }
  },
  {
    id: '2',
    name: '2006 Pershing 115',
    type: 'Yacht',
    class: 'Express Yacht',
    price: 3500000,
    location: 'Miami, FL',
    year: 2006,
    length: 115,
    make: 'Pershing',
    model: '115',
    description: 'A true icon of performance and style. The Pershing 115 combines the thrill of a sports car with the luxury of a superyacht. With a top speed of over 50 knots, she is sure to turn heads wherever she goes.',
    images: ['https://images.boattrader.com/resize/1/45/57/2006-pershing-115-power-9824557-20250708053342055-1.jpg?w=891&ratio=default&t=1751978023000&format=webp&exact', 'https://storage.googleapis.com/studioprod/735a1197-2a54-47b6-96d5-6548545e1a38.jpg', 'https://storage.googleapis.com/studioprod/24432095-25b8-4c9f-8646-621815e98516.jpg'],
    seller: { name: 'Oceanic Yachts', email: 'sales@oceanicyachts.com', phone: '+1-555-123-4567', address: '123 Ocean Ave, Newport, RI' },
    engine: {
        brand: 'MTU',
        type: '16V 4000 M90',
        power: 3700,
        hours: 1800
    }
  },
  {
    id: '3',
    name: '1998 Feadship 50m',
    type: 'Yacht',
    class: 'Displacement',
    price: 18500000,
    location: 'Monaco',
    year: 1998,
    length: 164,
    make: 'Feadship',
    model: '50m',
    description: 'A classic Feadship with timeless lines and exceptional build quality. This 50m motor yacht has been meticulously maintained and offers a comfortable and elegant interior, perfect for long-range cruising.',
    images: ['https://images.boattrader.com/resize/1/98/97/1998-feadship-50m-power-9659897-20250120141136242-1_XLARGE.jpg?w=891&ratio=default&t=1737411236000&format=webp&exact', 'https://storage.googleapis.com/studioprod/f8776657-61c0-4200-a549-3732d8479e0f.jpg'],
    seller: { name: 'Coastal Charters', email: 'info@coastalcharters.com', phone: '+1-555-321-9876', address: '789 Dockside Dr, Outer Banks, NC' },
     engine: {
        brand: 'Caterpillar',
        type: '3512B DITA',
        power: 1380,
        hours: 10500
    }
  },
  {
    id: '4',
    name: '2023 Formula 380 SSC',
    type: 'Speedboat',
    class: 'Super Sport Crossover',
    price: 1100000,
    location: 'Lake Tahoe, CA',
    year: 2023,
    length: 38,
    make: 'Formula',
    model: '380 Super Sport Crossover',
    description: 'The Formula 380 Super Sport Crossover is a new breed of boat that combines the comfort of a cruiser with the performance of a sport boat. She is perfect for entertaining and enjoying a day on the water.',
    images: ['https://images.boattrader.com/resize/1/29/56/2025-sunreef-100-power-power-9872956-20250724065706928-1.jpg?w=891&ratio=default&t=1753365453000&format=webp&exact', 'https://storage.googleapis.com/studioprod/8d1e2e1d-4034-4537-b6a6-f28829f0e137.jpg'],
    seller: { name: 'Tahoe Power Sports', email: 'sales@tahoepower.com', phone: '+1-555-555-1212', address: '101 Lakeside Blvd, Lake Tahoe, CA' },
    engine: {
        brand: 'Mercury Racing',
        type: '500R',
        power: 500,
        hours: 40
    }
  },
  {
    id: '5',
    name: '2013 Marquis 630',
    type: 'Yacht',
    class: 'Sport Yacht',
    price: 1300000,
    location: 'Fort Lauderdale, FL',
    year: 2013,
    length: 63,
    make: 'Marquis',
    model: '630 Sport Yacht',
    description: 'This Marquis 630 Sport Yacht is a stunning example of Italian design and American craftsmanship. She features a spacious and open layout with 3 staterooms and 2 heads, perfect for cruising with family and friends.',
    images: ['https://images.boattrader.com/resize/1/26/47/2013-marquis-630-sport-yacht-power-9792647-20250513130218103-1_XLARGE.jpg?w=891&ratio=default&t=1747166539000&format=webp&exact', 'https://storage.googleapis.com/studioprod/046429b9-2534-469a-8c88-de9784774612.jpg', 'https://storage.googleapis.com/studioprod/c615848f-c30f-48d5-9831-2856f6424a1b.jpg', 'https://storage.googleapis.com/studioprod/1a789a58-8255-4a58-8686-2187d9047321.jpg'],
    seller: { name: 'The Catamaran Company', email: 'cats@catamarans.com', phone: '+1-555-246-8135', address: '200 Yacht Haven, Fort Lauderdale, FL' },
    engine: {
        brand: 'Volvo Penta',
        type: 'IPS 900',
        power: 700,
        hours: 950
    }
  },
  {
    id: '6',
    name: '2018 MCY 96',
    type: 'Yacht',
    class: 'Motor Yacht',
    price: 7800000,
    location: 'Annapolis, MD',
    year: 2018,
    length: 96,
    make: 'Monte Carlo Yachts',
    model: 'MCY 96',
    description: 'The MCY 96 is a stunning yacht with a modern and elegant design. She features a spacious flybridge with a jacuzzi, a large salon, and a full-beam master stateroom. She is perfect for entertaining and cruising in style.',
    images: ['https://images.boattrader.com/resize/1/66/75/8696675_20230217060809739_1_XLARGE.jpg?w=891&ratio=default&t=1676646140000&format=webp&exact', 'https://storage.googleapis.com/studioprod/d95e7d58-9c16-419b-866d-cb511942c262.jpg'],
    seller: { name: 'Chesapeake Bay Yachts', email: 'sales@cbyachts.com', phone: '+1-555-135-7924', address: '300 Severn Ave, Annapolis, MD' },
    engine: {
        brand: 'MAN',
        type: 'V12',
        power: 2000,
        hours: 1100
    }
  },
    {
    id: '7',
    name: '2014 Powerplay Catamaran',
    type: 'Catamaran',
    class: 'Power Catamaran',
    price: 2100000,
    location: 'Key West, FL',
    year: 2014,
    length: 58,
    make: 'Powerplay Catamarans',
    model: '58',
    description: 'A custom-built power catamaran that combines performance and comfort. She offers a spacious and open layout with a large flybridge, perfect for entertaining and enjoying the outdoors.',
    images: ['https://images.boattrader.com/resize/1/99/71/2024-wider-widercat-92-power-9539971-20250818051100351-1.jpg?w=891&ratio=default&t=1755519962000&format=webp&exact'],
    seller: { name: 'Reel Time Brokers', email: 'sales@reeltime.com', phone: '+1-555-246-8135', address: '400 Caroline St, Key West, FL' },
    engine: {
        brand: 'Yanmar',
        type: '8LV',
        power: 370,
        hours: 1500
    }
  },
  {
    id: '8',
    name: '2016 Benetti 93',
    type: 'Yacht',
    class: 'Motor Yacht',
    price: 4500000,
    location: 'San Diego, CA',
    year: 2016,
    length: 93,
    make: 'Benetti',
    model: 'Delfino 93',
    description: 'This Benetti Delfino 93 is a beautiful and elegant yacht with a classic design. She offers a spacious interior with accommodation for up to 10 guests in 5 cabins. Her large sundeck is perfect for relaxing and enjoying the views.',
    images: ['https://images.boattrader.com/resize/1/56/13/2021-sanlorenzo-sl-120-asymmetric-power-9445613-20240801054724436-1_XLARGE.jpg?w=891&ratio=default&t=1722516445000&format=webp&exact', 'https://storage.googleapis.com/studioprod/4a49c6f2-a083-4c9c-9c7f-b6e8a0f82d1c.jpg'],
    seller: { name: 'West Coast Yachts', email: 'info@wcyachts.com', phone: '+1-555-975-3186', address: '500 Harbor Island Dr, San Diego, CA' },
    engine: {
        brand: 'MTU',
        type: '8V 2000 M72',
        power: 1080,
        hours: 2100
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
      'https://images.boattrader.com/resize/1/79/59/2022-greenaval-gn47-hybrid-power-9727959-20250325135312884-1_XLARGE.jpg?w=891&ratio=default&t=1742936027000&format=webp&exact', 'https://storage.googleapis.com/studioprod/41974558-4541-477a-9764-d6213768652d.jpg', 'https://storage.googleapis.com/studioprod/401a4e50-4822-446a-84a1-0268a23c34a2.jpg', 'https://storage.googleapis.com/studioprod/8461a257-21a8-4e8c-8f15-f55a31f7535b.jpg', 'https://storage.googleapis.com/studioprod/c7f465c7-c377-4b68-8742-99049449a0d8.jpg', 'https://storage.googleapis.com/studioprod/d8c83556-2e64-4e36-97d5-8664150b0162.jpg', 'https://storage.googleapis.com/studioprod/e6423a63-7182-4f36-963e-32d2f2b3e83b.jpg', 'https://storage.googleapis.com/studioprod/f8776657-61c0-4200-a549-3732d8479e0f.jpg', 'https://storage.googleapis.com/studioprod/f752c1df-8a58-406a-83a3-b40557458428.jpg', 'https://storage.googleapis.com/studioprod/735a1197-2a54-47b6-96d5-6548545e1a38.jpg', 'https://storage.googleapis.com/studioprod/24432095-25b8-4c9f-8646-621815e98516.jpg', 'https://storage.googleapis.com/studioprod/5c2c589b-8f3e-4f7f-8e2b-f1d2d00c4e1f.jpg', 'https://storage.googleapis.com/studioprod/7e034b7f-3151-4b1f-9988-598d9753e1f5.jpg', 'https://storage.googleapis.com/studioprod/4a49c6f2-a083-4c9c-9c7f-b6e8a0f82d1c.jpg', 'https://storage.googleapis.com/studioprod/364a59f5-195b-4a58-8120-9943b593684a.jpg', 'https://storage.googleapis.com/studioprod/d95e7d58-9c16-419b-866d-cb511942c262.jpg', 'https://storage.googleapis.com/studioprod/c615848f-c30f-48d5-9831-2856f6424a1b.jpg', 'https://storage.googleapis.com/studioprod/1a789a58-8255-4a58-8686-2187d9047321.jpg', 'https://storage.googleapis.com/studioprod/046429b9-2534-469a-8c88-de9784774612.jpg', 'https://storage.googleapis.com/studioprod/8d1e2e1d-4034-4537-b6a6-f28829f0e137.jpg'
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
  {
    id: '9',
    name: '2022 Riva 88 Folgore',
    type: 'Yacht',
    class: 'Sport Yacht',
    price: 8500000,
    location: 'Sardinia, Italy',
    year: 2022,
    length: 88,
    make: 'Riva',
    model: '88 Folgore',
    description: 'The Riva 88 Folgore is a stunning combination of luxury and performance. With its sleek lines and powerful engines, it offers an exhilarating experience on the water.',
    images: ['https://images.boattrader.com/resize/1/33/30/2012-lagoon-620-neo-sail-9743330-20250523104949780-1_XLARGE.jpg?w=891&ratio=default&t=1754326745000&format=webp&exact'],
    seller: { name: 'Mediterranean Yachts', email: 'contact@medyachts.com', phone: '+39-0789-123456', address: 'Porto Cervo, Sardinia, Italy' },
    engine: { brand: 'MTU', type: '16V 2000 M96L', power: 2638, hours: 300 }
  },
  {
    id: '10',
    name: '2021 Sunreef 80 Power',
    type: 'Catamaran',
    class: 'Power Catamaran',
    price: 9500000,
    location: 'Fort Lauderdale, FL',
    year: 2021,
    length: 80,
    make: 'Sunreef',
    model: '80 Power',
    description: 'The Sunreef 80 Power is a luxurious and spacious catamaran, offering unparalleled comfort and stability. Its wide beam provides vast living areas, both indoors and out.',
    images: ['https://images.boattrader.com/resize/1/92/12/2024-sirena-88-power-9759212-20250415075557428-1_XLARGE.jpg?w=891&ratio=default&t=1744728958000&format=webp&exact'],
    seller: { name: 'The Catamaran Company', email: 'cats@catamarans.com', phone: '+1-555-246-8135', address: '200 Yacht Haven, Fort Lauderdale, FL' },
    engine: { brand: 'Volvo Penta', type: 'IPS 1200', power: 900, hours: 500 }
  },
  {
    id: '11',
    name: '2020 Azimut Grande 32 Metri',
    type: 'Yacht',
    class: 'Motor Yacht',
    price: 11000000,
    location: 'Viareggio, Italy',
    year: 2020,
    length: 105,
    make: 'Azimut',
    model: 'Grande 32 Metri',
    description: 'The Azimut Grande 32 Metri is a masterpiece of Italian design, offering a perfect blend of elegance and technology. Its spacious flybridge and beach club are ideal for entertaining guests.',
    images: ['https://images.boattrader.com/resize/1/96/58/2006-couach-2800-power-9629658-20241206042934720-1_XLARGE.jpg?w=891&ratio=default&t=1733488175000&format=webp&exact'],
    seller: { name: 'Italian Yacht Group', email: 'sales@iyg.it', phone: '+39-0584-38321', address: 'Via M. Coppino, 443, Viareggio, Italy' },
    engine: { brand: 'MTU', type: '16V 2000 M86', power: 2200, hours: 800 }
  }
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
