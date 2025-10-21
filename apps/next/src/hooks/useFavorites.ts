'use client';

import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('book-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (bookId: string) => {
    const newFavorites = favorites.includes(bookId)
      ? favorites.filter(id => id !== bookId)
      : [...favorites, bookId];
    
    setFavorites(newFavorites);
    localStorage.setItem('book-favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (bookId: string) => {
    return favorites.includes(bookId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};
