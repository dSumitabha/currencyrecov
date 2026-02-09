import React from "react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full ">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(189,82,235,0.25)] dark:border-white/10 dark:bg-white/5">
                    <div className="flex h-16 items-center justify-between px-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyber-purple to-cyber-pink shadow-[0_0_12px_#bd52eb]">
                                <img
                                    src="/logo-placeholder.png"
                                    alt="Logo"
                                    className="h-full w-full rounded-lg object-cover opacity-80"
                                />
                            </div>
                            <span className="text-xl font-semibold tracking-wider text-white dark:text-white">
                                CRYPTO WALLET MANAGEMENT
                            </span>
                        </div>

                        <nav className="hidden md:flex items-center gap-8">
                            {["Home", "Privacy Policy", "T&C"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="relative text-sm text- dark:text-white/70 transition hover:text-cyber-green"
                                >
                                    <span className="hover:drop-shadow-[0_0_6px_#39ff14]">
                                        {item}
                                    </span>
                                </a>
                            ))}
                        </nav>

                        <div>
                            <button className="rounded-lg border border-cyber-purple/60 bg-cyber-purple/10 px-5 py-2 text-sm font-medium text-cyber-black dark:text-white shadow-[0_0_12px_#bd52eb] transition hover:bg-cyber-purple/20 hover:shadow-[0_0_20px_#bd52eb]">
                                Call Us 📞
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}