import Link from 'next/link';

const Footer = () => {
  return (
    <section className='h-12 md:h-14 p-4 lg:p-20 xl:p-40 text-gray-900 flex justify-between items-center'>
      <Link href='' className='font-bold text-xl'>
        MASSIMO
      </Link>
      <p>&#169; ALL RIGHTS RESERVED TD-2023.</p>
    </section>
  );
};

export default Footer;
