'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const data = [
  { id: 1, title: 'Hot & Yummy!', image: '/pizza1.jpg' },
  { id: 2, title: 'Spicey & Delicious!', image: '/pizza6.jpg' },
  { id: 3, title: 'Healthy & Fantastic!', image: '/pizza4.png' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] lg:flex-row'>
      {/* TEXT CONTAINER */}
      <article className='flex-1 flex items-center justify-center flex-col gap-8 text-center bg-orange-50'>
        <h1 className='text text-4xl text-center uppercase p-4 md:text-5xl lg:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-orange-400 px-5 py-5 text-white rounded font-semibold '>
          Order Now
        </button>
      </article>
      {/* IMAGE CONTAINER */}
      <article className='flex-1 w-full relative'>
        <Image
          src={data[currentSlide].image}
          alt=''
          className='object-cover'
          fill
        />
      </article>
    </section>
  );
};

export default Slider;
