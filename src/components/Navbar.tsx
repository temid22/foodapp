'use client';

import Link from 'next/link';
import Menu from './Menu';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
  const user = false;

  return (
    <section className='h-12 text-neutral-900 bg-white p-4 flex items-center justify-between border-b-2 border-b-green-600 font-medium uppercase md:h-14 lg:px-20 xl:px-40'>
      {/* Left Links  */}
      <div className='hidden md:flex gap-4 flex-1 '>
        <Link className='hover:underline' href='/'>
          Home
        </Link>
        <Link className='hover:underline' href='/menu'>
          Menu
        </Link>
        <Link className='hover:underline' href='/'>
          Contact
        </Link>
      </div>

      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link as='' href='/'>
          {' '}
          Massimo
        </Link>
      </div>
      {/* MOBILE MENU*/}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* Right Links  */}
      <div className='hidden md:flex gap-4 items-center flex-1 justify-end '>
        <div className='md:absolute top-3 right-2 xl:static flex items-center gap-2 border-2 cursor-pointer px-1 rounded-md'>
          <Image
            className='bg-green-600 rounded'
            src='/phone.png'
            alt=''
            width={20}
            height={20}
          />
          <span className='md:text-white xl:text-black'>123 456 7890</span>
        </div>
        {!user ? (
          <>
            <Link className='hover:underline' href='/login'>
              Login
            </Link>
            <Link className='hover:underline' href='/signup'>
              SignUp
            </Link>
          </>
        ) : (
          <Link className='hover:underline' href='/orders'>
            Orders
          </Link>
        )}
        <CartIcon />
      </div>
    </section>
  );
};

export default Navbar;
