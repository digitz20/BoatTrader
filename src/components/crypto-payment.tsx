
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";

interface CryptoOption {
  name: string;
  address: string;
}

const cryptoOptions: CryptoOption[] = [
  { name: "Bitcoin", address: "bc1qqku6e3qxyhlv5fvjaxazt0v5f5mf77lzt0ymm0" },
  { name: "Ethereum / ERC20", address: "0x328bEaba35Eb07C1D4C82b19cE36A7345ED52C54" },
  { name: "USDT (TRC20)", address: "THycvE5TKFTLv4nZsq8SJJCYhDmvysSLyk" },
  { name: "Solana", address: "Gc1Xak8dXJY7h6G8XXMefa9BaiT8VMEsm6G4DXMzyCaX" },
  { name: "BNB Smart Chain", address: "0x328bEaba35Eb07C1D4C82b19cE36A7345ED52C54" },
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
    <Tabs defaultValue="Bitcoin" className="w-full">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <TabsList className="inline-flex w-max">
          {cryptoOptions.map(option => (
            <TabsTrigger key={option.name} value={option.name}>
              {option.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </ScrollArea>
      {cryptoOptions.map(option => (
        <TabsContent key={option.name} value={option.name}>
          <Card>
            <CardContent className="space-y-6 pt-6">
              <p className="text-center text-sm text-muted-foreground">
                Copy the address below.
              </p>
              <div className="flex items-center space-x-2">
                <Input value={option.address} readOnly />
                <Button variant="outline" size="icon" onClick={() => handleCopy(option.address)}>
                  {copiedAddress === option.address ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
