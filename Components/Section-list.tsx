import React, { useState } from 'react'
import { FaChartBar } from 'react-icons/fa' // AI-Powered Job Tracking
import { FaClock } from 'react-icons/fa' // Interview Preparations
import { FaShieldAlt } from 'react-icons/fa'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Button from './Button'

const One = [
    {
        id: 1,
        name: (
            <div className='flex items-center gap-4'>
                < FaChartBar className="text-7xl AI_icon" style={{ color: "#333" }} />
                <h5 className='text-2xl font-semibold text-black '>Comprehensive Insights</h5>
            </div>
        ),
        content: (
            <div
                className="transition-colors duration-300"
            >
                Get in-depth details with any website, from technologies to hosting providers, frameworks, and monetization strategies.
            </div>
        ),
    },
]

const Two = [
    {
        id: 1,
        name: (
            <div className='flex items-center gap-4'>
                <FaClock className="text-7xl AI_icon" style={{ color: "#333" }} />
                <h5 className='text-2xl font-semibold text-black '>Real-Time Analysis</h5>
            </div>
        ),
        content: (
            <div
                className="transition-colors duration-300"
            >
                Analyze websites in real-time with precision. Our advanced tools ensure you get up-to-date information instantly.
            </div>
        ),
    },
]

const Three = [
    {
        id: 1,
        name: (
            <div className='flex items-center gap-4'>
                <FaShieldAlt className="text-7xl AI_icon" style={{ color: "#333" }} />
                <h5 className='text-2xl font-semibold text-black '>Trusted Results</h5>
            </div>
        ),
        content: (
            <div
                className="transition-colors duration-300"
            >
                Powered by leading technologies, our platform ensures accurate and reliable data to help you make informed decision.
            </div>
        ),
    },
]


const SectionList = () => {

    return (
        <div className='maxContainer mt-28 mb-28'>
            <h2 className='text-3xl font-semibold text-center mb-5 text-black' id=''>
                <span className="WebAnalyzer">Discover the <br /> Secrets</span> Behind Any Website
            </h2>
            <p className='text-center text-gray-900 dark:text-gray-200 mb-6 '>
                Unleash powerful Insights into any website&apos;s technologies, performance, and more<span className='font-bold'>. All in one trusted platform</span>
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-7 mb-10">
                <div
                    className="shadow-sm rounded-2xl hover-box"
                >
                    {One.map((one) => (
                        <div key={one.id} className="flex-shrink-0 w-full">
                            <div className="bg-gray-100 py-12 rounded-lg shadow-sm p-6 hover:scale-105 cursor-pointer transition-all relative" id='Dream_Job_Hover'>
                                <FaArrowAltCircleRight id='HideIcon' className='-rotate-45 text-xl -mt-8 absolute right-0 m-5 text-black' />
                                <div className="flex items-center mb-7">
                                    {one.name}
                                </div>
                                <div className="text-black ml-6">
                                    {one.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="shadow-sm rounded-2xl hover-box"
                >
                    {Two.map((two) => (
                        <div key={two.id} className="flex-shrink-0 w-full">
                            <div className="bg-gray-100 py-12  rounded-lg shadow-sm p-6 hover:scale-105 cursor-pointer transition-all relative" id='Dream_Job_Hover'>
                                <FaArrowAltCircleRight id='HideIcon' className='-rotate-45 text-xl -mt-8 absolute right-0 m-5 text-black' />
                                <div className="flex items-center mb-7">
                                    {two.name}
                                </div>
                                <div className="text-black ml-6">
                                    {two.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="shadow-sm rounded-2xl hover-box"
                >
                    {Three.map((three) => (
                        <div key={three.id} className="flex-shrink-0 w-full">
                            <div className="bg-gray-100 py-12 rounded-lg shadow-sm p-6 hover:scale-105 cursor-pointer transition-all relative " id='Dream_Job_Hover'>
                                <FaArrowAltCircleRight id='HideIcon' className='-rotate-45 text-xl -mt-8 absolute right-0 m-5 text-black' />
                                <div className="flex items-center mb-7">
                                    {three.name}
                                </div>
                                <div className="text-black ml-6">
                                    {three.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Button text="One Click" variant="secondary" />
            </div>
        </div>
    )
}

export default SectionList