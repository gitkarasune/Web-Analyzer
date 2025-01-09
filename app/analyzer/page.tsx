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
          <section className='mb-16 flex flex-col justify-items-start items-start bg-black text-white p-10 py-20 rounded-md'>
            <h4 className='mb-2'><strong>Title</strong></h4>
            <p>
              {websiteData.title || 'No title avaliable'}
            </p>
          </section>
          <p>
            <strong>Description:</strong> {websiteData.description || 'No description avaliable'}
          </p>
          <p>
            <strong>Frameworks:</strong>{' '}
            {websiteData.frameworks.length > 0
              ? websiteData.frameworks.join(', ')
              : 'None detected'}
          </p>
          <p>
            <strong>Server Address:</strong> {websiteData.server.address}
          </p>
          <p>
            <strong>Server Family:</strong> {websiteData.server.family}
          </p>
        </div>
      </div>
    </div>
  );
}
