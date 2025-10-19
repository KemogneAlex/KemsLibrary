'use server';
import { signIn } from '@/auth';
import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import config from '@/lib/config';
import ratelimit from '@/lib/ratelimit';
import { workflowClient } from '@/lib/workflow';
import { compare, hash } from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, 'email' | 'password'>
) => {
  const { email, password } = params;

  // Rate limiting pour la connexion
  const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect('/too-fast');

  // Vérifier d'abord si l'utilisateur existe
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) {
    return { success: false, error: 'Email ou mot de passe incorrect' };
  }

  // Vérifier le mot de passe
  const isPasswordValid = await compare(password, user[0].password);

  if (!isPasswordValid) {
    return { success: false, error: 'Email ou mot de passe incorrect' };
  }

  try {
    // Utiliser NextAuth pour la gestion de session uniquement
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return {
        success: false,
        error: 'Erreur de connexion. Veuillez réessayer.',
      };
    }

    return { success: true };
  } catch (error) {
    console.log(error, 'Erreur de connexion');
    return {
      success: false,
      error: 'Erreur de connexion. Veuillez réessayer.',
    };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, universityId, password, universityCard } = params;
  const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect('/too-fast');

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return {
      success: false,
      error: 'Un utilisateur avec cette adresse email existe déjà',
    };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hashedPassword,
      universityCard,
    });

    await workflowClient.trigger({
      url: `${config.env.prodApiEndpoint}/api/workflows/onboarding`,
      body: {
        email,
        fullName,
      },
    });

    // Tenter de connecter automatiquement l'utilisateur après l'inscription
    const signInResult = await signInWithCredentials({ email, password });

    if (!signInResult.success) {
      console.log(
        'Erreur lors de la connexion automatique après inscription:',
        signInResult.error
      );
      // L'utilisateur a été créé mais la connexion automatique a échoué
      return {
        success: false,
        error:
          'Compte créé mais erreur lors de la connexion automatique. Veuillez vous connecter manuellement.',
      };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Erreur lors de l'inscription");

    if (error instanceof Error) {
      if (error.message.includes('duplicate key')) {
        return {
          success: false,
          error: 'Un utilisateur avec cette adresse email existe déjà',
        };
      } else if (error.message.includes('violates check constraint')) {
        return {
          success: false,
          error:
            'Les données fournies ne respectent pas les contraintes de la base de données',
        };
      }
    }

    return {
      success: false,
      error: "Erreur lors de l'inscription. Veuillez réessayer.",
    };
  }
};
