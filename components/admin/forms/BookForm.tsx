'use client';

import ColorPicker from '@/app/admin/ColorPicker';
import FileUpload from '@/components/FileUpload';
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
import { Textarea } from '@/components/ui/textarea';
import { createBook } from '@/lib/admin/actions/book';
import { bookSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface Props extends Partial<Book> {
  type?: 'create' | 'update';
}

const BookForm = ({ type, ...book }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: '',
      description: '',
      author: '',
      genre: '',
      rating: 1,
      totalCopies: 1,
      coverUrl: '',
      coverColor: '',
      videoUrl: '',
      summary: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {
    const result = await createBook(values);

    if (result.success) {
      toast.success('Le livre a été créé avec succès !');
      router.push(`/admin/books/${result.data.id}`);
    } else {
      toast.error(
        result.message || 'Une erreur est survenue. Veuillez réessayer.'
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name={'title'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Titre du livre
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder='Titre du livre'
                  {...field}
                  className='book-form_input'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'author'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Auteur
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder='Auteur du livre'
                  {...field}
                  className='book-form_input'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'genre'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Genre
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder='Genre du livre'
                  {...field}
                  className='book-form_input'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'rating'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Note
              </FormLabel>
              <FormControl>
                <Input
                  type='number'
                  min={1}
                  max={5}
                  placeholder='Note du livre'
                  {...field}
                  className='book-form_input'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'totalCopies'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Nombre d&apos;exemplaires
              </FormLabel>
              <FormControl>
                <Input
                  type='number'
                  min={1}
                  max={10000}
                  placeholder="Nombre d'exemplaires"
                  {...field}
                  className='book-form_input'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'coverUrl'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Image du livre
              </FormLabel>
              <FormControl>
                <FileUpload
                  type='image'
                  accept='image/*'
                  placeholder='Télécharger une couverture de livre'
                  folder='books/covers'
                  variant='light'
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'coverColor'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Couleur principale
              </FormLabel>
              <FormControl>
                <ColorPicker
                  onPickerChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'description'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Description du livre
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Description du livre'
                  {...field}
                  rows={10}
                  className='book-form_input'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'videoUrl'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Bande-annonce du livre
              </FormLabel>
              <FormControl>
                <FileUpload
                  type='video'
                  accept='video/*'
                  placeholder='Télécharger une bande-annonce'
                  folder='books/videos'
                  variant='light'
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'summary'}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormLabel className='text-base font-normal text-dark-400'>
                Résumé du livre
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Résumé du livre'
                  {...field}
                  rows={5}
                  className='book-form_input'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='book-form_btn text-white'>
          Ajouter le livre à la bibliothèque
        </Button>
      </form>
    </Form>
  );
};

export default BookForm;
