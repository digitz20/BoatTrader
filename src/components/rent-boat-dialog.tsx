
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PaymentOptionsDialog } from "./payment-options-dialog";

interface RentBoatDialogProps {
  boatPrice: number;
  isCard?: boolean;
}

const HOURLY_RATE = 100;
const DAILY_RATE = 2000;

export function RentBoatDialog({ boatPrice, isCard = false }: RentBoatDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rentalType, setRentalType] = useState<"hourly" | "daily">("hourly");
  const [duration, setDuration] = useState(1);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const rate = rentalType === 'hourly' ? HOURLY_RATE : DAILY_RATE;
  const totalPrice = rate * duration;

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
  
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setDuration(value);
    } else {
      setDuration(1);
    }
  }
  
  const handleRentalTypeChange = (value: "hourly" | "daily") => {
    setRentalType(value);
    setDuration(1); // Reset duration when type changes
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
              Calculate your rental price based on hours or days.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
             <RadioGroup defaultValue="hourly" onValueChange={handleRentalTypeChange} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hourly" id="hourly" />
                <Label htmlFor="hourly">Hourly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="daily" id="daily" />
                <Label htmlFor="daily">Daily</Label>
              </div>
            </RadioGroup>

            <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Rental Rate:</p>
                <p className="text-sm font-semibold">{formatPrice(rate)} / {rentalType === 'hourly' ? 'hour' : 'day'}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                {rentalType === 'hourly' ? 'Hours' : 'Days'}
              </Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={handleDurationChange}
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
