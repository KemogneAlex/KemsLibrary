'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FIELD_NAMES, FIELD_TYPES } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { toast } from 'sonner';
import { ZodType } from 'zod';
import FileUpload from './FileUpload';
interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === 'SIGN_IN';

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async data => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success(
        isSignIn
          ? 'Vous vous êtes connecté avec succès.'
          : 'Vous vous êtes inscrit avec succès.'
      );

      router.push('/');
    } else {
      toast.error(
        result.error ??
          `Erreur lors de la ${isSignIn ? 'connexion' : 'inscription'} — veuillez réessayer.`
      );
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold text-white'>
        {isSignIn
          ? 'Bienvenue sur KemsLibrary👋 '
          : 'Créez votre compte bibliothèque'}
      </h1>
      <p className='text-light-100'>
        {isSignIn
          ? 'Accédez à la vaste collection de ressources et restez à jour'
          : "Veuillez compléter tous les champs et télécharger une pièce d'identité universitaire valide pour accéder à la bibliothèque"}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='w-full space-y-6'
        >
          {Object.keys(defaultValues).map(field => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='capitalize'>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === 'universityCard' ? (
                      <FileUpload
                        type='image'
                        accept='image/*'
                        placeholder='Télécharger votre ID'
                        folder='ids'
                        variant='dark'
                        onFileChange={field.onChange}
                      />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className='form-input'
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type='submit' className='form-btn cursor-pointer'>
            {isSignIn ? 'Se connecter' : "S'inscrire"}
          </Button>
        </form>
      </Form>

      <p className='text-center text-base font-medium'>
        {isSignIn
          ? 'Nouveau sur KemsLibrary ? '
          : 'Vous avez déjà un compte ? '}

        <Link
          href={isSignIn ? '/sign-up' : '/sign-in'}
          className='font-bold text-primary cursor-pointer'
        >
          {isSignIn ? 'Créer un compte' : 'Se connecter'}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
