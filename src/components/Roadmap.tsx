'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const roadmapData = [
    {
        title: 'The Distillery',
        duration: '1 - 1.5 Years',
        desc: 'Design, construction, and inauguration of The Graine Ledger Distillery. The American Genesis Collection will require a facility that can output 556,500 gallons over two years, using the latest in distilling technology.',
        image: '/artifacts/icons/The_Distillery.png'
    },
    {
        title: 'The Farm',
        duration: '1 - 2 Years',
        desc: 'Acquiring land and developing eco-friendly cultivation of our own grain, vegetables, fruits, and herbs. The farm will be tuned for quality over yield to develop our top-shelf whiskey collections.',
        image: '/artifacts/icons/The_Farm.png'
    },
    {
        title: 'The American Connoisseur Collection',
        duration: 'Year 5',
        desc: 'Allowing whiskey lovers to craft their own whiskey with granular control over the process. Customization will be comprehensive, with all grain sourced from our farm.',
        image: '/artifacts/icons/The_American_Connoisseur_Collection.png'
    },
    {
        title: 'The Lodge & Restaurant',
        duration: 'Year 6',
        desc: 'Scaling operations to establish an onsite lodge and restaurant open to the public, providing special access to American Genesis Members.',
        image: '/artifacts/icons/The_Lodge_Restaurant.png'
    },
    {
        title: 'The Resort',
        duration: 'Year 8',
        desc: 'Consolidating all operations into a resort experience including an 18-hole golf course, recreational facilities, and an equestrian facility.',
        image: '/artifacts/icons/resort.png'
    }
];

export default function Roadmap() {
    return (
        <section id="roadmap" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="section-heading mb-2 block">Evolution</span>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">The Roadmap</h2>
                    <div className="h-1 w-24 mx-auto my-6 bg-tgl-amber" />
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-tgl-amber/30 transform md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {roadmapData.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Dot */}
                                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-[#0d0800] border-[3px] border-tgl-amber rounded-full transform -translate-x-[9.5px] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 p-6 card group hover:border-tgl-amber/50">
                                    <div className="inline-block px-3 py-1 bg-tgl-amber/10 border border-tgl-amber/30 text-tgl-amber rounded-md text-xs font-bold uppercase tracking-wider mb-3">
                                        Phase {i + 1}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-tgl-amber transition-colors">{item.title}</h3>
                                    <div className="text-sm font-mono text-gray-500 mb-4">{item.duration}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>

                                {/* Image Side */}
                                <div className="hidden md:flex md:w-1/2 items-center justify-center p-6">
                                    <div className="relative w-full aspect-[4/3] group-hover:drop-shadow-[0_0_40px_rgba(251,191,36,0.4)] transition-all duration-500">
                                        {/* Bright ambient backdrop to illuminate the PNG */}
                                        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#fbbf24] to-[#f97316] opacity-30 blur-[60px] rounded-full group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 z-0" />
                                        <Image 
                                            src={item.image} 
                                            alt={item.title} 
                                            fill 
                                            className="object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-110" 
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
