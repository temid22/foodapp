'use client';

import Link from 'next/link';
import CartIcon from './CartIcon';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Working Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' },
];

const Menu = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleMenu = (toggle: any) => {
    if (toggle) {
      setisOpen(toggle);
    } else {
      setisOpen(toggle);
    }
  };

  const user = false;

  return (
    <section>
      <Hamburger
        duration={0.3}
        size={25}
        color='black'
        easing='ease-in'
        rounded
        onToggle={(toggle) => handleMenu(toggle)}
      />

      {isOpen && (
        <div className='bg-yellow-300 font-semibold text-gray-600 absolute left-0 h-[calc(60vh-6rem)] w-full z-10 gap-5 flex flex-col justify-center items-center '>
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setisOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          {!user && (
            <Link href='/signup' onClick={() => setisOpen(false)}>
              SignUp
            </Link>
          )}
          {!user ? (
            <Link href='/login' onClick={() => setisOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href='/orders' onClick={() => setisOpen(false)}>
              Orders
            </Link>
          )}

          <div onClick={() => setisOpen(false)}>
            <CartIcon />
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
