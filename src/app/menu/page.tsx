import { menu } from '@/data';
import Link from 'next/link';

const Menu = () => {
  return (
    <section className='p-4 lg:px-20 xl:px-40 h[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map((category) => (
        <Link
          href={category.slug}
          key={category.id}
          className=''
          style={{ backgroundImage: `url(${category.img})` }}
        ></Link>
      ))}
    </section>
  );
};

export default Menu;
