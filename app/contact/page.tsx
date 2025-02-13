import Image from "next/image";
import React from "react";

export default function ContactPage() {
    return (
        <>
            <h1 className="text-white md:text-5xl text-3xl mt-4 font-bold">Contact Me</h1>
            <h2 className="text-white mt-2 text-xl md:text-2xl">wondering where to find me</h2>
            <h3 className="text-gray-500 md:text-xl text-l mt-2">got a project idea? curious abvout collaboration? just want to chat tech. i am all ears</h3>
            <h3>here are my social media handles </h3>
            <div className="flex gap-6 justify-center mt-4">
                <div><a target="_blank" href="https://github.com/aryansharma2k4"><Image className="" src="/github.svg"
                                                                                        alt="github" height={50}
                                                                                        width={50}/></a></div>
                <div><a target="_blank" href="https://www.linkedin.com/in/aryan-sharma-410a5b276/"><Image className=""
                                                                                                          src="/linkedin.svg"
                                                                                                          alt="github"
                                                                                                          height={50}
                                                                                                          width={50}/></a>
                </div>
                <div><a target="_blank" href="https://codeforces.com/profile/aryansharma2k4"><Image className=""
                                                                                                    src="/codeforces.svg"
                                                                                                    alt="github"
                                                                                                    height={50}
                                                                                                    width={50}/></a>
                </div>
                <div><a target="_blank" href="https://leetcode.com/u/aryansharma2k4/"><Image className=""
                                                                                             src="/leetcode.svg"
                                                                                             alt="github" height={50}
                                                                                             width={50}/></a></div>
                <div><a target="_blank" href="https://x.com/aryan22sharma"><Image className="" src="/twitter.svg"
                                                                                  alt="github" height={50} width={50}/></a>
                </div>
                <div><a href="mailto:aryansharma2k4@gmail.com" target="_blank"><Image className="" src="/mail.svg" alt="github" height={50} width={50}/></a>
                </div>
            </div>
        </>
    );
}
