"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "reveal-up" | "reveal-left" | "reveal-right" | "reveal-scale";
    delay?: string;
    className?: string;
}

export default function ScrollReveal({
    children,
    animation = "reveal-up",
    delay = "",
    className = ""
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`reveal ${animation} ${delay} ${isVisible ? "visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
