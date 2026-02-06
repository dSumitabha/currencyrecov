import React from "react";

export default function HighlightSplit() {
    return (
        <section className="relative py-16">
            <div className="max-w-6xl rounded-2xl py-16 mx-auto bg-cyber-purple">

                <div className="relative z-10 mx-auto px-16">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(189,82,235,0.45)] dark:bg-cyber-black">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="relative flex min-h-[420px] items-center justify-center ">
                                <div className="relative h-64 w-64 rounded-xl border border-cyber-purple/40 bg-white/10 shadow-[0_0_30px_rgba(189,82,235,0.4)]">
                                    <div className="absolute inset-0 flex items-center justify-center text-sm tracking-widest text-cyber-black/50 dark:text-white/50">
                                        IMAGE
                                    </div>
                                    <div className="absolute -inset-6 rounded-xl bg-cyber-purple/10 blur-3xl" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center p-5 md:p-14">
                                <h3 className="text-4xl font-semibold tracking-tight text-cyber-black dark:text-white">
                                    Built for Real-World Web3 Usage
                                </h3>

                                <p className="mt-4 max-w-md text-sm leading-relaxed text-cyber-black/70 dark:text-white/70">
                                    Our blockchain solutions are designed to scale with your users.
                                    From seamless onboarding to secure on-chain operations, every
                                    interaction is optimized for speed, clarity, and trust.
                                </p>
                                <button className="mt-5 w-fit rounded-lg border border-cyber-purple/60 bg-cyber-purple/30 px-8 py-3 text-sm font-medium text-cyber-black shadow-[0_0_18px_rgba(189,82,235,0.6)] transition hover:bg-cyber-purple/40 hover:shadow-[0_0_26px_rgba(189,82,235,0.8)] dark:text-white"> Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}