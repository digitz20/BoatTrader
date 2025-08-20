"use client";

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'aquaFindFavorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
      setFavorites([]);
    }
    setIsInitialized(true);
  }, []);

  const updateLocalStorage = (updatedFavorites: string[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  const addFavorite = useCallback((boatId: string) => {
    setFavorites(prev => {
      if (prev.includes(boatId)) return prev;
      const newFavorites = [...prev, boatId];
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
  }, []);

  const removeFavorite = useCallback((boatId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(id => id !== boatId);
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
  }, []);
  
  const isFavorite = useCallback((boatId: string) => favorites.includes(boatId), [favorites]);

  return { favorites, addFavorite, removeFavorite, isFavorite, isInitialized };
};
