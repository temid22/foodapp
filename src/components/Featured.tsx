import { featuredProducts } from '@/data';
import Image from 'next/image';

const Featured = () => {
  return (
    <section className='w-screen overflow-x-scroll text-gray-800 bg-orange-50'>
      {/* WRAPPER */}
      <article className='w-max flex'>
        {/* SINGLE ITEM */}

        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className='relative flex-1 w-full transition-all duration-400 hover:scale-[105%] '>
                <Image src={item.img} alt='' fill className='object-contain' />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <article className='flex-1 flex flex-col gap-2 justify-center items-center text-center xl:gap-6'>
              <h1 className='text-xl font-bold text-orange-500 uppercase pt-2 pl-2 pr-2 xl:text-2xl 2xl:text-3xl'>
                {item.title}
              </h1>
              {item.desc && <p className='p-4 2xl:p-8'>{item.desc}</p>}
              <span className='text-xl font-bold text-orange-500'>
                ${item.price}
              </span>
              <button className='bg-orange-500 font-semibold text-white p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-orange-600'>
                Add To Cart
              </button>
            </article>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Featured;
