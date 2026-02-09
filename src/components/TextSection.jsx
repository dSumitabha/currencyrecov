import React from "react";

export default function TextStatement({ title, description }) {
    return (
        <section className="relative py-32">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20 dark:opacity-30" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
                <span className="pointer-events-none absolute left-1/2 top-0 h-px w-[110%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyber-black/40 to-transparent dark:via-cyber-purple/60" />
                <span className="pointer-events-none absolute left-1/2 bottom-0 h-px w-[110%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyber-black/40 to-transparent dark:via-cyber-purple/60" />
                <span className="pointer-events-none absolute top-1/2 left-0 w-px h-[110%] -translate-y-1/2 bg-gradient-to-b from-transparent via-cyber-black/40 to-transparent dark:via-cyber-purple/60" />
                <span className="pointer-events-none absolute top-1/2 right-0 w-px h-[110%] -translate-y-1/2 bg-gradient-to-b from-transparent via-cyber-black/40 to-transparent dark:via-cyber-purple/60" />

                <h2 className="text-3xl font-semibold leading-snug tracking-tight text-cyber-black dark:text-white md:text-4xl">
                    { title }
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-base leading-relaxed text-cyber-black/70 dark:text-white/70">
                    { description }
                </p>
            </div>
        </section>
    );
}