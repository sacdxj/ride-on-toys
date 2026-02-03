import type { Metadata } from 'next';
import { Nunito, Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://funridetoys.com'),
  title: {
    template: '%s | FunRide Toys',
    default: 'FunRide Toys | 安全有趣的儿童乘骑玩具',
  },
  description: 'FunRide Toys 提供优质的儿童乘骑玩具，采用环保材料，通过欧盟认证，适合3-8岁儿童。让您的孩子在安全中享受快乐成长。',
  keywords: ['儿童玩具', '乘骑玩具', '环保材料', '欧盟认证', '安全玩具', '3-8岁'],
  authors: [{ name: 'FunRide Toys' }],
  creator: 'FunRide Toys',
  publisher: 'FunRide Toys',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://funridetoys.com',
    siteName: 'FunRide Toys',
    title: 'FunRide Toys | 安全有趣的儿童乘骑玩具',
    description: 'FunRide Toys 提供优质的儿童乘骑玩具，采用环保材料，通过欧盟认证，适合3-8岁儿童。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FunRide Toys',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunRide Toys | 安全有趣的儿童乘骑玩具',
    description: 'FunRide Toys 提供优质的儿童乘骑玩具，采用环保材料，通过欧盟认证，适合3-8岁儿童。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${nunito.variable} ${openSans.variable} font-body bg-neutral-cream`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
