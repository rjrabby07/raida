import type { Metadata } from 'next';
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { FacebookPixel } from '@/components/analytics/FacebookPixel';

const inter = Inter({ subsets: ['latin'] });
const notoSansBengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'],
  variable: '--font-bengali',
});

export const metadata: Metadata = {
  title: 'RAIDA FOR YOU - মানসম্মত পণ্যে বিনিয়োগ করুন',
  description: 'কম মূল্যের লোভে নয়, মানসম্মত পণ্যে বিনিয়োগ করুন। হোম অ্যাপ্লায়েন্স, হেলথ অ্যান্ড বিউটি, লেডিজ পার্সোনাল, রাইদা অর্গানিক হ্যান্ডমেড, কিডস জোন',
  keywords: ['RAIDA', 'বাংলাদেশ', 'পণ্য', 'হোম অ্যাপ্লায়েন্স', 'লেডিজ পার্সোনাল', 'অর্গানিক'],
  authors: [{ name: 'RAIDA FOR YOU' }],
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    url: 'https://raida-store.com',
    title: 'RAIDA FOR YOU',
    description: 'মানসম্মত পণ্যে বিনিয়োগ করুন',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${inter.className} ${notoSansBengali.variable}`}>
      <head>
        <FacebookPixel />
      </head>
      <body className="bg-primary-black text-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
