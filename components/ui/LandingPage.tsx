"use client";

import React, { useEffect, useState } from "react";
import { AnimatedSpan, TypingAnimation, Terminal } from "@/components/terminal";

const lines = [
    { type: "typing", text: "$>npm portfolio aryan@latest init", duration: 80 },
    { type: "animated", text: "✔ Preflight checks." },
    { type: "animated", text: "✔ Verifying framework. Found Next.js." },
    { type: "animated", text: "✔ Validating Tailwind CSS." },
    { type: "animated", text: "✔ Validating import alias." },
    { type: "animated", text: "✔ Writing components.json." },
    { type: "animated", text: "✔ Checking registry." },
    { type: "animated", text: "✔ Updating tailwind.config.ts" },
    { type: "animated", text: "✔ Installing dependencies." },
    { type: "typing", text: "Success! Project initialization completed.", duration: 80 },
    { type: "typing", text: "You may now enter the site.", duration: 80 },
];

const LandingPage = () => {
    const [visibleLines, setVisibleLines] = useState<number>(0);

    useEffect(() => {
        if (visibleLines < lines.length) {
            const delay = lines[visibleLines].type === "typing" ? 200 : 400;
            const timer = setTimeout(() => {
                setVisibleLines((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [visibleLines]);

    return (
        <div className="flex flex-col items-center gap-4 p-8">
            <Terminal className="mt-4 dark text-white">
                {lines.slice(0, visibleLines).map((line, index) =>
                    line.type === "typing" ? (
                        <TypingAnimation key={index} duration={line.duration}>{line.text}</TypingAnimation>
                    ) : (
                        <AnimatedSpan className="text-green-500" key={index}>{line.text}</AnimatedSpan>
                    )
                )}
            </Terminal>
        </div>
    );
};

export default LandingPage;
