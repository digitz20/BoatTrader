
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export function LoginForm({ onSignupClick }: { onSignupClick: () => void }) {
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back!",
    });
    // Assuming dialog closes on successful login, handled by parent component
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{' '}
        <Button variant="link" className="p-0 h-auto" onClick={onSignupClick}>
          Sign up
        </Button>
      </div>
    </div>
  );
}
