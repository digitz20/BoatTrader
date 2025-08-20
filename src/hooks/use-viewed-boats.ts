"use client";

import { useState, useEffect, useCallback } from 'react';
import type { Boat } from '@/lib/types';

const VIEWED_BOATS_KEY = 'aquaFindViewedBoats';
const MAX_VIEWED_BOATS = 10;

export const useViewedBoats = () => {
  const [viewedBoats, setViewedBoats] = useState<Boat[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedViewedBoats = sessionStorage.getItem(VIEWED_BOATS_KEY);
      if (storedViewedBoats) {
        setViewedBoats(JSON.parse(storedViewedBoats));
      }
    } catch (error) {
      console.error('Failed to parse viewed boats from sessionStorage', error);
      setViewedBoats([]);
    }
    setIsInitialized(true);
  }, []);

  const updateSessionStorage = (updatedBoats: Boat[]) => {
    sessionStorage.setItem(VIEWED_BOATS_KEY, JSON.stringify(updatedBoats));
  };

  const addViewedBoat = useCallback((boat: Boat) => {
    setViewedBoats(prev => {
      if (prev.some(b => b.id === boat.id)) {
        return prev;
      }
      
      const updatedBoats = [boat, ...prev].slice(0, MAX_VIEWED_BOATS);
      updateSessionStorage(updatedBoats);
      return updatedBoats;
    });
  }, []);

  const clearViewedBoats = useCallback(() => {
    setViewedBoats([]);
    sessionStorage.removeItem(VIEWED_BOATS_KEY);
  }, []);

  return { viewedBoats, addViewedBoat, clearViewedBoats, isInitialized };
};
