import { signOut } from '@/auth';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button';
import { sampleBooks } from '@/constants';

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
        className='mb-10'
      >
        <Button className='cursor-pointer'>Déconnexion</Button>
      </form>

      <BookList title='Livres Empruntés' books={sampleBooks} />
    </>
  );
};
export default Page;
