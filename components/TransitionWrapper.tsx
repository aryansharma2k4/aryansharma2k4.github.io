"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "@/components/ui/LandingPage";

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
    const [showLanding, setShowLanding] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (!hasVisited) {
            setShowLanding(true);
            const timer = setTimeout(() => {
                setShowLanding(false);
                sessionStorage.setItem("hasVisited", "true");
            }, 8000);

            return () => clearTimeout(timer);
        }
    }, []);

    if (!isClient) return null;

    return (
        <AnimatePresence mode="wait">
            {showLanding ? (
                <motion.div
                    key="landing"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 2.0 } }}
                    style={{ position: "absolute", width: "100%", height: "100%" }}
                >
                    <LandingPage />
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2.0 } }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TransitionWrapper;
