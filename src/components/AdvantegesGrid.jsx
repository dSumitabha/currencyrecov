import React from "react";

const ADVANTAGES = [
    {
        title: "Decentralization",
        subtitle: "No single point of control",
        sticker: "/stickers/decentralized.png",
    },
    {
        title: "Transparency",
        subtitle: "On-chain verifiable data",
        sticker: "/stickers/transparency.png",
    },
    {
        title: "Security",
        subtitle: "Cryptography driven trust",
        sticker: "/stickers/security.png",
    },
    {
        title: "Immutability",
        subtitle: "Tamper-proof records",
        sticker: "/stickers/immutability.png",
    },
];

export default function AdvantagesGrid() {
    return (
        <section className="relative py-28">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 dark:opacity-30" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {ADVANTAGES.map((item) => (
                        <div
                            key={item.title}
                            className="group relative h-[340px] overflow-hidden rounded-xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_0_22px_rgba(189,82,235,0.25)] transition hover:shadow-[0_0_38px_rgba(189,82,235,0.45)] dark:bg-white/5"
                        >
                            <div className="relative z-10 p-6">
                                <h3 className="text-lg font-semibold tracking-wide text-cyber-black dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-cyber-black/70 dark:text-white/70">
                                    {item.subtitle}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-1/2">
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/20 to-transparent" />

                                <div className="relative flex h-full items-center justify-center">
                                    <img
                                        src={item.sticker}
                                        alt={item.title}
                                        className="h-36 w-36 object-contain opacity-90"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-cyber-purple/20 blur-3xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-8 flex justify-center items-center">
                <button className="rounded-lg border border-cyber-purple/60 bg-cyber-purple/20 px-6 py-3 text-sm font-medium text-cyber-black shadow-[0_0_14px_rgba(189,82,235,0.5)] transition hover:bg-cyber-purple/30 hover:shadow-[0_0_22px_rgba(189,82,235,0.7)] dark:text-white">Contact Support</button>
            </div>
        </section>
    );
}