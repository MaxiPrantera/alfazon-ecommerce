import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import  SessionProvider from './SessionProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alfazon',
  description: 'Tienda de productos Alfazon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        <Navbar />
        <main className='p-4 max-w-7xl m-auto min-w-[300px]'>
        {children}
        </main>
        <Footer/>
        </SessionProvider>
        </body>
    </html>
  );
}
