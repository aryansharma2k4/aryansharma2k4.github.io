'use client';

import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import Link from "next/link";
import {WordRotate} from "@/components/magicui/word-rotate";

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState('');
    const [animationKey, setAnimationKey] = useState(0);

    const handleHover = (item: string) => {
        setHoveredItem(item);
        setAnimationKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="relative z-10 mt-4 w-full text-white">
            <div className="md:flex justify-between ">
                <Link href="/"><div className="text-sm pt-4 md:text-lg"><WordRotate words={["@aryansharma2k4","dream","develop","deploy"]} /></div></Link>

                <div className="flex gap-6 text-sm md:text-base bg-black py-2 pr-4 rounded-md mt-2">
                    {[{
                        "name":"root",
                        "href":"/"
                    },{
                        "name":"blog",
                        "href":"blog"
                    },{
                        "name":"projects",
                        "href":"projects"
                    },{
                        "name": "contact",
                        "href": "contact"
                    }].map((item) => (
                        <Link key={item.name} href={`/${item.href}`}><div
                            key={item.name}
                            className="hover:underline cursor-pointer"
                            onMouseEnter={() => handleHover(item.name)}
                            onMouseLeave={() => setHoveredItem('')}
                        >
                            {item.name}
                        </div></Link>
                    ))}
                </div>
            </div>

            <div className="h-12 flex items-center text-xs md:text-base gap-2 mt-2">
                <Image
                    src="/commandLineStart.svg"
                    width={40}
                    height={40}
                    alt="CLI Start"
                    className="w-6 h-6 md:w-8 md:h-8 hover:w-10 hover:h-10 ease-in-out duration-300"
                    priority
                />
                {hoveredItem && (
                    <TypeAnimation
                        key={animationKey}
                        sequence={[`cd ${hoveredItem}`,500]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                )}
            </div>
        </div>
    );
}

export default Navbar;
