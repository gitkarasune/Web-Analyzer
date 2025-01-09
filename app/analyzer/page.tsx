"use client"

import Logo from '@/Components/Logo';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Analyzer() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const dataString = searchParams.get('data');
  const websiteData = dataString ? JSON.parse(dataString) : null;

  if (!websiteData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Web Analyzer</h1>
        <p className="text-red-500">No data available. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:p-20">
      <div className="flex pt-32 mb-28 justify-center items-center text-center flex-col">
        <div className="text-3xl mb-16 font-bold">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className='border p-5 px-6 rounded-full bg-black text-white flex justify-center items-center mb-6'>
          <h1 className="text-2xl font-bold">Results for <span className='text-sm text-blue-600'>{url}</span></h1>
        </div>
        <div className="border rounded-md p-4 py-20">

          {/* For the Title */}
          <h2 className='mb-1 text-2xl font-bold text-black flex justify-start items-start'>Title</h2>
          <section className='mb-16 flex flex-col justify-items-start items-start bg-black text-white p-10 py-20 rounded-md max-h-60 overflow-y-scroll'>
            <h4 className='mb-2'><strong>Title</strong></h4>
            <p>
              {websiteData.title || 'No title avaliable'}
            </p>
          </section>

          {/* For the Description */}
          <h2 className='mb-1 text-2xl font-bold text-black flex justify-start items-start'>Description</h2>
          <section className='mb-16 flex flex-col justify-items-start items-start bg-black text-white p-10 py-20 rounded-md max-h-60 overflow-y-scroll'>
            <h4 className='mb-2'><strong>Description</strong></h4>
            <p className='flex-1 flex items-start justify-start'>
              {websiteData.description || 'No description avaliable'}
            </p>
          </section>

          {/* For the Frameworks */}
          <h2 className='mb-1 text-2xl font-bold text-black flex justify-start items-start'>Frameworks</h2>
          <section className='mb-16 flex flex-col justify-items-start items-start bg-black text-white p-10 py-20 rounded-md max-h-60 overflow-y-scroll'>
            <h4 className='mb-2'><strong>Description</strong></h4>
            <p className='flex-1 flex items-start justify-start'>
              {
                websiteData.frameworks.length > 0 ?
                  websiteData.frameworks.join(', ')
                  :
                  'None detected'
              }
            </p>
          </section>

          {/* For the Server Address */}
          <h2 className='mb-1 text-2xl font-bold text-black flex justify-start items-start'>Server Address</h2>
          <section className='mb-16 flex flex-col justify-items-start items-start bg-black text-white p-10 py-20 rounded-md max-h-60 overflow-y-scroll'>
            <h4 className='mb-2'><strong>Server Address</strong></h4>
            <p className='flex-1 flex items-start justify-start'>
              {
                websiteData.server.address || 'Not avaliable'
              }
            </p>
          </section>

          {/* For the Server Family */}
          <h2 className='mb-1 text-2xl font-bold text-black flex justify-start items-start'>Server Family</h2>
          <section className='mb-16 flex flex-col justify-items-start items-start bg-black text-white p-10 py-20 rounded-md max-h-60 overflow-y-scroll'>
            <h4 className='mb-2'><strong>Server Family</strong></h4>
            <p className='flex-1 flex items-start justify-start'>
              {
                websiteData.server.family || 'Not avaliable'
              }
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
