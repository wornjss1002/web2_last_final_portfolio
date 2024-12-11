import React from 'react';
import Image from 'next/image';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

// ... imports remain the same ...

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      {/* 프로필 헤더 섹션 */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/jaegweon.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
                <div className="flex gap-6 justify-center">
                  <a href="mailto:wornjss1002@naver.com" className="text-gray-600 hover:text-blue-400 transition-colors" title="Email">
                    <MdEmail className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/wornjss1002" className="text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a href="https://www.instagram.com/jaegweonceon/" className="text-gray-600 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FaInstagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            
            
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Jae Gweon Cheon</h1>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              <span className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full">Web</span>
              <span className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full">Mobile</span>
              <span className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full">App</span>
            </div>
            
            {/* About Me 섹션 */}
            <div className="mb-4 flex flex-col">
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <div className="flex flex-row">
                <Image
                  src="/JBU.svg"  // 여기에 실제 이미지 경로를 넣으세요
                  alt="Profile"
                  width={48}  // 아이콘과 비슷한 크기로 설정
                  height={48}
                  className="inline-block"  // object-cover 대신 inline-block 사용
                />
                <p className='mt-4 ml-3'>
                  중부대학교 정보보호학과 재학
                </p>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/SCP.png"  // 여기에 실제 이미지 경로를 넣으세요
                  alt="Profile"
                  width={48}  // 아이콘과 비슷한 크기로 설정
                  height={48}
                className="inline-block"  // object-cover 대신 inline-block 사용
              />
              <p className='mt-4 ml-3'>
                S.C.P (보안 동아리)
              </p>  
              </div>
              <div className="flex flex-row">
                <Image
                  src="/kisa.png"  // 여기에 실제 이미지 경로를 넣으세요
                alt="Profile"
                width={32}  // 아이콘과 비슷한 크기로 설정
                height={32}
                className="inline-block ml-2"  // object-cover 대신 inline-block 사용
                />
                <p className='mt-3 ml-4'>
                  버그헌팅 실습 훈련 - 중급 수료
                </p> 
              </div>
            </div>

            {/* Contact 섹션 */}
            
          </div>
        </div>
      </div>


      {/* 프로젝트 섹션 */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 프로젝트 카드 예시 */}
          <Link 
            href="/projects/unity-game" 
            className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0">
              <Image
                src="/unity.png"  // 프로젝트 이미지 경로를 추가하세요
                alt="Clerk Project Background"
                fill
                className="object-cover opacity-20 group-hover:opacity-80 transition-opacity"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-semibold">Unity Develop</h3>
                <a 
                  href="/projects/unity-game" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                </a>
              </div>
              <p className="text-gray-600 mb-6 text-lg">Clerk API를 사용하여 인증 기능을 구현한 프로젝트입니다.</p>
              <div className="flex gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-base">TypeScript</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-base">Clerk-api</span>
              </div>
            </div>
          </Link>
          
          <Link 
            href="https://clerk-kbawotwqg-cheonjaegweons-projects.vercel.app/" 
            className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0">
              <Image
                src="/clerk-api.png"  // 프로젝트 이미지 경로를 추가하세요
                alt="Clerk Project Background"
                fill
                className="object-cover opacity-20 group-hover:opacity-80 transition-opacity"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-semibold">Clerk-API</h3>
                <a 
                  href="https://github.com/your-username/clerk-api-repo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                </a>
              </div>
              <p className="text-gray-600 mb-6 text-lg">Clerk API를 사용하여 인증 기능을 구현한 프로젝트입니다.</p>
              <div className="flex gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-base">TypeScript</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-base">Clerk-api</span>
              </div>
            </div>
          </Link>
          <Link 
            href="https://clerk-kbawotwqg-cheonjaegweons-projects.vercel.app/" 
            className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0">
              <Image
                src="/mongodb.png"  // 프로젝트 이미지 경로를 추가하세요
                alt="Clerk Project Background"
                fill
                className="object-cover opacity-20 group-hover:opacity-80 transition-opacity"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3">mongoDB-CRUD</h3>
              <p className="text-gray-600 mb-6 text-lg">mongoDB를 사용하여 CRUD 기능을 구현한 프로젝트입니다.</p>
              <div className="flex gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-base">TypeScript</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-base">mongoDB</span>
              </div>
            </div>
          </Link>
          <Link 
            href="https://web2-midterm-portfolio.vercel.app/" 
            className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0">
              <Image
                src="/midterm.png"  // 프로젝트 이미지 경로를 추가하세요
                alt="Clerk Project Background"
                fill
                className="object-cover opacity-20 group-hover:opacity-80 transition-opacity"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3">Midterm Portfolio</h3>
              <p className="text-gray-600 mb-6 text-lg">중간 개인 포트폴리오 웹사이트입니다.</p>
              <div className="flex gap-3">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded text-base">TypeScript</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}