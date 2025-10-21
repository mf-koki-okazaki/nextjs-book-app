'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import { bookSchema, BookFormData } from '@/schemas/bookSchema';
import { useBooks } from '@/hooks/useBooks';

export default function AddBook() {
  const router = useRouter();
  const { addBook } = useBooks();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: '',
      author: '',
      rating: 1,
    },
  });

  const ratingValue = watch('rating');

  const onSubmit = (data: BookFormData) => {
    addBook(data);
    router.push('/');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          新規書籍追加
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
          <TextField
            {...register('title')}
            fullWidth
            label="書籍タイトル"
            error={!!errors.title}
            helperText={errors.title?.message}
            sx={{ mb: 3 }}
          />
          
          <TextField
            {...register('author')}
            fullWidth
            label="著者名"
            error={!!errors.author}
            helperText={errors.author?.message}
            sx={{ mb: 3 }}
          />
          
          <Box sx={{ mb: 3 }}>
            <Typography component="legend" sx={{ mb: 1 }}>
              評価
            </Typography>
            <Rating
              value={ratingValue}
              onChange={(_, newValue) => {
                setValue('rating', newValue || 1);
              }}
              size="large"
            />
            {errors.rating && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.rating.message}
              </Typography>
            )}
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              onClick={() => router.push('/')}
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              variant="contained"
            >
              追加
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
