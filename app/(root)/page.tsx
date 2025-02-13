import React from 'react'

import {Cover} from "@/components/ui/cover";
import blogs from "@/lib/blogs"
import Link from "next/link"
import Image from "next/image";

const Page = () => {
    return (
        <>
            <div className="text-white">
                <div className="md:flex justify-between">
                    <Cover className="text-start"><h1 className="my-1 text-5xl text-white font-bold">Aryan Sharma</h1></Cover>
                    <div className="mr-[5%] mt-2 mb-4 text-[#a1a09d]">
                        <h3>chennai, india</h3>
                        <h3>btech cse undergrad</h3>
                    </div>
                </div>
                <p className="text-[#a1a09d]">undergrad @ vit-chennai-campus. i love building cool stuff and figuring things out. a competent coder who enjoys solving problems and diving into cp. always up for learning something new. big fan of f1, football, and good music. also, i binge-watch way too many web series!</p>
                <div className="mt-12 text-4xl text-end font-bold">About Me</div>
                <p className="text-[#a1a09d] mt-2">hey! i pretty much live in code—always pulling the latest updates, both in git and in life. jack of all trades, this is what people call me, but i love working across the stack, from sleek frontends to backend optimizations. big into cp, especially codeforces, always chasing that next problem, even if it means a late-night grind. when i’m not coding, you’ll find me watching f1, gaming, or binging web series. currently doing my b.tech at vit-chennai, juggling tech, fun, and everything in between.</p>
                <div className="mt-14">
                    <h1 className="text-4xl text-white font-bold mt-2 text-end">Experience</h1>
                    <div className="flex justify-between mt-4"><h3
                        className="mt-2 text-2xl">newton-school-coding-club@vit-c</h3><h5
                        className="text-gray-500 mt-4">2023-present</h5></div>
                    <h4 className="mt-2 text-[#a1a09d]">front-end-web-developer</h4>
                    <p className="text-[#a1a09d]"> worked as a front-end engineer where i honed my skill and learned
                        many stuff working with the team
                        in many projects</p>
                    <div className="flex justify-between"><h3 className="mt-4 text-2xl">hack-club@vit-c</h3><h5
                        className="text-gray-500 mt-4">2024-present</h5></div>
                    <h4 className="mt-2 text-[#a1a09d]">front-end-web-developer</h4>
                    <p className="text-[#a1a09d]"> worked as a full stack enginner taking part in many events with such
                        a great community of engineers</p>
                    <div className="flex justify-between"><h3
                        className="mt-4 text-2xl">google-developer-group@vit-c</h3><h5
                        className="text-gray-500 mt-4">2024-present</h5></div>
                    <h4 className="mt-2 text-[#a1a09d]">full-stack-web-developer</h4>
                    <p className="text-[#a1a09d]">probably the best club in the campus gave so many opppurtunties. build
                        their yearly hackathon
                        (devshouse) site and was also a speaker at next js workshop</p>

                </div>
                <div className="mt-14">
                    <h1 className="text-4xl font-bold mb-2 text-end">Blogs</h1>
                    <div className="">
                        {blogs.map((blog) => {
                            return (
                                <div className="flex justify-between mt-1 text-[#a1a09d]" key={blog.title}>
                                    <Link href="/blog"><h3 className="hover:underline">{blog.title}</h3></Link>
                                    <h3>{blog.date}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-14 mb-14" >
                    <h1 className="text-4xl font-bold mb-2 text-end">Links</h1>
                    <div className="flex gap-4">
                        <div><a target="_blank" href="https://github.com/aryansharma2k4"><Image className="" src="/github.svg" alt="github" height={30} width={30}/></a></div>
                        <div><a target="_blank" href="https://www.linkedin.com/in/aryan-sharma-410a5b276/"><Image className="" src="/linkedin.svg" alt="github" height={30} width={30}/></a></div>
                        <div><a target="_blank" href="https://codeforces.com/profile/aryansharma2k4"><Image className="" src="/codeforces.svg" alt="github" height={30} width={30}/></a></div>
                        <div><a target="_blank" href="https://leetcode.com/u/aryansharma2k4/"><Image className="" src="/leetcode.svg" alt="github" height={30} width={30}/></a></div>
                        <div><a target="_blank" href="https://x.com/aryan22sharma"><Image className="" src="/twitter.svg" alt="github" height={30} width={30}/></a></div>
                        <div><a target="_blank" ><Image className="" src="/mail.svg" alt="github" height={30} width={30}/></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page
