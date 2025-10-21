'use client';

import { useState, useEffect } from 'react';
import { Book } from '@/types/book';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const savedBooks = localStorage.getItem('book-list');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      // サンプルデータ
      const sampleBooks: Book[] = [
        {
          id: '1',
          title: 'リーダブルコード',
          author: 'Dustin Boswell',
          rating: 5,
        },
        {
          id: '2',
          title: 'Clean Code',
          author: 'Robert C. Martin',
          rating: 4,
        },
        {
          id: '3',
          title: '設計パターン入門',
          author: 'GoF',
          rating: 3,
        },
      ];
      setBooks(sampleBooks);
      localStorage.setItem('book-list', JSON.stringify(sampleBooks));
    }
  }, []);

  const addBook = (bookData: Omit<Book, 'id'>) => {
    const newBook: Book = {
      ...bookData,
      id: Date.now().toString(),
    };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem('book-list', JSON.stringify(updatedBooks));
  };

  const getBooksByRating = (sortOrder: 'asc' | 'desc' = 'desc') => {
    return [...books].sort((a, b) => {
      return sortOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating;
    });
  };

  const getFavoriteBooks = (favoriteIds: string[]) => {
    return books.filter(book => favoriteIds.includes(book.id));
  };

  return {
    books,
    addBook,
    getBooksByRating,
    getFavoriteBooks,
  };
};
