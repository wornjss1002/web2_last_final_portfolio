import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';

// 커스텀 폰트 설정
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});


// 루트 레이아웃
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <div className="min-h-screen flex flex-col">
          {/* 네비게이션 바 */}
          <header className="w-full bg-gray-800 shadow-md">
            <Navbar />
          </header>

          {/* 메인 콘텐츠 */}
          <main className="flex-grow mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          {/* 푸터 (옵션)
          <footer className="w-full bg-gray-800 text-gray-200 py-4 text-center text-sm">
            
          </footer> */}
        </div>
      </body>
    </html>
  );
}
