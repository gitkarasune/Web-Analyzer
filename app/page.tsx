"use client"

import { useState } from "react";
import axios from "axios";
// import Hero from "@/Components/Hero";
import SectionList from "@/Components/Section-list";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {

  const [url, setUrl] = useState('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeWebsite = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(null);
      setData(null); // clear previous data
      const response = await axios.get(`/api/analyse?url=${encodeURIComponent(url)}`);
      setData(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:p-20">
      <div className="flex pt-32 mb-28 justify-center items-center text-center flex-col">
        <div className='maxContainer'>
          <h1 className='text-4xl font-bold text-black mb-16'>Explore the tools <br /> and frameworks behind your webiste</h1>

          <div className="flex justify-center items-center relative ">
            <form className='relative w-full' onSubmit={analyzeWebsite}>
              <button className="bg-black text-white flex justify-center items-center cursor-pointer absolute right-3 top-2 rounded-full p-4" type="submit">
                <FaArrowUp className='' />
              </button>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className='outline-[#30588a] w-full bg-[#f3eaea] withinForm border-[#30588a] py-5 px-4 rounded-full mb-20'
                placeholder='Enter website URL (eg. https://www.example.com)'
              />
            </form>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {data && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-lg font-bold mb-2">Analysis Results</h2>
              <p><strong>Title:</strong> {data.title}</p>
              <p><strong>Description:</strong> {data.description}</p>
              <p><strong>Frameworks:</strong> {data.frameworks.join(', ') || 'None detected'}</p>
              <p><strong>Server:</strong> {data.server?.address} ({data.server?.family})</p>
            </div>
          )}
        </div>
      </div>

      {/* Section list */}
      <SectionList />
    </div>
  );
}
