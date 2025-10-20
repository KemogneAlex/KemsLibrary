import { db } from '@/database/drizzle';
import { users } from '@/database/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import BookCover from './BookCover';
import BorrowBook from './BorrowBook';
interface Props extends Book {
  userId: string;
}
const BookOverview = async ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl,
  id,
  userId,
}: Props) => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  if (!user) return null;
  const borrowingEligibility = {
    isEligible: availableCopies > 0 && user?.status === 'APPROVED',
    message:
      availableCopies <= 0
        ? 'Le livre n\'est pas disponible'
        : 'Vous n\'êtes pas éligible pour emprunter ce livre. Veuillez contacter l\'administrateur.',
  };
  return (
    <section className='book-overview'>
      <div className='flex flex-1 flex-col gap-5'>
        <h1>{title}</h1>
        <div className='book-info'>
          <p>
            Par <span className='font-semibold text-light-200'>{author}</span>
          </p>
          <p>
            Catégorie{' '}
            <span className='font-semibold text-light-200'>{genre}</span>
          </p>
          <div className='flex flex-row gap-1'>
            <Image src='/icons/star.svg' alt='star' width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>
        <div className='book-copies'>
          <p>
            Total des livres <span>{totalCopies}</span>
          </p>

          <p>
            Livres disponibles <span>{availableCopies}</span>
          </p>
        </div>

        <p className='book-description'>{description}</p>
        {user && (
          <BorrowBook
            bookId={id}
            userId={userId}
            borrowingEligibility={borrowingEligibility}
          />
        )}
      </div>
      <div className='relative flex flex-1 justify-center'>
        <div className='relative'>
          <BookCover
            variant='wide'
            className='z-10'
            coverColor={coverColor}
            coverImage={coverUrl}
          />
          <div className='absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden'>
            <BookCover
              variant='wide'
              coverColor={coverColor}
              coverImage={coverUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
