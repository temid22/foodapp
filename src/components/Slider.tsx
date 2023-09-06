import Image from 'next/image';

const Slider = () => {
  return (
    <section className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)]'>
      {/* TEXT CONTAINER */}
      <article className='h-1/2 flex items-center justify-center flex-col gap-8 text-center bg-re-50'>
        <h1 className=''>TEST</h1>
        <button className=''>Order Now</button>
      </article>
      {/* IMAGE CONTAINER */}
      <article className='h-1/2 w-full relative'>
        <Image
          src='https://i.redd.it/5vltlvdi2dqy.jpg'
          alt=''
          className='object-cover'
          fill
        />
      </article>
    </section>
  );
};

export default Slider;
