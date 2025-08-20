
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

interface CryptoOption {
  name: string;
  address: string;
}

const cryptoOptions: CryptoOption[] = [
  { name: "BTC", address: "bc1qqku6e3qxyhlv5fvjaxazt0v5f5mf77lzt0ymm0" },
  { name: "ETH/ERC20", address: "0x328bEaba35Eb07C1D4C82b19cE36A7345ED52C54" },
  { name: "Sol", address: "Gc1Xak8dXJY7h6G8XXMefa9BaiT8VMEsm6G4DXMzyCaX" },
  { name: "BNB Smart Chain", address: "0x328bEaba35Eb07C1D4C82b19cE36A7345ED52C54" },
  { name: "USDT (TRC20)", address: "THycvE5TKFTLv4nZsq8SJJCYhDmvysSLyk" },
];

export function CryptoPayment() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast({
        title: "Address Copied!",
        description: "The wallet address has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="w-full">
      <ScrollArea className="h-64">
        <div className="space-y-4 pr-4">
          {cryptoOptions.map((option) => (
            <Card key={option.name}>
              <CardContent className="pt-4 space-y-2">
                <p className="font-semibold text-sm text-primary">{option.name}</p>
                <div className="relative">
                  <Input 
                    value={option.address} 
                    readOnly 
                    className="pr-12 text-center text-xs sm:text-sm bg-muted border-muted-foreground/20"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8" 
                    onClick={() => handleCopy(option.address)}
                  >
                    {copiedAddress === option.address ? 
                        <Check className="h-4 w-4 text-green-500" /> : 
                        <Copy className="h-4 w-4" />
                    }
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
