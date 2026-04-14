'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: 'The American Genesis',
        desc: 'Our inaugural collection where owners vote on the mashbill and define the char level of their casks.',
        image: '/artifacts/icons/american_genesis.png'
    },
    {
        title: 'NFT as Deed',
        desc: 'Your NFT is the legal title to a physical barrel in our bonded warehouse. Sell the token, transfer the barrel.',
        image: '/artifacts/icons/nft_deed.png'
    },
    {
        title: 'Custom Cask Styles',
        desc: 'Choose from distinct finishing options and wood types to craft a unique flavor profile.',
        image: '/artifacts/icons/custom_cask.png'
    },
    {
        title: 'Lodge Access',
        desc: 'Holders gain exclusive access to The Graine Ledger Lodge & Resort for annual tastings and events.',
        image: '/artifacts/icons/lodge_access.png'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-12 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="card !p-0 overflow-hidden flex flex-col group cursor-default"
                        >
                            {/* Image Header */}
                            <div className="relative w-full aspect-square bg-black/60 border-b border-tgl-amber/10 group-hover:border-tgl-amber/30 transition-colors">
                                <div className="absolute inset-0 bg-[#fbbf24] opacity-10 blur-[40px] group-hover:opacity-30 transition-opacity duration-500 z-0" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover mix-blend-screen opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 rounded-t-xl"
                                />
                            </div>
                            
                            {/* Caption Body */}
                            <div className="p-6 text-center flex-grow flex flex-col justify-center">
                                <h3 className="text-lg font-bold mb-3 text-tgl-amber uppercase tracking-wider">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
