
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Landmark, CreditCard, HelpCircle, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CryptoPayment } from "./crypto-payment";

const PayPalLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
        <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -2.5 -2.5 -5 -5 -5h-2.5z"></path>
        <path d="M8 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -2.5 -2.5 -5 -5 -5h-2.5z" fill="#003087"></path>
        <path d="M6 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -2.5 -2.5 -5 -5 -5h-2.5z" fill="#009cde"></path>
        <path d="M4 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -2.5 -2.5 -5 -5 -5h-2.5z" fill="#012169"></path>
    </svg>
);

const MoneyGramLogo = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-red-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        <path d="M12 12l3 3m-3-3l-3 3m0-6l3 3m-3-3l-3-3"></path>
    </svg>
);

export function PaymentOptionsDialog() {
  const { toast } = useToast();
  const [view, setView] = useState<"options" | "crypto">("options");

  const handleUnavailablePayment = () => {
    toast({
      variant: "destructive",
      title: "Payment Option Unavailable",
      description: "This payment option is unavailable at the moment. Please use our crypto payment option.",
    });
    setView("crypto");
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setTimeout(() => setView("options"), 300);
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">Make Payment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
         {view === "options" && (
            <>
                <DialogHeader>
                  <DialogTitle>Payment Options</DialogTitle>
                  <DialogDescription>
                    Please select your preferred payment method to proceed.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button variant="outline" className="justify-start">
                    <Landmark className="mr-2 h-4 w-4" /> Bank Transfer
                  </Button>
                  <Button variant="outline" className="justify-start" onClick={handleUnavailablePayment}>
                    <PayPalLogo /> PayPal
                  </Button>
                  <Button variant="outline" className="justify-start" onClick={handleUnavailablePayment}>
                    <MoneyGramLogo /> MoneyGram
                  </Button>
                   <Button variant="outline" className="justify-start" onClick={() => setView('crypto')}>
                    <CreditCard className="mr-2 h-4 w-4" /> Pay with Crypto
                  </Button>
                   <Button variant="outline" className="justify-start">
                    <HelpCircle className="mr-2 h-4 w-4" /> Others
                  </Button>
                </div>
            </>
         )}
         {view === "crypto" && (
            <>
                <DialogHeader>
                    <div className="flex items-center gap-2">
                         <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setView('options')}>
                             <ArrowLeft className="h-4 w-4"/>
                         </Button>
                        <DialogTitle>Pay with Crypto</DialogTitle>
                    </div>
                  <DialogDescription>
                    Send your payment to one of the addresses below.
                  </DialogDescription>
                </DialogHeader>
                <CryptoPayment />
            </>
         )}
      </DialogContent>
    </Dialog>
  );
}
