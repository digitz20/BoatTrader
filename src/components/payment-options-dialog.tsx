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
import { Landmark, CreditCard, HelpCircle, ArrowLeft, Loader2, Send } from "lucide-react";
import { CryptoPayment } from "./crypto-payment";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

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

const InterswitchLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
        <path d="M4 12h16m-8-8v16" />
    </svg>
)

const PaymentOptionMessage = ({ icon, text, onClick }: { icon: React.ReactNode, text: string, onClick: () => void }) => (
    <div onClick={onClick} className="cursor-pointer">
        <Alert className="border-transparent shadow-sm hover:bg-accent">
             <div className="flex items-center">
                {icon}
                <AlertTitle className="ml-2 font-medium">{text}</AlertTitle>
             </div>
        </Alert>
    </div>
);

interface PaymentOptionsDialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    isTriggered?: boolean;
    triggerLabel?: string;
}

export function PaymentOptionsDialog({ open, onOpenChange, isTriggered = false, triggerLabel = "Make Payment" }: PaymentOptionsDialogProps) {
  const [view, setView] = useState<"options" | "crypto" | "redirecting">("options");

  const handlePaymentSelection = () => {
    setView("redirecting");
    setTimeout(() => {
        setView("crypto");
    }, 3000);
  };

  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) {
        onOpenChange(open);
    }
    if (!open) {
      setTimeout(() => setView("options"), 300);
    }
  }

  const dialogProps = isTriggered ? { open, onOpenChange: handleOpenChange } : {};

  return (
    <Dialog {...dialogProps}>
      {!isTriggered && (
        <DialogTrigger asChild>
            <Button variant="outline" className="w-full">{triggerLabel}</Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
         {view === "options" && (
            <>
                <DialogHeader>
                  <DialogTitle>Payment Options</DialogTitle>
                  <DialogDescription>
                    Please select your preferred payment method to proceed.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 py-4">
                  <PaymentOptionMessage 
                    icon={<Landmark className="h-4 w-4" />}
                    text="Bank Transfer"
                    onClick={handlePaymentSelection} 
                  />
                  <PaymentOptionMessage 
                    icon={<CreditCard className="h-4 w-4" />}
                    text="Debit Card"
                    onClick={handlePaymentSelection} 
                  />
                   <PaymentOptionMessage 
                    icon={<CreditCard className="h-4 w-4" />}
                    text="Verve Card"
                    onClick={handlePaymentSelection} 
                  />
                   <PaymentOptionMessage 
                    icon={<CreditCard className="h-4 w-4" />}
                    text="Mastercard"
                    onClick={handlePaymentSelection} 
                  />
                   <PaymentOptionMessage 
                    icon={<PayPalLogo />}
                    text="PayPal"
                    onClick={handlePaymentSelection} 
                  />
                  <PaymentOptionMessage 
                    icon={<MoneyGramLogo />}
                    text="MoneyGram"
                    onClick={handlePaymentSelection} 
                  />
                  <PaymentOptionMessage 
                    icon={<InterswitchLogo />}
                    text="Interswitch"
                    onClick={handlePaymentSelection} 
                  />
                  <PaymentOptionMessage 
                    icon={<CreditCard className="h-4 w-4" />}
                    text="Pay with Crypto"
                    onClick={() => setView('crypto')} 
                  />
                  <PaymentOptionMessage 
                    icon={<HelpCircle className="h-4 w-4" />}
                    text="Others"
                    onClick={handlePaymentSelection} 
                  />
                </div>
            </>
         )}
         {view === "redirecting" && (
            <>
                <DialogHeader>
                  <DialogTitle>Processing Payment</DialogTitle>
                   <DialogDescription>
                    Your chosen payment method is currently unavailable.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-muted-foreground">Redirecting to our crypto payment page...</p>
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
                <div className="pt-4 space-y-4">
                    <CryptoPayment />
                     <p className="text-xs text-muted-foreground mt-2 text-center">
                        After payment, please send proof of receipt to the seller's contact information.
                     </p>
                </div>
            </>
         )}
      </DialogContent>
    </Dialog>
  );
}
