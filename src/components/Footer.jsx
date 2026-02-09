import React from "react";

export default function Footer() {
    return (
        <footer className="w-full text-[#0B0F1A]">
            <div className="w-full">
                <div className="h-2 bg-cyber-pink" />
                <div className="h-2 bg-cyber-purple shadow-[0_6px_20px_rgba(255,79,216,0.25)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                
                <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cyber-green">Qucik Links</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li>About</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cyber-green">Policies</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li>Privacy Policy</li>
                        <li>Terms n Conditions</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cyber-green">Contact</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li>Contact Us</li>
                        <li>Partnership Us</li>
                    </ul>
                </div>

                </div>

                <div className="mt-16 text-xs text-slate-400">
                    © {new Date().getFullYear()} Crypto Wallet Management.
                </div>
            </div>
        </footer>
    );
}  