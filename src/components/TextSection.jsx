import React from "react";

export default function TextStatement() {
    return (
        <section className="relative py-32">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20 dark:opacity-30" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                <h2 className="text-3xl font-semibold leading-snug tracking-tight text-cyber-black dark:text-white md:text-4xl">
                    Seamless, Secure, Effortless, Fast, Reliable, and Intuitive
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-base leading-relaxed text-cyber-black/70 dark:text-white/70">
                    Experience seamless access across mobile and desktop with robust,
                    user-friendly tools designed to enhance your complete Web3 experience—
                    track assets, view rewards, and perform secure swaps anytime, anywhere,
                    backed by dependable support and real-time updates.
                </p>
            </div>
        </section>
    );
}