"use client";

import { useState } from 'react';
import { useViewedBoats } from '@/hooks/use-viewed-boats';
import { boatRecommendation } from '@/ai/flows/boat-recommendation';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from './ui/dialog';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AiRecommendations() {
  const { viewedBoats, clearViewedBoats, isInitialized } = useViewedBoats();
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
    if (viewedBoats.length === 0) {
      toast({
        variant: "destructive",
        title: "Not enough history",
        description: "Please view a few boats before asking for recommendations.",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const result = await boatRecommendation({
        viewedBoatDescriptions: viewedBoats.map(b => b.description),
      });
      setRecommendations(result.recommendations);
    } catch (e) {
      console.error(e);
      setError('Sorry, we had trouble generating recommendations. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if(open) {
      // Reset state when opening
      setRecommendations([]);
      setError(null);
      setIsLoading(false);
    }
    setIsOpen(open);
  }

  const handleDone = () => {
    if (recommendations.length > 0) {
      clearViewedBoats();
    }
    handleOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Boat Match
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>AI Boat Match</DialogTitle>
          <DialogDescription>
            Based on your viewing history, we can recommend boats you might like.
            You have viewed {viewedBoats.length} boat(s) this session.
          </DialogDescription>
        </DialogHeader>
        
        {isLoading && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4">Finding your perfect match...</p>
          </div>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {recommendations.length > 0 && !isLoading && (
          <div>
            <h3 className="mb-2 font-semibold">Here are some recommendations for you:</h3>
            <ul className="list-disc space-y-2 pl-5">
              {recommendations.map((rec, index) => (
                <li key={index} className="text-sm">{rec}</li>
              ))}
            </ul>
          </div>
        )}

        <DialogFooter className="mt-4">
          {!isLoading && recommendations.length === 0 && (
             <Button onClick={handleGetRecommendations} className="w-full" disabled={!isInitialized}>
               <Wand2 className="mr-2 h-4 w-4" />
               Generate Recommendations
             </Button>
          )}
          {(isLoading || recommendations.length > 0 || error) && (
            <Button onClick={handleDone} variant="secondary" className="w-full">
              Done
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
