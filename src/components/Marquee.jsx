import React from "react";

export default function Marquee() {
    return (
        <section className="relative mt-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 dark:opacity-30" />

            <div className="relative border-y border-cyber-purple/40 bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(189,82,235,0.25)] dark:bg-white/5">
                <div className="flex w-max animate-marquee gap-12 py-4 px-6">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-12 whitespace-nowrap"
                        >
                            <MarqueeItem />
                            <MarqueeItem />
                            <MarqueeItem />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MarqueeItem() {
    return (
        <div className="flex items-center gap-3 text-sm font-medium tracking-wide">
            <span className="text-cyber-black dark:text-white">
                Get Instant Support For Trezor,Ledger,Trust,Tangem,Safepal 
            </span>

            <span className="text-cyber-green drop-shadow-[0_0_6px_#39ff14]">
                Call: +1 (000) 000-0000
            </span>
        </div>
    );
}