import { z } from 'zod';

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: 'Please select a Name' }),
  year: z.string({ required_error: 'Please select a Year' }),
  startMonth: z.string({ required_error: 'Please select a Start Month' }),
  endMonth: z.string({ required_error: 'Please select a End Month' }),
});

export const loginSchema = z.object({
  id: z.string({ required_error: 'ID is required' }),
  password: z.string({ required_error: 'Password is required' }),
});