import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OpeningGate from '@/components/Common/OpeningGate';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body className='book-world'>
        <div className='isolate'>
          <NextTopLoader
            color='#e88b68'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <OpeningGate>
              <div className='site-book-shell'>
                <div className='site-book-spine' aria-hidden='true' />
                <div className='site-book-inner'>
                  <Header />
                  <div className='site-book-content'>{children}</div>
                  <Footer />
                </div>
              </div>
            </OpeningGate>

            <ToasterContext />
          </AuthProvider>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
