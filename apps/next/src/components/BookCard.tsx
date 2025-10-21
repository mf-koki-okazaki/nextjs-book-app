'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Rating,
  Box,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';
import { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          著者: {book.author}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            評価:
          </Typography>
          <Rating
            name="read-only"
            value={book.rating}
            readOnly
            size="small"
          />
        </Box>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => onToggleFavorite(book.id)}
          color={isFavorite ? 'error' : 'default'}
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BookCard;
