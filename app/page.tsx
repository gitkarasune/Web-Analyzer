"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
// import Hero from "@/Components/Hero";
import SectionList from "@/Components/Section-list";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {

  const [url, setUrl] = useState('');
  // const [data, setData] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const analyzeWebsite = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) return alert("Please enter a valid URL.");

    setLoading(true);

    try {
      // setError(null);
      // setData(null); // clear previous data
      const response = await axios.get(`/api/analyse?url=${encodeURIComponent(url)}`);
      // setData(response.data);

      if (response.status === 200) {
        const data = response.data;

        // Redirect to /analyzer with the fetch data..analyzer
        router.push(`/analyzer?url=${encodeURIComponent(url)}&data=${encodeURIComponent(JSON.stringify(data))}`);
      } else {
        alert(response.data.error || "Failed to analyze website.");
      }
    } catch (error: any) {
      // setError(err.response?.data?.error || 'An error occurred');
      console.error(error);
      alert('An error occured while analyzing the website.')
    } finally {
      setLoading(false);
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
                { loading ? (
                  <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                ) : (
                  <FaArrowUp className='' /> 
                  )}
              </button>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className='outline-[#30588a] w-full bg-[#f3eaea] withinForm border-[#30588a] py-5 px-4 rounded-full mb-20'
                placeholder='URL (eg. https://www.example.com)'
              />
            </form>
          </div>

          { loading && <p className="mt-4 text-blue-500">Analyzing website...</p>}
        </div>
      </div>

      {/* Section list */}
      <SectionList />
    </div>
  );
}
