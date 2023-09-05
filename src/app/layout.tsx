import './globals.css';
import Notifications from '@/components/Notifications';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food Order',
  description: 'Fullstack Food Ordering Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Notifications />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
