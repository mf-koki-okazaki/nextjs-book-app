import { z } from 'zod';

export const bookSchema = z.object({
  title: z
    .string()
    .min(1, '書籍タイトルは必須です')
    .max(50, '書籍タイトルは50文字以内で入力してください'),
  author: z
    .string()
    .min(1, '著者名は必須です')
    .max(30, '著者名は30文字以内で入力してください'),
  rating: z
    .number()
    .min(1, '評価は1以上を選択してください')
    .max(5, '評価は5以下を選択してください'),
});

export type BookFormData = z.infer<typeof bookSchema>;
