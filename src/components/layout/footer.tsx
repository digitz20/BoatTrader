
import { Sailboat } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const footerLinks = {
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
    "Explore AquaFind": ["Boats for Sale", "Outboard Motors & Engines", "Boat Trailers", "Boat Research", "Boating Lifestyle Calculator", "About AquaFind"],
    "Sell Your Boat": ["Private Sellers", "Dealers", "My Boats"],
    "Finance": ["Boat Loans", "Boat Loan Calculator", "Boat Loan Rates", "FAQ - How to Finance"],
    "Services": ["Extended Service Plan", "Tire & Wheel Plan", "GAP Protection", "Roadside Assistance", "Boat Insurance", "Boat Transport", "Boat Warranty", "Boat Documentation", "Boat Rental", "Become a Member"],
}

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-800">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([title, links]) => (
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t mt-8">
            <div className="flex items-center gap-2">
                 <Sailboat className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-primary">AquaFind</span>
            </div>
             <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} AquaFind. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
