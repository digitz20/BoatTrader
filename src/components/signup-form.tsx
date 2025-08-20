
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function SignupForm({ onLoginClick }: { onLoginClick: () => void }) {
  const { toast } = useToast();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Signup Successful",
      description: "You have successfully created an account. Please log in.",
    });
    onLoginClick(); // Switch to login view after successful signup
  };

  return (
    <div>
        <form onSubmit={handleSignup} className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" required />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" required />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
            Create an account
        </Button>
        </form>
        <div className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <Button variant="link" className="p-0 h-auto" onClick={onLoginClick}>
            Log in
        </Button>
        </div>
    </div>
  );
}
