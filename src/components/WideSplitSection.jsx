import React from "react";

export default function WideSplitSection() {
    return (
        <section className="relative py-32">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 dark:opacity-30" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-16 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-cyber-black dark:text-white md:text-4xl">
                            One wallet to power your entire digital experience
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-relaxed text-cyber-black/70 dark:text-white/70">
                            Effortlessly trade assets, earn rewards, manage finances, 
                            and benefit from advanced digital wallet integration—all in one secure wallet solution.
                        </p>
                        <button className="mt-5 w-fit rounded-lg border border-cyber-purple/60 bg-cyber-purple/30 px-8 py-3 text-sm font-medium text-cyber-black shadow-[0_0_18px_rgba(189,82,235,0.6)] transition hover:bg-cyber-purple/40 hover:shadow-[0_0_26px_rgba(189,82,235,0.8)] dark:text-white">Contact Support</button>
                    </div>

                    <div className="relative flex justify-end">
                        <div className="relative h-[420px] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_0_45px_rgba(189,82,235,0.35)] dark:bg-white/5">
                            <div className="absolute inset-0 flex items-center justify-center text-sm tracking-widest text-cyber-black/50 dark:text-white/50">
                                IMAGE
                            </div>

                            <div className="absolute -inset-10 bg-cyber-purple/25 blur-3xl" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}