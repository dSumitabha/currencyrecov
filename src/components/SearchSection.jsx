import React from "react";

export default function SearchSection() {
    return (
        <section className="relative py-32">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 dark:opacity-30" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-cyber-black dark:text-white">
                    Explore Blockchain Solutions
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cyber-black/70 dark:text-white/70">
                    Search through our blockchain capabilities, protocols, and development expertise.
                    This is a preview of how you’ll navigate solutions built for the decentralized future.
                </p>

                <div className="mx-auto mt-10 flex max-w-3xl items-center gap-3 rounded-xl border border-cyber-purple/40 bg-white/10 p-2 backdrop-blur-md shadow-[0_0_24px_rgba(189,82,235,0.35)] dark:bg-white/5">
                    <input
                        type="text"
                        placeholder="Search smart contracts, DeFi, audits, Web3..."
                        className="flex-1 bg-transparent px-4 py-3 text-sm text-cyber-black placeholder:text-cyber-black/40 outline-none dark:text-white dark:placeholder:text-white/40"
                        disabled
                    />

                    <button className="rounded-lg border border-cyber-purple/60 bg-cyber-purple/20 px-6 py-3 text-sm font-medium text-cyber-black shadow-[0_0_14px_rgba(189,82,235,0.5)] transition hover:bg-cyber-purple/30 hover:shadow-[0_0_22px_rgba(189,82,235,0.7)] dark:text-white">
                        Search
                    </button>
                </div>

                <p className="mt-4 text-xs tracking-wide text-cyber-black/50 dark:text-white/50">
                    Search functionality coming soon — designed for fast, on-chain discovery.
                </p>
            </div>
        </section>
    );
}