import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#mission' },
    { label: 'Process', href: '#process' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
];

const externalLinks = [
    { label: 'The Utility Company', href: 'https://theutilitycompany.co' },
    { label: 'Osiris Protocol', href: 'https://osirisprotocol.org' },
    { label: 'DigiBazaar', href: 'https://theutilitycompany.co/digibazaar' },
];

const socialLinks = [
    { label: 'Whitepaper', href: 'https://docs.thegraineledger.com/' },
    { label: 'Discord', href: 'https://discord.gg/A4RtzUEN7X' },
];

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 border-t border-white/5 bg-[#0d0800]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="https://storage.googleapis.com/tgl_cdn/images/Medallions/TGL.png"
                                    alt="TGL Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"
                                />
                            </div>
                            <div>
                                <span className="text-white font-bold tracking-widest text-lg">TGL//DISTILLERY</span>
                                <p className="text-[10px] font-mono text-tgl-amber/80 uppercase">The Graine Ledger</p>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 italic">
                            The First NFT-Mediated Crypto Distillery. Own the spirit of innovation.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-widest text-tgl-amber/60 mb-4 uppercase">NAVIGATE</h4>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/40 text-sm hover:text-tgl-amber transition-colors uppercase font-mono text-[11px] tracking-wider"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-widest text-tgl-amber/60 mb-4 uppercase">ECOSYSTEM</h4>
                        <ul className="space-y-2">
                            {externalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/40 text-xs hover:text-white transition-colors flex items-center gap-1 uppercase font-mono"
                                    >
                                        {link.label}
                                        <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h4 className="text-[10px] font-mono tracking-widest text-tgl-amber/60 mt-8 mb-4 uppercase">CONNECT</h4>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/40 text-xs hover:text-tgl-amber transition-colors uppercase font-mono"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mission Text */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-widest text-tgl-amber/60 mb-4 uppercase">CORE_OBJECTIVE</h4>
                        <p className="text-xs text-white/30 leading-relaxed font-mono">
                            The Graine Ledger is an Industrial Automation as a Service (I3AS) subsidiary of The Utility Company. We deliver an unprecedented degree of control to whiskey connoisseurs through tokenized ownership and process customization.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                        © {new Date().getFullYear()} The Utility Company LLC. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-gray-500 text-xs hover:text-white transition-colors">
                            Privacy Protocols
                        </Link>
                        <Link href="/terms" className="text-gray-500 text-xs hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
