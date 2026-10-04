import type { Metadata } from 'next';
import './globals.css';
import { Inter, Instrument_Serif, Oswald } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const instrumentSerif = Instrument_Serif({ 
  weight: "400", 
  subsets: ['latin'], 
  variable: '--font-instrument-serif' 
});

const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-oswald' 
});

export const metadata: Metadata = {
  title: 'PaperBuddy | Less Paperwork. Better Teaching.',
  description: 'One connected platform for Admins, Teachers, Students, Drivers, and Office staff.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${instrumentSerif.variable} ${oswald.variable} bg-white text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
