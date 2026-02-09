import {useEffect, useState} from "react";

export default function Hero() {
    const messages = [
        "Want to undo a recent payment made through your digital wallet?",
        "Is your digital wallet payment delayed and you’re seeking assistance to speed it up?",
        "Accidentally transferred funds to the wrong address and need support recovering your digital assets?",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            <BackgroundGrid />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <div className="grid h-full grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <span className="inline-block rounded-md border border-cyber-purple/40 bg-cyber-purple/10 px-3 py-1 text-xs font-medium tracking-wider text-cyber-purple shadow-[0_0_10px_rgba(189,82,235,0.4)]">
                            Digital Assets Recovery
                        </span>

                        <h1 className="text-4xl font-bold leading-tight text-cyber-black dark:text-white md:text-5xl">
                            Secure, Restore, and{" "}
                            <span className="text-cyber-purple drop-shadow-[0_0_12px_#bd52eb]">
                                Recover
                            </span>{" "}
                            Your{" "}
                            <span className="text-cyber-green drop-shadow-[0_0_10px_#39ff14]">
                                Digital Assets
                            </span>{" "}
                            with Confidence
                        </h1>

                        <p key={index} className="max-w-xl text-sm leading-relaxed text-cyber-black/70 dark:text-white/70 animate-fade-slide">
                            {messages[index]}
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <button className="rounded-lg border border-cyber-purple/60 bg-cyber-purple/20 px-6 py-3 text-sm font-medium text-cyber-black shadow-[0_0_14px_rgba(189,82,235,0.5)] transition hover:bg-cyber-purple/30 hover:shadow-[0_0_22px_rgba(189,82,235,0.7)] dark:text-white">
                                Start a Project
                            </button>

                            <button className="rounded-lg border border-cyber-green/60 bg-cyber-green/10 px-6 py-3 text-sm font-medium text-cyber-black shadow-[0_0_12px_rgba(57,255,20,0.5)] transition hover:bg-cyber-green/20 hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] dark:text-white">
                                Talk to Experts
                            </button>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="relative h-[420px] w-[420px] rounded-xl border border-cyber-purple/40 bg-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(189,82,235,0.35)] dark:bg-white/5">
                            <div className="absolute inset-0 flex items-center justify-center text-sm tracking-widest text-cyber-black/50 dark:text-white/50">
                                ILLUSTRATION
                            </div>

                            <div className="absolute -inset-4 rounded-xl bg-cyber-purple/20 blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BackgroundGrid() {
    return (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20 dark:opacity-30" />
    );
}