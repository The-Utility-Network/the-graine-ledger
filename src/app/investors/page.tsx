'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { FlaskConical, BarChart3, Shield, Coins, Vote, Truck, Infinity, Lock, Globe, Users, Wheat, TreePine, Wine, Flame, RefreshCw, Building, Map } from 'lucide-react';

const THEME_COLOR = '#F97316';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const perpetualBenefits = [
    {
        icon: Infinity,
        title: 'Perpetual Barrel Allocations',
        description: 'Your NFT deed is not a one-time purchase — it\'s a perpetual membership. Holders continuously receive new barrel allocations at intervals determined by the project, from the American Genesis Collection through every future collection and international expansion.',
    },
    {
        icon: Vote,
        title: 'DAO Governance & Community',
        description: 'Even after tapping your barrel, your NFT retains full DAO membership. Participate in community governance, vote on mashbills, and shape the future of the distillery through The Graine Ledger Treasury.',
    },
    {
        icon: FlaskConical,
        title: 'Creative Control Over Your Whiskey',
        description: 'Unlike any other distillery, your NFT gives you the reins. Choose your char level, select your finish, and customize your barrel. From experimental approaches to replicating a personal favorite — the possibilities are yours.',
    },
    {
        icon: Coins,
        title: 'Treasury Revenue Share',
        description: 'American Genesis holders benefit from the continued operation of the distillery through The Graine Ledger Treasury — a community-moderated fund receiving a portion of commercial product profits, insurance barrel sales, and more.',
    },
    {
        icon: Shield,
        title: 'Barrel Insurance',
        description: 'Every barrel purchased has a coinciding duplicate insurance barrel. If your original is damaged, the insurance barrel replaces it. If your barrel remains unharmed, the insurance barrel is sold as a unique release with revenue donated to the Community DAO.',
    },
    {
        icon: RefreshCw,
        title: 'Transferable & Tradeable',
        description: 'Your NFT deed is fully transferable on secondary markets. Selling the NFT transfers all rights and future allocations to the new owner, including DAO membership and barrel entitlements.',
    },
];

const collections = [
    {
        name: 'The American Genesis Collection',
        status: 'Founding Collection',
        description: 'The inaugural collection that establishes your perpetual membership in The Graine Ledger ecosystem. A single community-voted mashbill distilled in American white oak barrels, with individual owners controlling char level and finish.',
        features: [
            'Community-voted mashbill for the entire collection',
            'Individual control over char level and barrel finish',
            'American white oak casks exclusively',
            'Cask strength, non-chill filtered bottling',
            'Every bottle labeled with full production details',
            'Perpetual DAO membership — even after tapping',
            'Free Connoisseur Collection barrel for each AG barrel owned',
            'Free barrels from every international expansion',
            'Ongoing Treasury revenue share from commercial operations',
        ],
        highlight: true,
    },
    {
        name: 'The American Connoisseur Collection',
        status: 'Launching Year 5',
        description: 'The ultimate expression of owner-driven whiskey. Complete customization of every aspect of your barrel — grain selection, wood type, char level, finish, and more — all sourced from The Graine Ledger\'s own farm. Offered in perpetuity in small batches.',
        features: [
            'Complete end-to-end customization of your whiskey',
            'Grain sourced from The Graine Ledger\'s own farm',
            'Expanded wood types: European, Mongolian, Sessile oak',
            'Full mash bill selection: bourbon, rye, sour mash, single malt',
            'Online app for granular production control',
            'American Genesis owners receive one free barrel per AG barrel',
            'Lottery allocation based on seasonal availability',
            'Offered in perpetuity in small batches',
        ],
        highlight: false,
    },
];

const lifecycle = [
    {
        num: '01',
        title: 'Mint Your Deed',
        description: 'Acquire your NFT deed, which serves as a perpetual membership in The Graine Ledger ecosystem. This is not a one-time barrel purchase — it is a lifetime entitlement to continuous barrel allocations and DAO participation.',
    },
    {
        num: '02',
        title: 'Shape the Distillate',
        description: 'For the American Genesis Collection, vote with the community on the mashbill. Then customize your individual barrel — select your char level and choose your finish (toasted barrel, wine barrel, stave inserts, and more).',
    },
    {
        num: '03',
        title: 'Age & Monitor',
        description: 'Your barrel ages in a federally bonded warehouse. Track its journey as it breathes through the seasons — contracting in winter, expanding in summer — developing character through what distillers call the Angel\'s Share.',
    },
    {
        num: '04',
        title: 'Tap When Ready',
        description: 'You decide when to tap — 6 months, 4 years, a decade. When you\'re ready, your barrel is tapped at cask strength, non-chill filtered, and every bottle is labeled with the full story: barrel name, location, mash bill, finish, bottle number, and your unique design.',
    },
    {
        num: '05',
        title: 'Continue Forever',
        description: 'Tapping doesn\'t end your membership. Your NFT transforms but your DAO participation, Treasury revenue share, and future barrel allocations continue. New barrels are assigned at project-determined intervals — from the Connoisseur Collection and every international expansion.',
    },
];

const roadmapPhases = [
    {
        title: 'The Distillery',
        timeline: 'Years 1–4',
        description: 'Design, construction, and inauguration of The Graine Ledger Distillery. All American Genesis primary barrels filled within the first year (278,250 gallon annual target). Insurance and founder barrels filled in year two. Commercial vodka production for ongoing revenue in years 1–3.',
    },
    {
        title: 'The Farm',
        timeline: 'Years 3–5',
        description: 'Acquisition and development of agricultural land for cultivation of our own grain, vegetables, fruits, and herbs. Tuned for quality, not yield, using eco-friendly processes. Farm-sourced grain will power the Connoisseur Collection. Dairy operations established using malt culms from the distilling process.',
    },
    {
        title: 'The Connoisseur Collection',
        timeline: 'Year 5+',
        description: 'Full-customization barrels offered in perpetuity in small batches. All grain sourced from our farm. American Genesis owners receive one free Connoisseur barrel per AG barrel owned. Seasonal lottery allocation ensures every owner receives at least one.',
    },
    {
        title: 'Commercial Rye Whiskey',
        timeline: 'Year 4+',
        description: 'An experimental rye whiskey line combining biochemical innovation with traditional craft. Revenue from commercial products funds The Graine Ledger Treasury for community benefit.',
    },
    {
        title: 'The Lodge & Restaurant',
        timeline: 'Year 6',
        description: 'On-site lodge and reservation-only restaurant serving dishes exclusively from farm-grown produce. Public access with special privileges for American Genesis members. Distillery tours and tastings included.',
    },
    {
        title: 'The Resort',
        timeline: 'Year 8',
        description: 'Full resort experience: 18-hole golf course, recreational facilities, and equestrian center. American Genesis members receive unparalleled access and treatment.',
    },
    {
        title: 'International Expansion',
        timeline: 'Year 8+',
        description: 'Replicating the TGL model in whiskey-producing regions worldwide — Ireland, Japan, and beyond. Each initiative produces its own Connoisseur Collection. American Genesis owners receive a free Connoisseur barrel from every international expansion.',
    },
];

const finishOptions = [
    { name: 'Toasted Barrel', description: 'Transfer to a new toasted barrel for added depth and complexity', icon: Flame },
    { name: 'Wine Barrel Finish', description: 'Secondary aging in a previously used wine barrel for fruit-forward notes', icon: Wine },
    { name: 'Stave Inserts', description: 'Custom staves inserted into the barrel for additional nuance and character', icon: TreePine },
];

const marketData = [
    { label: 'Global Whiskey Market', value: '$108B', sublabel: 'Projected 2030' },
    { label: 'Rare Whiskey CAGR', value: '12.8%', sublabel: '10-Year Average' },
    { label: 'Collectible Spirits Growth', value: '582%', sublabel: 'Knight Frank Index (Decade)' },
    { label: 'Tokenized RWA Market', value: '$16T', sublabel: 'BCG Projection 2030' },
];

export default function InvestorsPage() {
    return (
        <main className="bg-[#0d0800] text-white min-h-screen selection:bg-orange-500">
            <Navbar />
            <BackButton color={THEME_COLOR} label="Back Home" />

            {/* ═══════════ Hero ═══════════ */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-500/10 rounded-full blur-[200px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[180px]" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="https://storage.googleapis.com/tgl_cdn/images/Medallions/TGL.png"
                                    alt="TGL Medallion"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono tracking-[0.2em] uppercase">
                                Investor Relations
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                            One Mint.<br />
                            <span className="text-tgl-amber">Barrels Forever.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-4">
                            The Graine Ledger is not a one-time barrel purchase — it&apos;s a <strong className="text-white">perpetual membership</strong> in 
                            the world&apos;s first NFT-mediated crypto distillery. Holders continuously receive new barrel allocations, 
                            maintain DAO governance rights, and share in Treasury revenue from commercial operations — forever.
                        </p>
                        <p className="text-lg text-gray-500 max-w-3xl leading-relaxed mb-10">
                            Your NFT deed grants creative control over your whiskey: choose your char level, select your finish, 
                            and tap when you&apos;re ready. Then receive your next barrel and do it all over again.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://theutilitycompany.co/nexus/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-sm tracking-wider uppercase font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                                style={{ backgroundColor: THEME_COLOR }}
                            >
                                <Lock className="w-4 h-4" />
                                Access Nexus Portal
                            </a>
                            <a
                                href="#perpetual"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-sm tracking-wider uppercase font-bold text-white border border-white/10 hover:border-tgl-amber/50 transition-all bg-white/5 hover:bg-white/10"
                            >
                                How It Works
                            </a>
                        </div>
                        <p className="text-xs text-gray-600 font-mono mt-6 max-w-xl">
                            Investment opportunities are available exclusively to accredited investors as defined by SEC Rule 501.
                            Full offering documents are available through the Nexus portal upon verification.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Market Opportunity ═══════════ */}
            <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="block text-tgl-amber font-mono text-xs tracking-[0.3em] uppercase mb-2">Market Thesis</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                            Two Megatrends. <span className="text-tgl-amber">One Intersection.</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Premium spirits and tokenized real-world assets are two of the fastest-growing asset classes 
                            of the decade. The Graine Ledger sits at their convergence.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {marketData.map((item) => (
                            <motion.div
                                key={item.label}
                                variants={fadeInUp}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-tgl-amber/30 transition-all"
                            >
                                <p className="text-3xl md:text-4xl font-black text-tgl-amber">{item.value}</p>
                                <p className="text-white text-sm font-semibold mt-2">{item.label}</p>
                                <p className="text-gray-500 text-xs font-mono mt-1">{item.sublabel}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Perpetual Benefits ═══════════ */}
            <section id="perpetual" className="py-24 px-6 scroll-mt-32">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="block text-tgl-amber font-mono text-xs tracking-[0.3em] uppercase mb-2">Perpetual Ownership</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                            The Deed That <span className="text-tgl-amber">Keeps Giving</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Unlike traditional NFTs with no tangible value, your TGL deed is a perpetual membership 
                            with continuous barrel allocations, creative control, and community governance — forever.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {perpetualBenefits.map((item) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    variants={fadeInUp}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-tgl-amber/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-tgl-amber/10 flex items-center justify-center mb-4 group-hover:bg-tgl-amber/20 transition-colors">
                                        <Icon className="w-6 h-6 text-tgl-amber" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Collections ═══════════ */}
            <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="block text-tgl-amber font-mono text-xs tracking-[0.3em] uppercase mb-2">Collections</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                            Barrel <span className="text-tgl-amber">Collections</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Two distinct collections, each offering different levels of customization.
                            American Genesis holders automatically receive allocations from every future collection.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
                        {collections.map((col) => (
                            <motion.div
                                key={col.name}
                                variants={fadeInUp}
                                className={`relative rounded-2xl p-8 border transition-all ${
                                    col.highlight
                                        ? 'bg-gradient-to-b from-orange-500/10 to-transparent border-tgl-amber/40 shadow-[0_0_40px_rgba(249,115,22,0.1)]'
                                        : 'bg-white/5 border-white/10 hover:border-white/20'
                                }`}
                            >
                                <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase mb-4 ${
                                    col.highlight
                                        ? 'bg-tgl-amber text-black'
                                        : 'bg-white/10 text-gray-400'
                                }`}>
                                    {col.status}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{col.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{col.description}</p>
                                <ul className="space-y-2.5">
                                    {col.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="text-tgl-amber mt-0.5 shrink-0">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ The Finish ═══════════ */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
                        <span className="block text-tgl-amber font-mono text-xs tracking-[0.3em] uppercase mb-2">Customization</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                            The <span className="text-tgl-amber">Finish</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            After primary aging, you choose how to finish your whiskey — adding secondary character through 
                            additional maturation techniques. This is where your barrel becomes truly yours.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
                        {finishOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                                <motion.div
                                    key={option.name}
                                    variants={fadeInUp}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-tgl-amber/20 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-full bg-tgl-amber/10 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-tgl-amber" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{option.name}</h3>
                                    <p className="text-gray-400 text-sm">{option.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center text-sm text-gray-500 mt-8 max-w-xl mx-auto">
                        All bottles are cask strength, non-chill filtered, and labeled with complete provenance: barrel name, 
                        location, mash bill, finish, bottle number, pull date, and your unique owner design.
                    </motion.p>
                </div>
            </section>

            {/* ═══════════ Ownership Lifecycle ═══════════ */}
            <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="block text-tgl-amber font-mono text-xs tracking-[0.3em] uppercase mb-2">The Lifecycle</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                            How It <span className="text-tgl-amber">Works</span>
                        </h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
                        {lifecycle.map((step) => (
                            <motion.div
                                key={step.num}
                                variants={fadeInUp}
                                className="flex gap-6 md:gap-8 items-start group"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-2xl bg-tgl-amber/10 border border-tgl-amber/20 flex items-center justify-center font-mono font-black text-tgl-amber text-xl group-hover:bg-tgl-amber/20 group-hover:border-tgl-amber/40 transition-all">
                                    {step.num}
                                </div>
                                <div className="flex-1 pb-6 border-b border-white/5">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tgl-amber transition-colors">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 bg-tgl-amber/5 border border-tgl-amber/20 rounded-2xl p-6 flex items-start gap-4">
                        <Infinity className="w-8 h-8 text-tgl-amber shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-bold mb-1">The Perpetual Cycle</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                This cycle repeats indefinitely. American Genesis holders receive a free Connoisseur Collection barrel 
                                for each AG barrel they own, plus a free barrel from every international expansion (Ireland, Japan, and beyond). 
                                Your deed never stops delivering value.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Growth Roadmap ═══════════ */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="block text-tgl-amber font-mono text-xs tracking-[0.3em] uppercase mb-2">Expansion</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                            Growth <span className="text-tgl-amber">Roadmap</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            A vertically integrated operation scaling from distillery to farm to resort — 
                            then replicating globally. Each phase adds value to every existing holder.
                        </p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
                        {roadmapPhases.map((phase, i) => (
                            <motion.div
                                key={phase.title}
                                variants={fadeInUp}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-tgl-amber/20 transition-all group"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="shrink-0">
                                        <span className="inline-block px-3 py-1 rounded-full bg-tgl-amber/10 text-tgl-amber text-xs font-mono font-bold tracking-wider">
                                            {phase.timeline}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tgl-amber transition-colors">{phase.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Risk Factors ═══════════ */}
            <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <div className="flex items-center gap-3 mb-8">
                            <Shield className="w-6 h-6 text-orange-400" />
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Important Risk Factors</h2>
                        </div>
                        <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 space-y-4 text-sm text-gray-400 leading-relaxed">
                            <p>
                                <strong className="text-white">This is not an offer to sell securities.</strong> Investment opportunities in The Graine Ledger are available 
                                exclusively to accredited investors as defined by SEC Rule 501, pursuant to a Regulation D exemption. The full Private Placement 
                                Memorandum, subscription agreement, and risk disclosures are available through the Nexus investor portal after accreditation verification.
                            </p>
                            <p>
                                <strong className="text-white">Whiskey production involves inherent risks</strong> including but not limited to: evaporation loss (Angel&apos;s Share), 
                                warehouse damage, regulatory changes, production delays, quality variations, and market fluctuations. Past performance of whiskey as 
                                an asset class does not guarantee future results.
                            </p>
                            <p>
                                <strong className="text-white">NFTs and cryptocurrency involve substantial risk</strong> including but not limited to: price volatility, blockchain network 
                                failures, smart contract vulnerabilities, regulatory uncertainty, and potential total loss of value. You should not invest more than you 
                                can afford to lose.
                            </p>
                            <p>
                                <strong className="text-white">Perpetual benefits are subject to operational continuity.</strong> Future barrel allocations, Treasury distributions, 
                                international expansions, and facility developments are forward-looking projections dependent on the successful construction and operation 
                                of the distillery, farm, and related facilities.
                            </p>
                            <p>
                                <strong className="text-white">Physical product fulfillment</strong> is subject to age verification requirements (21+ in the US), shipping regulations, and jurisdictional 
                                restrictions on direct-to-consumer alcohol delivery. Not all jurisdictions permit receipt of shipped spirits.
                            </p>
                            <p className="text-orange-400 font-mono text-xs tracking-wide pt-4 border-t border-orange-500/10">
                                THE GRAINE LEDGER DOES NOT PROVIDE INVESTMENT, FINANCIAL, LEGAL, OR TAX ADVICE. CONSULT APPROPRIATE PROFESSIONALS BEFORE MAKING ANY INVESTMENT DECISIONS.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Nexus CTA ═══════════ */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <div className="relative w-20 h-20 mx-auto mb-8">
                            <Image
                                src="https://storage.googleapis.com/tgl_cdn/images/Medallions/TGL.png"
                                alt="TGL Medallion"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute inset-0 rounded-full blur-xl bg-tgl-amber/20" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                            Ready to <span className="text-tgl-amber">Own the Spirit</span>?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Access the full offering documents, complete accreditation verification, and secure your perpetual 
                            membership in The Graine Ledger through The Utility Company&apos;s institutional-grade investor portal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://theutilitycompany.co/nexus/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-mono text-sm tracking-wider uppercase font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
                                style={{ backgroundColor: THEME_COLOR }}
                            >
                                <Globe className="w-5 h-5" />
                                Enter Nexus Portal
                            </a>
                            <a
                                href="https://theutilitycompany.co/investors"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-mono text-sm tracking-wider uppercase font-bold text-white border border-white/10 hover:border-tgl-amber/30 transition-all bg-white/5"
                            >
                                <Users className="w-5 h-5" />
                                TUC Investor Relations
                            </a>
                        </div>
                        <p className="text-xs text-gray-600 font-mono mt-8 max-w-lg mx-auto">
                            The Nexus portal is operated by The Utility Company LLC. Accreditation verification is required before accessing offering materials.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
