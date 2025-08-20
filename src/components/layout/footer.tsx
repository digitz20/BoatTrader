
import Link from "next/link";
import { Button } from "../ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const popularLinks = {
  "Boats for Sale by Type": [
    "Pontoon Boats for Sale", "Sailboats", "Fishing Boats", "Saltwater Fishing Boats",
    "Freshwater Fishing Boats", "Jet Ski, PWC & Jet Boats", "Houseboats", "Bass Boats",
    "Inflatable and RIB Boats", "Deck Boats", "Jon Boats", "Performance Speed Boats",
    "Center Console Boats", "Electric Boats", "Pleasure Boats", "Duck Boats",
    "Weekender Boats", "Yachts for Sale",
  ],
  "Boats for Sale by Make": [
    "Tracker Boats", "Boston Whaler Boats", "Ranger Boats", "Sea Ray Boats", "Lund Boats",
    "Bayliner Boats", "Chaparral Boats", "Yamaha Boats", "Lowe Boats", "Cobalt Boats",
    "Mako Boats", "Malibu Boats",
  ],
  "Boats for Sale by Location": [
    "Boats for sale in Florida", "Boats for sale in Texas", "Boats for sale in Georgia",
    "Boats for sale in Michigan", "Boats for sale in California", "Boats for sale in North Carolina",
    "Boats for sale in New York", "Boats for sale in South Carolina", "Boats for sale in Ohio",
    "Boats for sale in Virginia", "Boats for sale in New Jersey", "Boats for sale in Maryland",
  ],
  "Boat Dealers": [
    "Boat Dealers in Florida", "Boat Dealers in Minnesota", "Boat Dealers in Texas",
    "Boat Dealers in North Carolina", "Boat Dealers in Michigan", "Boat Dealers in South Carolina",
    "Boat Dealers in Ohio", "Boat Dealers in Kentucky", "Boat Dealers in Pennsylvania",
    "Boat Dealers in Illinois", "Boat Dealers in Wisconsin", "Boat Dealers in New York",
  ],
};

const companyLinks = {
    "Explore Boat Trader": ["Boats for Sale", "Outboard Motors & Engines", "Boat Trailers", "Boat Research", "Boating Lifestyle Calculator", "About Boat Trader"],
    "Sell Your Boat": ["Private Sellers", "Dealers", "My Boats"],
    "Finance": ["Boat Loans", "Boat Loan Calculator", "Boat Loan Rates", "FAQ - How to Finance"],
    "Services": ["Extended Service Plan", "Tire & Wheel Plan", "GAP Protection", "Roadside Assistance", "Boat Insurance", "Boat Transport", "Boat Warranty", "Boat Documentation", "Boat Rental", "Become a Member"],
}

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-800">
      <div className="container py-12 px-4">
        
        <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 text-center text-primary">Popular Boats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(popularLinks).map(([title, links]) => (
                <div key={title}>
                <h4 className="font-semibold text-primary mb-2">{title}</h4>
                <ul className="space-y-1">
                    {links.slice(0, 12).map(link => (
                    <li key={link}>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
                        </Link>
                    </li>
                    ))}
                    {links.length > 12 && (
                       <li>
                         <Link href="#" className="text-sm font-semibold text-primary hover:underline">
                           See More...
                         </Link>
                       </li>
                    )}
                </ul>
                </div>
            ))}
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t">
            <div>
                <h4 className="font-semibold text-primary mb-4">Connect with Us</h4>
                <div className="flex space-x-4">
                    <Link href="#"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                    <Link href="#"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                    <Link href="#"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                    <Link href="#"><Youtube className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                </div>
            </div>
            <div>
                 <h4 className="font-semibold text-primary mb-4">Download the BoatTrader App</h4>
                 <div className="flex space-x-2">
                    <Link href="#"><img src="https://placehold.co/120x40.png?text=App+Store" alt="App Store" data-ai-hint="button app store" /></Link>
                    <Link href="#"><img src="https://placehold.co/120x40.png?text=Google+Play" alt="Google Play" data-ai-hint="button google play" /></Link>
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t mt-8">
             {Object.entries(companyLinks).map(([title, links]) => (
                <div key={title}>
                <h3 className="font-bold text-primary mb-4">{title}</h3>
                <ul className="space-y-2">
                    {links.map(link => (
                    <li key={link}>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-8 border-t mt-8 text-xs text-muted-foreground">
             <span>Cookies</span>
             <Link href="#" className="hover:text-primary">Do Not Sell My Personal Information</Link>
             <Link href="#" className="hover:text-primary">Community Guidelines</Link>
             <Link href="#" className="hover:text-primary">Security Center</Link>
             <Link href="#" className="hover:text-primary">Site Map</Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4 mt-4">
             <p className="text-xs text-muted-foreground text-center">
                Copyright © {new Date().getFullYear()} Boats Group. All Rights Reserved
             </p>
             <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <Link href="#" className="hover:text-primary">Ad and Sponsorship Policy</Link>
                <Link href="#" className="hover:text-primary">Advertiser Agreement</Link>
                <Link href="#" className="hover:text-primary">Copyright</Link>
                <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary">Terms of Use</Link>
                <Link href="#" className="hover:text-primary">AdChoices</Link>
             </div>
        </div>
      </div>
    </footer>
  );
}
