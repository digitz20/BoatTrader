"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Landmark, CreditCard, HelpCircle } from "lucide-react";

export function PaymentOptionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">Make Payment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
          <Button variant="outline" className="justify-start">
            <CreditCard className="mr-2 h-4 w-4" /> PayPal
          </Button>
          <Button variant="outline" className="justify-start">
            <Landmark className="mr-2 h-4 w-4" /> MoneyGram
          </Button>
           <Button variant="outline" className="justify-start">
            <HelpCircle className="mr-2 h-4 w-4" /> Others
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
