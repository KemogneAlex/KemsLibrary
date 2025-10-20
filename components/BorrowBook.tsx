'use client';

import { Button } from '@/components/ui/button';
import { borrowBook } from '@/lib/actions/book';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrowBook = async () => {
    if (!isEligible) {
      toast.error(message || 'Vous n\'êtes pas éligible pour emprunter ce livre.');
      return;
    }

    setBorrowing(true);

    try {
      const result = await borrowBook({ bookId, userId });

      if (result.success) {
        toast.success('Livre emprunté avec succès !');
        router.push('/');
      } else {
        toast.error(result.error || 'Échec de l\'emprunt du livre.');
      }
    } catch (error) {
      toast.error('Une erreur inattendue s\'est produite lors de l\'emprunt du livre.');
    } finally {
      setBorrowing(false);
    }
  };
  return (
    <Button
      className='book-overview_btn cursor-pointer'
      onClick={handleBorrowBook}
      disabled={borrowing}
    >
      <Image src='/icons/book.svg' alt='book' width={20} height={20} />
      <p className='font-bebas-neue text-xl text-dark-100'>
        {borrowing ? 'Emprunt en cours...' : 'Emprunter le livre'}
      </p>
    </Button>
  );
};
export default BorrowBook;
