
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentOptionsDialog } from "./payment-options-dialog";

interface RentBoatDialogProps {
  boatPrice: number;
  isCard?: boolean;
}

export function RentBoatDialog({ boatPrice, isCard = false }: RentBoatDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState(1);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const dailyRate = boatPrice * 0.05;
  const totalPrice = dailyRate * days;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleContinue = () => {
    setIsOpen(false);
    setShowPaymentDialog(true);
  };
  
  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setDays(value);
    } else {
      setDays(1);
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">Rent Boat</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Rent this Boat</DialogTitle>
            <DialogDescription>
              Calculate your rental price based on the number of days.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Daily Rental Rate:</p>
                <p className="text-sm font-semibold">{formatPrice(dailyRate)} (5% of purchase price)</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="days" className="text-right">
                Days
              </Label>
              <Input
                id="days"
                type="number"
                value={days}
                onChange={handleDaysChange}
                className="col-span-3"
                min="1"
              />
            </div>
            <div className="flex justify-between items-center text-lg font-bold text-primary">
                <p>Total Rental Price:</p>
                <p>{formatPrice(totalPrice)}</p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleContinue}>Continue to Payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <PaymentOptionsDialog 
        open={showPaymentDialog} 
        onOpenChange={setShowPaymentDialog}
        isTriggered={true}
      />
    </>
  );
}
