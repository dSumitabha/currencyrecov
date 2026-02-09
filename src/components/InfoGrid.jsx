import React from "react";

const ITEMS = [
    {
        sticker: "/stickers/control.png",
        title: "Advanced security powered by robust encryption",
        description:
            "Protect your wallet using our Encrypted Cloud Backup solution.",
    },
    {
        sticker: "/stickers/privacy.png",
        title: "Your personal information is never tracked by us",
        description:
            "We neither collect nor monitor personal data such as IP addresses or wallet information.",
    },
    {
        sticker: "/stickers/performance.png",
        title: "Instant alerts for possible transaction risks",
        description:
            "Stay safeguarded with live notifications for any unusual wallet activity.",
    },
];

export default function InfoGrid() {
    return (
        <section className="relative py-8">
            <div className="relative mx-auto max-w-5xl px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    {ITEMS.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col items-center rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-[0_0_18px_rgba(189,82,235,0.25)] transition hover:shadow-[0_0_30px_rgba(189,82,235,0.45)] dark:bg-white/5"
                        >
                            <div className="relative mb-4 h-20 w-20 rounded-xl border border-cyber-purple/40 bg-white/10 shadow-[0_0_14px_rgba(189,82,235,0.4)]">
                                <img
                                    src={item.sticker}
                                    alt={item.title}
                                    className="h-full w-full object-contain p-3"
                                />
                                <div className="absolute -inset-4 rounded-xl bg-cyber-purple/20 blur-2xl" />
                            </div>

                            <h3 className="text-xl tracking-wide text-cyber-black dark:text-white">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-center text-sm leading-relaxed text-cyber-black/70 dark:text-white/70">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}