'use client';

import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

export default function Process() {
    const steps = [
        {
            num: 1,
            title: 'Mint Your Deed',
            desc: 'Purchase a Graine Ledger NFT. This is your proof of ownership and ticket to the ecosystem.'
        },
        {
            num: 2,
            title: 'Customize Production',
            desc: 'Use our DApp to vote on grain bills (mashbills) and select aging parameters for your batch.'
        },
        {
            num: 3,
            title: 'Track Maturation',
            desc: 'Watch your investment age. Real-time data tracks temperature, humidity, and years in the cask.'
        },
        {
            num: 4,
            title: 'Bottle or Trade',
            desc: 'When ready, request bottling of your private label whiskey, or sell the NFT to a new investor.'
        }
    ];

    return (
        <section id="process" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="card p-10 md:p-16"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="section-heading mb-2 block">The Process</span>
                            <h2 className="text-3xl font-bold mb-8">From Blockchain to Bottle</h2>
                            <ul className="space-y-8">
                                {steps.map((step) => (
                                    <li key={step.num} className="flex gap-6 group">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-black bg-tgl-amber shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                                            {step.num}
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2 text-lg text-white group-hover:text-tgl-amber transition-colors">{step.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden bg-black/40 border border-tgl-amber/20 flex items-center justify-center p-8 group hover:border-tgl-amber/50 transition-colors">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent)]" />
                            <div className="text-center relative z-10">
                                <div className="text-tgl-amber drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] mb-6 flex justify-center">
                                    <FlaskConical className="w-16 h-16 stroke-[1.5]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-tgl-amber uppercase tracking-wider">The Digital Distillery</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Our on-chain process mirrors the physical art of whiskey making. Every step from the mashbill mixing to the barrel char level is recorded as metadata on your NFT deed.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
