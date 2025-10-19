import { z } from 'zod';

export const signUpSchema = z.object({
  fullName: z.string().min(3, 'Le nom complet doit contenir au moins 3 caractères'),
  email: z.string().email('Adresse email invalide'),
  universityId: z.coerce.number().int('L\'identifiant universitaire doit être un nombre entier').positive('L\'identifiant universitaire doit être positif'),
  universityCard: z.string().nonempty('La carte universitaire est requise'),
  password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
});

export const signInSchema = z.object({
  email: z.string().email('Adresse email invalide'),
  password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
});

export const bookSchema = z.object({
  title: z.string().trim().min(2, 'Le titre doit contenir au moins 2 caractères').max(100, 'Le titre ne doit pas dépasser 100 caractères'),
  description: z.string().trim().min(10, 'La description doit contenir au moins 10 caractères').max(1000, 'La description ne doit pas dépasser 1000 caractères'),
  author: z.string().trim().min(2, 'Le nom de l\'auteur doit contenir au moins 2 caractères').max(100, 'Le nom de l\'auteur ne doit pas dépasser 100 caractères'),
  genre: z.string().trim().min(2, 'Le genre doit contenir au moins 2 caractères').max(50, 'Le genre ne doit pas dépasser 50 caractères'),
  rating: z.coerce.number().min(1, 'La note doit être au moins 1').max(5, 'La note ne doit pas dépasser 5'),
  totalCopies: z.coerce.number().int('Le nombre de copies doit être un nombre entier').positive('Le nombre de copies doit être positif').lte(10000, 'Le nombre de copies ne doit pas dépasser 10000'),
  coverUrl: z.string().nonempty('L\'URL de la couverture est requise'),
  coverColor: z
    .string()
    .trim()
    .regex(/^#[0-9A-F]{6}$/i, 'La couleur de couverture doit être un code hexadécimal valide (ex: #FF0000)'),
  videoUrl: z.string().nonempty('L\'URL de la vidéo est requise'),
  summary: z.string().trim().min(10, 'Le résumé doit contenir au moins 10 caractères'),
});
