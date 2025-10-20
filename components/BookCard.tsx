import BookCover from '@/components/BookCover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
}: Book) => (
  <li className={cn(isLoanedBook && 'xs:w-52 w-full')}>
    <Link
      href={`/books/${id}`}
      className={cn(isLoanedBook && 'w-full flex flex-col items-center')}
    >
      <BookCover coverColor={coverColor} coverImage={coverUrl} />

      <div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
        <p className='book-title' title={title}>
          {title}
        </p>
        <p className='book-genre' title={genre}>
          {genre}
        </p>
      </div>

      {isLoanedBook && (
        <div className='mt-3 w-full'>
          <div className='book-loaned'>
            <Image
              src='/icons/calendar.svg'
              alt='calendar'
              width={18}
              height={18}
              className='object-contain'
            />
            <p className='text-light-100'>11 jours restants pour retourner</p>
          </div>

          <Button className='book-btn'>Télécharger le reçu</Button>
        </div>
      )}
    </Link>
  </li>
);

export default BookCard;
