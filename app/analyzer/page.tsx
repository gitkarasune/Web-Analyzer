"use client"

import { useSearchParams } from 'next/navigation';

export default function Analyzer() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const dataString = searchParams.get('data');
  const websiteData = dataString ? JSON.parse(dataString): null;

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
        <h1 className="text-4xl font-bold mb-4">Analysis Results for {url}</h1>
        <div className="border rounded-md p-4 w-96">
          <p>
            <strong>Title:</strong> {websiteData.title || 'No title avaliable'}
          </p>
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
