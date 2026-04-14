'use client';

import { motion } from 'framer-motion';

export default function Mission() {
    return (
        <section id="mission" className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full border text-sm font-mono tracking-widest uppercase mb-4 text-tgl-amber border-tgl-amber/50 bg-tgl-amber/5">
                        Distilling the Future
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter">
                        NFTs as <span className="text-tgl-amber">Deeds</span>
                    </h2>
                    <div className="h-1 w-24 mx-auto my-8 bg-tgl-amber" />
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto">
                        The Graine Ledger is not just a digital asset—it's a real-world distillery revolution. We use NFTs as secure, immutable deeds to physical casks of fine whiskey. Owners don't just hold a token; they hold creative control over the mashbill, char levels, and aging process, creating a truly bespoke spirit.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
