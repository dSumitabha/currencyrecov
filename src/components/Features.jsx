import React from "react";

const FEATURES = [
    {
        label: "Trusted by 14M+ users",
        sticker: "/stickers/smart-contract.png",
    },
    {
        label: "Established in 2016",
        sticker: "/stickers/dapp.png",
    },
    {
        label: "Blockchain Security Audits",
        sticker: "/stickers/security.png",
    },
];

export default function Feature() {
    return (
        <section className="relative py-24">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20 dark:opacity-30" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    {FEATURES.map((item) => (
                        <div
                            key={item.label}
                            className="group flex flex-col items-center justify-between rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-md shadow-[0_0_22px_rgba(189,82,235,0.25)] transition hover:shadow-[0_0_38px_rgba(189,82,235,0.45)] dark:bg-white/5"
                        >
                            <div className="relative mb-10 flex h-28 w-28 items-center justify-center rounded-xl border border-cyber-purple/40 bg-white/10 shadow-[0_0_18px_rgba(189,82,235,0.4)] dark:bg-white/5">
                                <img
                                    src={item.sticker}
                                    alt={item.label}
                                    className="h-16 w-16 object-contain opacity-90"
                                />

                                <div className="absolute -inset-4 rounded-xl bg-cyber-purple/20 blur-2xl" />
                            </div>

                            <p className="text-center text-sm font-semibold tracking-widest text-cyber-black dark:text-white">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}