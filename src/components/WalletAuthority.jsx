import React from "react";

export default function WalletAuthority() {
    return (
        <section className="relative py-4">

            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <div className="relative rounded-2xl border border-white/10 bg-white/10 p-10 backdrop-blur-md shadow-[0_0_60px_rgba(255,22,148,0.35)] dark:bg-white/5">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
                        <div className="flex justify-center md:justify-start">
                            <div className="relative h-56 w-56 rounded-full border border-cyber-purple/40 bg-white/10 shadow-[0_0_35px_rgba(189,82,235,0.45)]">
                                <div className="absolute inset-0 flex items-center justify-center text-sm tracking-widest text-cyber-black/50 dark:text-white/50">
                                    IMAGE
                                </div>

                                <div className="absolute -inset-6 rounded-full bg-cyber-pink/30 blur-3xl" />
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-semibold tracking-tight text-cyber-purple dark:text-cyber-pink">
                                Complete authority and genuine ownership of your wallet assets.
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cyber-black/70 dark:text-white/70">
                                We safeguard your wallet without ever accessing or handling your
                                private keys or recovery phrase—these stay exclusively under your
                                control.
                            </p>

                            <div className="mt-8">
                                <button className="rounded-lg border border-cyber-pink/60 bg-cyber-pink/20 px-8 py-3 text-sm font-medium text-cyber-black shadow-[0_0_18px_rgba(255,22,148,0.6)] transition hover:bg-cyber-pink/30 hover:shadow-[0_0_26px_rgba(255,22,148,0.85)] dark:text-white">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}