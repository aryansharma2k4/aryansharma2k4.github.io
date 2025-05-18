import React from 'react'
import { BorderBeam } from "@/components/magicui/border-beam"

const Page = () => {
    return (
        <div className="flex text-start flex-col mb-12 w-full px-4">
            <h1 className="text-white text-start text-3xl sm:text-5xl font-bold mt-8">Projects</h1>
            <h3 className="text-gray-500 text-start sm:text-l text-xl mt-8">
                here are some of my projects i&apos;ve built—hopefully, many more to come(i know these projects are basic but few good one&apos;s are coming)!
            </h3>
            <a href="https://github.com/aryansharma2k4/KLOHDHZ-SHOP" target="_blank">
                <div className="relative hover:border-2 p-4 hover:border-gray-800 ease-in-out duration-400 border-2 border-black w-full sm:w-[90%] max-w-3xl mt-6 mb-14">
                    <BorderBeam />
                    <h1 className="text-white text-3xl sm:text-2xl p-4 font-bold">Qizmo</h1>
                    <h3 className="text-gray-300 text-lg sm:text-base px-4">
                        An automated MCQ-based examination platform for educational institutions offering secure assessments with real-time monitoring, randomized questions, and instant grading.
                    </h3>
                    <h4 className="text-gray-400 text-md sm:text-sm px-4 mt-2">what i learned:</h4>
                    <ul className="text-gray-400 text-md sm:text-sm px-6 mt-1 list-disc">
                        <li>Building role-based access control systems</li>
                        <li>Creating secure assessment environments with anti-cheating measures</li>
                        <li>Managing complex state across user sessions</li>
                    </ul>
                    <h4 className="text-gray-500 text-md sm:text-sm px-4 mt-2">tech stack: Next.js, tRPC, Prisma ORM, PostgreSQL, Tailwind CSS, TanStack Query, JWT Authentication</h4>
                </div>
            </a>

            <a href="https://github.com/aryansharma2k4/youtubeAryan" target="_blank">
                <div className="relative hover:border-2 hover:border-gray-800 ease-in-out duration-400 text-start p-4 border-2 border-black w-full sm:w-[90%] max-w-3xl mt-6">
                    <BorderBeam />
                    <h1 className="text-white text-3xl sm:text-xl  p-4 font-bold">Bingo</h1>
                    <h3 className="text-gray-300 text-lg sm:text-base px-4">
                        A comprehensive social media management tool that streamlines content creation, scheduling, and engagement across multiple platforms with AI assistance.
                    </h3>
                    <h4 className="text-gray-400 text-md sm:text-sm px-4 mt-2">what i learned:</h4>
                    <ul className="text-gray-400 text-md sm:text-sm px-6 mt-1 list-disc">
                        <li>AI integration for automated content generation</li>
                        <li>Cross-platform deployment strategies</li>
                        <li>Full-stack development with Next.js</li>
                    </ul>
                    <h4 className="text-gray-500 text-md sm:text-sm px-4 mt-2">tech stack: Next.js, Neon PostgreSQL, Drizzle ORM, tRPC, OpenAI API, Tailwind CSS</h4>
                </div>
            </a>
        </div>
    )
}

export default Page
