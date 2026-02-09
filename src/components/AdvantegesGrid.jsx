import React from "react";

const ADVANTAGES = [
    {
        title: "Regaining Control of Your Digital Assets",
        subtitle: "Recover your digital assets using card payments, mobile wallets, or bank transfer methods.",
        sticker: "/stickers/decentralized.png",
    },
    {
        title: "Earn rewards effortlessly and with full protection",
        subtitle: "Receive up to 70% APR in rewards from reliable and authenticated sources.",
        sticker: "/stickers/transparency.png",
    },
    {
        title: "Take the next step and explore thrilling new opportunities",
        subtitle: "Discover leading NFT platforms and manage your funds with assurance.",
        sticker: "/stickers/security.png",
    },
    {
        title: "Swap your wallet with confidence and enhanced security.",
        subtitle: "Securely trade more than 10,000 wallet currencies through trusted providers.",
        sticker: "/stickers/immutability.png",
    },
];

export default function AdvantagesGrid() {
    return (
        <section className="relative py-28">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 dark:opacity-30" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="relative rounded-2xl bg-cyber-purple/10 p-8 shadow-[0_0_40px_rgba(189,82,235,0.35)]">
                    <div className="absolute -inset-6 rounded-3xl bg-cyber-purple/20 blur-3xl" />

                    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
                        {ADVANTAGES.map((item) => (
                            <div
                                key={item.title}
                                className="group relative h-[340px] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_18px_rgba(189,82,235,0.2)] transition hover:shadow-[0_0_32px_rgba(189,82,235,0.45)] dark:bg-white/5"
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

                    <div className="relative mt-10 flex justify-center">
                        <button className="rounded-lg border border-cyber-purple/60 bg-cyber-purple/30 px-8 py-3 text-sm font-medium text-cyber-black shadow-[0_0_18px_rgba(189,82,235,0.6)] transition hover:bg-cyber-purple/40 hover:shadow-[0_0_26px_rgba(189,82,235,0.8)] dark:text-white">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}