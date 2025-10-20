import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href='/'>
        <Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
      </Link>

      <ul className='flex flex-row items-center gap-8'>
        <li>
          <form
            action={async () => {
              'use server';

              await signOut();
            }}
            className='mb-10'
          >
            <Button className='cursor-pointer'>Déconnexion</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
