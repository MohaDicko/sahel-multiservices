"use client";
import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "reveal-up" | "reveal-down" | "reveal-left" | "reveal-right" | "reveal-scale";
    delay?: string | number;
    className?: string;
    duration?: number;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    animation = "reveal-up",
    delay = 0,
    className = "",
    duration = 0.8,
    once = true
}: ScrollRevealProps) {
    const numericDelay = typeof delay === "string" 
        ? parseInt(delay.replace("reveal-delay-", "")) || 0 
        : delay;

    const variants = {
        hidden: {
            opacity: 0,
            y: animation === "reveal-up" ? 60 : animation === "reveal-down" ? -60 : 0,
            x: animation === "reveal-left" ? 80 : animation === "reveal-right" ? -80 : 0,
            scale: animation === "reveal-scale" ? 0.85 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: duration,
                delay: numericDelay / 1000,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once, amount: 0.1 }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

