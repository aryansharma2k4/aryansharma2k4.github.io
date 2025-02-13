import React from 'react'
import { BorderBeam } from "@/components/magicui/border-beam"

const Page = () => {
    return (
        <div className="flex text-start flex-col w-full px-4">
            <h1 className="text-white text-start text-3xl sm:text-5xl font-bold mt-8">Projects</h1>
            <h3 className="text-gray-500 text-start sm:text-l text-xl mt-8">
                here are some of my projects i&apos;ve built—hopefully, many more to come(i know these projects are basic but few good one&apos;s are coming)!
            </h3>

            <a href="https://github.com/aryansharma2k4/youtubeAryan" target="_blank">
                <div className="relative hover:border-2 hover:border-gray-800 ease-in-out duration-400 text-start p-4 border-2 border-black w-full sm:w-[90%] max-w-3xl mt-6">
                    <BorderBeam />
                    <h1 className="text-white text-3xl sm:text-xl  p-4 font-bold">youtube backend</h1>
                    <h3 className="text-gray-300 text-lg sm:text-base px-4">
                        built a backend server that works like a youtube clone with features like publishing videos, comments, likes, and more.
                    </h3>
                    <h4 className="text-gray-400 text-md sm:text-sm px-4 mt-2">what i learned:</h4>
                    <ul className="text-gray-400 text-md sm:text-sm px-6 mt-1 list-disc">
                        <li>user authentication using jwt</li>
                        <li>handling video uploads and storage</li>
                        <li>building rest apis with express and mongodb</li>
                    </ul>
                    <h4 className="text-gray-500 text-md sm:text-sm px-4 mt-2">tech stack: node.js, express, mongodb, jwt, cloudinary</h4>
                </div>
            </a>

            <a href="https://github.com/aryansharma2k4/KLOHDHZ-SHOP" target="_blank">
                <div className="relative hover:border-2 p-4 hover:border-gray-800 ease-in-out duration-400 border-2 border-black w-full sm:w-[90%] max-w-3xl mt-6 mb-14">
                    <BorderBeam />
                    <h1 className="text-white text-3xl sm:text-2xl p-4 font-bold">klohdhz shop</h1>
                    <h3 className="text-gray-300 text-lg sm:text-base px-4">
                        an e-commerce frontend built while learning react. features product listings, filtering, and a simple cart system.
                    </h3>
                    <h4 className="text-gray-400 text-md sm:text-sm px-4 mt-2">what i learned:</h4>
                    <ul className="text-gray-400 text-md sm:text-sm px-6 mt-1 list-disc">
                        <li>state management with react hooks</li>
                        <li>integrating apis for dynamic data</li>
                        <li>styling with tailwind for responsive ui</li>
                    </ul>
                    <h4 className="text-gray-500 text-md sm:text-sm px-4 mt-2">tech stack: react, tailwind css, fakestore api, appwrite</h4>
                </div>
            </a>
        </div>
    )
}

export default Page
