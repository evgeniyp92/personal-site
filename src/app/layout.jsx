import { Inter } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Oswald } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='bg-zinc-300'>
      <body className={openSans.className}>
        <div className='p-8 w-screen h-screen'>{children}</div>
      </body>
    </html>
  );
}