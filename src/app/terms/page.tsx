'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

const THEME_COLOR = '#F97316';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sections = [
    {
        id: 'introduction',
        title: '1. Agreement to Terms',
        content: `
**PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING OUR SERVICES.**

These Terms of Service ("Terms," "Agreement") constitute a legally binding contract between you ("User," "you," "your") and **The Graine Ledger**, a subsidiary of The Utility Company LLC, a New Mexico limited liability company, together with its subsidiaries, affiliates, and related entities (collectively, "Company," "we," "our," "us"). These Terms govern your access to and use of all websites, applications, decentralized applications (DApps), platforms, products, and services offered by the Company, including but not limited to:

- **thegraineledger.com** — Primary marketing and information platform
- **NFT Minting Platform** — Issuance and management of NFT deeds representing cask ownership
- **Distillery DApp** — Governance, mashbill configuration, and maturation tracking
- **Secondary Marketplace** — Trading and transfer of NFT cask deeds
- **Physical Fulfillment Services** — Bottling, labeling, and shipping of whiskey products

(Collectively, the "Services")

**BY ACCESSING OR USING ANY OF OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.** If you do not agree to these Terms, you must not access or use the Services.

**Effective Date:** April 16, 2026
**Last Updated:** April 16, 2026
        `
    },
    {
        id: 'eligibility',
        title: '2. Eligibility & Account Registration',
        content: `
**2.1 Eligibility Requirements**

To access and use the Services, you must:

(a) Be at least 18 years of age, or the age of legal majority in your jurisdiction, whichever is higher;

(b) Be at least 21 years of age to purchase, receive, or take delivery of any physical whiskey products in the United States;

(c) Have the legal capacity to enter into a binding contract;

(d) Not be a person barred from using the Services under the laws of your jurisdiction of residence or any other applicable jurisdiction;

(e) Not be located in, under the control of, or a national or resident of any country subject to United States sanctions or embargoes;

(f) Not be listed on any United States government list of prohibited or restricted parties, including but not limited to the Specially Designated Nationals List administered by the Office of Foreign Assets Control (OFAC);

(g) Comply with all applicable laws and regulations in connection with your use of the Services, including but not limited to alcohol purchase and possession laws in your jurisdiction.

**2.2 Age Verification**

Due to the nature of our products (distilled spirits), we implement strict age verification:

(a) You will be required to verify your age during account registration;

(b) Additional age verification may be required at the time of physical product fulfillment;

(c) Shipping carriers may require age verification upon delivery;

(d) NFT deed ownership alone does not constitute a right to receive physical whiskey products if you do not meet the legal drinking age requirements in your jurisdiction.

**2.3 Account Registration**

Certain Services require you to create an account. When registering an account, you agree to:

(a) Provide accurate, current, and complete information as prompted by the registration process;

(b) Maintain and promptly update your account information to keep it accurate, current, and complete;

(c) Maintain the security and confidentiality of your login credentials and wallet private keys, and accept responsibility for all activities that occur under your account;

(d) Notify us immediately of any unauthorized use of your account or any other breach of security;

(e) Not share your account credentials with any third party or permit any third party to access your account;

(f) Not create multiple accounts for fraudulent purposes or to circumvent restrictions or bans.

**2.4 Account Termination**

We reserve the right to suspend or terminate your account at any time, with or without notice, for:

(a) Violation of these Terms or any applicable policies;
(b) Engagement in fraudulent, illegal, or abusive conduct;
(c) Failure to pass age verification requirements;
(d) Failure to pay applicable fees when due;
(e) Extended periods of inactivity;
(f) Upon your request;
(g) As required by law or legal process.

Upon termination, your right to use the Services will immediately cease. **NFT deed ownership is independent of account status**—your NFTs remain in your wallet regardless of account termination, though you may not access Company platforms to manage them. Provisions of these Terms that by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
        `
    },
    {
        id: 'services',
        title: '3. Description of Services',
        content: `
**3.1 The Graine Ledger Platform**

The Graine Ledger provides an NFT-mediated platform for tokenized ownership of physical whiskey casks. Our Services enable users to:

(a) Mint NFT deeds that represent ownership stakes in physical whiskey casks;

(b) Configure production parameters including mashbill composition, barrel char levels, and aging conditions through on-chain governance;

(c) Track cask maturation in real-time through our distillery dashboard;

(d) Participate in governance votes that collectively determine production decisions;

(e) Trade or transfer NFT deeds on secondary markets;

(f) Redeem matured casks for physical bottled whiskey products, subject to age verification and shipping regulations.

**3.2 Nature of NFT Deeds**

NFT deeds issued by The Graine Ledger:

(a) Represent a contractual right to a proportional stake in a physical whiskey cask, not a security, investment contract, or financial instrument;

(b) Do not constitute shares, equity, profit participation, or any ownership interest in The Graine Ledger, The Utility Company LLC, or any affiliated entity;

(c) Are subject to the inherent risks of blockchain technology and the physical risks associated with whiskey production and maturation;

(d) May fluctuate in value based on market conditions, and the Company makes no guarantees regarding the present or future value of any NFT.

**3.3 Physical Product Fulfillment**

Physical whiskey product fulfillment is subject to:

(a) Verification of legal drinking age in the recipient's jurisdiction;

(b) Compliance with interstate and international shipping regulations for alcoholic beverages;

(c) Availability of shipping to your jurisdiction (some jurisdictions prohibit direct-to-consumer alcohol shipping);

(d) Payment of applicable shipping fees, duties, and taxes;

(e) Completion of the agreed-upon maturation period.

**3.4 Modifications to Services**

We reserve the right to modify, suspend, or discontinue any Service, or any part thereof, at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of any Service, provided that NFT deed holders will receive reasonable notice of changes materially affecting their cask ownership rights.

**3.5 Service Availability**

While we strive to maintain continuous availability, we do not guarantee that the Services will be available at all times or that access will be uninterrupted. Services may be subject to scheduled maintenance, unscheduled downtime, blockchain network congestion, force majeure events, or circumstances beyond our reasonable control.

**3.6 Third-Party Services**

The Services may integrate with or provide access to third-party services, including blockchain networks, cryptocurrency wallets, decentralized exchanges, and shipping carriers. We do not control and are not responsible for third-party services. Your use of third-party services is governed by those third parties' terms of service and privacy policies.
        `
    },
    {
        id: 'nft-terms',
        title: '4. NFT Ownership & Blockchain Terms',
        content: `
**4.1 NFT Minting**

(a) NFT deeds are minted on blockchain networks selected by the Company;

(b) Minting requires a compatible cryptocurrency wallet and sufficient funds to cover mint price and network gas fees;

(c) Gas fees are determined by the blockchain network and are outside the Company's control;

(d) All NFT sales are final upon confirmation on the blockchain. No refunds will be issued for completed mints;

(e) The Company reserves the right to limit the number of NFTs minted per wallet or per transaction.

**4.2 Wallet Responsibility**

(a) You are solely responsible for the security and management of your cryptocurrency wallet, including private keys, seed phrases, and recovery mechanisms;

(b) The Company cannot recover lost or stolen wallet credentials, nor can it reverse or modify blockchain transactions;

(c) Sending NFTs or cryptocurrency to incorrect wallet addresses may result in permanent, irrecoverable loss. The Company is not liable for user error in blockchain transactions;

(d) You acknowledge that blockchain transactions are irreversible once confirmed on the network.

**4.3 Smart Contract Risks**

(a) Our smart contracts are audited by qualified third parties; however, no audit guarantees the absence of vulnerabilities;

(b) You acknowledge the risks of interacting with smart contracts, including but not limited to bugs, exploits, and unforeseen interactions with other protocols;

(c) The Company is not liable for losses resulting from smart contract vulnerabilities that were not reasonably foreseeable.

**4.4 Governance Rights**

(a) NFT deed holders may participate in governance votes pertaining to production parameters;

(b) Governance decisions are advisory in nature unless otherwise specified;

(c) The Company reserves the right to override governance decisions that would violate applicable law, compromise product safety, or be otherwise impracticable;

(d) Governance power is proportional to NFT holdings unless otherwise specified in the applicable smart contract.

**4.5 Intellectual Property of NFTs**

(a) Purchase of an NFT deed grants you ownership of the token on the blockchain;

(b) You receive a limited, personal, non-commercial license to display the associated artwork and metadata for personal use;

(c) You do not receive copyright, trademark, or other intellectual property rights to The Graine Ledger brand, artwork, or designs;

(d) Commercial use of NFT artwork or The Graine Ledger branding requires prior written consent.
        `
    },
    {
        id: 'fees',
        title: '5. Fees, Payment & Billing',
        content: `
**5.1 Pricing**

Fees for the Services include but are not limited to:

(a) NFT mint prices as displayed at the time of purchase;

(b) Blockchain network gas fees (variable, not controlled by the Company);

(c) Secondary market royalty fees on NFT resales;

(d) Physical product fulfillment fees, including bottling, labeling, shipping, and handling;

(e) Any applicable platform fees as disclosed at the point of transaction.

**5.2 Payment Methods**

(a) NFT minting transactions are conducted in supported cryptocurrencies as indicated on our platform;

(b) Physical product fulfillment may accept credit cards, debit cards, ACH transfers, and supported cryptocurrencies;

(c) By providing payment information, you authorize us (or our payment processors) to charge the applicable fees using the payment method provided.

**5.3 Taxes**

All fees are exclusive of taxes, levies, duties, or excise taxes imposed by taxing authorities. You are responsible for paying all applicable taxes, including but not limited to:

(a) Sales taxes on physical whiskey products;

(b) Excise taxes on distilled spirits;

(c) Import duties for international shipments;

(d) Capital gains taxes on NFT sales (consult your tax advisor);

(e) Any other taxes applicable in your jurisdiction.

**5.4 Refunds**

(a) All blockchain transactions (including NFT mints) are final and non-refundable;

(b) Physical product orders may be refunded only if the product arrives damaged, in which case you must notify us within 48 hours of delivery with photographic evidence;

(c) Refunds for fulfillment fees may be issued if shipping to your jurisdiction is prohibited and the order cannot be completed;

(d) Gas fees are non-refundable under all circumstances.

**5.5 Royalties**

The Company reserves the right to collect royalties on secondary market sales of NFT deeds as programmed into the smart contract. Current royalty rates are published on our platform and are subject to change with reasonable notice.
        `
    },
    {
        id: 'intellectual-property',
        title: '6. Intellectual Property Rights',
        content: `
**6.1 Company Intellectual Property**

The Services, including all software, smart contracts, algorithms, designs, graphics, text, images, audio, video, trademarks, service marks, trade names, logos, and other intellectual property (collectively, "Company IP"), are owned by or licensed to the Company and are protected by United States and international intellectual property laws.

**6.2 License Grant to You**

Subject to your compliance with these Terms, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for your personal or internal business purposes. This license does not include any right to:

(a) Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any Company IP;

(b) Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of any software or smart contracts;

(c) Remove, alter, or obscure any proprietary notices on the Services or Company IP;

(d) Use the Services or Company IP for competitive analysis or to build a competing product or service;

(e) Frame, mirror, or incorporate any portion of the Services into any other website, application, or service without our prior written consent.

**6.3 Your Content**

(a) **Ownership:** You retain ownership of all content, data, and materials you submit, post, upload, or transmit through the Services ("Your Content").

(b) **License Grant:** By submitting Your Content, you grant the Company a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, and display Your Content solely to the extent necessary to provide, improve, and promote the Services.

(c) **Representations:** You represent and warrant that (i) you own or have the rights to grant the licenses in this Section; (ii) Your Content does not infringe the intellectual property or other rights of any third party; and (iii) Your Content complies with applicable laws and these Terms.

**6.4 Feedback**

If you provide suggestions, ideas, or feedback regarding the Services ("Feedback"), you grant the Company a perpetual, irrevocable, worldwide, royalty-free license to use such Feedback for any purpose without compensation or attribution.

**6.5 DMCA Policy**

We respect intellectual property rights and respond to notices of alleged infringement in accordance with the Digital Millennium Copyright Act ("DMCA"). To report alleged copyright infringement, please contact our designated agent at: legal@theutilitycompany.co.
        `
    },
    {
        id: 'user-conduct',
        title: '7. Acceptable Use Policy',
        content: `
**7.1 General Conduct Standards**

You agree to use the Services only for lawful purposes and in accordance with these Terms. You shall not use the Services:

(a) In any way that violates any applicable federal, state, local, or international law or regulation, including but not limited to alcohol production, distribution, and consumption laws;

(b) To transmit, or procure the sending of, any advertising or promotional material without our prior written consent;

(c) To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity;

(d) To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm the Company or users of the Services.

**7.2 Prohibited Activities**

You shall not:

(a) Introduce any viruses, Trojan horses, worms, logic bombs, ransomware, or other material that is malicious or technologically harmful;

(b) Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, smart contracts, servers, or networks connected to the Services;

(c) Attack the Services via a denial-of-service attack or a distributed denial-of-service attack;

(d) Use any robot, spider, scraper, or other automated means to access the Services for any purpose without our express written permission;

(e) Circumvent, disable, or otherwise interfere with security-related features of the Services;

(f) Attempt to manipulate NFT prices through wash trading, market manipulation, or deceptive practices;

(g) Use multiple wallets or accounts to circumvent mint limits or governance restrictions;

(h) Resell or redistribute physical whiskey products in violation of applicable alcohol distribution laws.

**7.3 Cryptocurrency and Blockchain-Specific Provisions**

For Services involving cryptocurrency, tokens, or blockchain technology, you additionally agree:

(a) Not to use the Services for money laundering, terrorist financing, sanctions evasion, or other illicit financial activities;

(b) To comply with all applicable anti-money laundering (AML) and know-your-customer (KYC) requirements;

(c) To accept the inherent risks of blockchain technology, including but not limited to price volatility, regulatory uncertainty, and technological risks;

(d) That we do not provide investment, financial, tax, or legal advice, and you should consult appropriate professionals before making financial decisions.
        `
    },
    {
        id: 'disclaimers',
        title: '8. Disclaimers & Warranty Exclusions',
        content: `
**8.1 "AS IS" AND "AS AVAILABLE" BASIS**

THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:

(a) IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT;

(b) WARRANTIES THAT THE SERVICES WILL MEET YOUR REQUIREMENTS;

(c) WARRANTIES THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE;

(d) WARRANTIES REGARDING THE ACCURACY OR RELIABILITY OF ANY INFORMATION OBTAINED THROUGH THE SERVICES;

(e) WARRANTIES THAT DEFECTS IN SMART CONTRACTS WILL BE CORRECTED.

**8.2 Product Disclaimers**

(a) WHISKEY IS A NATURAL PRODUCT SUBJECT TO VARIATIONS IN FLAVOR, COLOR, AND CHARACTER. THE COMPANY DOES NOT GUARANTEE SPECIFIC TASTE PROFILES, RATINGS, OR MARKET VALUES FOR PRODUCED WHISKEY;

(b) MATURATION TIMELINES ARE ESTIMATES AND MAY VARY DUE TO ENVIRONMENTAL CONDITIONS, REGULATORY REQUIREMENTS, OR PRODUCTION CONSTRAINTS;

(c) THE COMPANY IS NOT RESPONSIBLE FOR DAMAGE, LOSS, OR SPOILAGE OF WHISKEY DUE TO NATURAL DISASTERS, WAREHOUSE FAILURES, OR OTHER FORCE MAJEURE EVENTS, SUBJECT TO THE INSURANCE PROVISIONS DESCRIBED IN SUPPLEMENTAL MATERIALS.

**8.3 Investment and Financial Disclaimers**

THE COMPANY DOES NOT PROVIDE INVESTMENT, FINANCIAL, LEGAL, OR TAX ADVICE. NOTHING IN THE SERVICES SHOULD BE CONSTRUED AS AN OFFER TO SELL OR A SOLICITATION OF AN OFFER TO BUY ANY SECURITY, TOKEN, OR OTHER FINANCIAL INSTRUMENT. NFT DEEDS ARE NOT SECURITIES AND ARE NOT REGISTERED WITH THE SEC OR ANY STATE SECURITIES REGULATORY AUTHORITY. CRYPTOCURRENCY AND TOKENIZED ASSETS ARE SUBJECT TO SIGNIFICANT RISKS INCLUDING TOTAL LOSS OF VALUE.

**8.4 Blockchain Disclaimers**

THE COMPANY IS NOT LIABLE FOR LOSSES ARISING FROM BLOCKCHAIN NETWORK CONGESTION, HIGH GAS FEES, FAILED TRANSACTIONS, HARD FORKS, PROTOCOL CHANGES, OR ANY OTHER BLOCKCHAIN-RELATED EVENTS OUTSIDE THE COMPANY'S REASONABLE CONTROL.

**8.5 Jurisdictional Variations**

SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. IN SUCH JURISDICTIONS, THE ABOVE EXCLUSIONS SHALL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
        `
    },
    {
        id: 'liability',
        title: '9. Limitation of Liability',
        content: `
**9.1 Exclusion of Consequential Damages**

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS, DISTILLERY OPERATORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR:

(a) Loss of profits, revenue, goodwill, use, data, or other intangible losses;
(b) The cost of procurement of substitute services;
(c) Unauthorized access to or alteration of your transmissions or data;
(d) Fluctuations in the value of NFTs or cryptocurrency;
(e) Loss of or damage to physical whiskey products;
(f) Statements or conduct of any third party on the Services;
(g) Any other matter relating to the Services;

WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

**9.2 Aggregate Liability Cap**

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL LIABILITY OF THE COMPANY AND ITS AFFILIATES FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE GREATER OF:

(a) THE AMOUNTS YOU PAID TO THE COMPANY IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM; OR

(b) ONE HUNDRED UNITED STATES DOLLARS ($100.00).

**9.3 Essential Basis of the Bargain**

YOU ACKNOWLEDGE THAT THE COMPANY HAS SET ITS PRICES AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE DISCLAIMERS OF WARRANTY AND THE LIMITATIONS OF LIABILITY SET FORTH HEREIN, AND THAT THE SAME FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN THE PARTIES.

**9.4 Jurisdictional Variations**

SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN DAMAGES. IN SUCH JURISDICTIONS, THE COMPANY'S LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
        `
    },
    {
        id: 'indemnification',
        title: '10. Indemnification',
        content: `
**10.1 Your Indemnification Obligations**

You agree to indemnify, defend, and hold harmless the Company and its officers, directors, employees, agents, affiliates, distillery partners, successors, and assigns from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees and costs) arising out of or relating to:

(a) Your access to or use of the Services;

(b) Your violation of these Terms;

(c) Your violation of any third-party rights, including but not limited to intellectual property rights, privacy rights, or publicity rights;

(d) Your violation of any applicable law, rule, or regulation, including alcohol distribution or possession laws;

(e) Your Content or any content you submit, post, or transmit through the Services;

(f) Your willful misconduct or negligence;

(g) Any dispute between you and another user of the Services;

(h) Any claim arising from the redistribution, resale, or gifting of physical whiskey products in violation of applicable law.

**10.2 Indemnification Procedure**

The Company will provide you with prompt written notice of any claim subject to indemnification. The Company reserves the right, at its own expense, to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims. You shall not settle any claim without the Company's prior written consent.

**10.3 Survival**

Your indemnification obligations shall survive the termination of these Terms and your use of the Services.
        `
    },
    {
        id: 'dispute-resolution',
        title: '11. Dispute Resolution & Arbitration',
        content: `
**11.1 Informal Resolution**

Before initiating any formal dispute resolution proceeding, you agree to first contact us at legal@thegraineledger.com and attempt to resolve the dispute informally. We will attempt to resolve any dispute within thirty (30) days of receiving notice.

**11.2 Binding Arbitration**

IF WE CANNOT RESOLVE A DISPUTE INFORMALLY, YOU AND THE COMPANY AGREE THAT ANY DISPUTE, CONTROVERSY, OR CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL BE RESOLVED BY BINDING ARBITRATION administered by the American Arbitration Association ("AAA") in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted:

(a) In Albuquerque, New Mexico, or another mutually agreed location;

(b) By a single arbitrator selected in accordance with AAA rules;

(c) In the English language;

(d) In accordance with the Federal Arbitration Act, to the extent applicable.

**11.3 Class Action Waiver**

YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION OR CLASS-WIDE ARBITRATION.

**11.4 Exceptions**

The following claims are exempt from mandatory arbitration:

(a) Claims that may be brought in small claims court;
(b) Claims for injunctive relief to prevent intellectual property infringement;
(c) Claims that applicable law does not permit to be arbitrated.

**11.5 Governing Law**

These Terms shall be governed by and construed in accordance with the laws of the State of New Mexico, without regard to its conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods shall not apply.

**11.6 Venue**

For any claims not subject to arbitration, you consent to exclusive jurisdiction and venue in the state and federal courts located in Bernalillo County, New Mexico.

**11.7 Time Limitation**

Any claim arising out of or relating to these Terms or the Services must be filed within one (1) year after such claim arose, or be forever barred.
        `
    },
    {
        id: 'general',
        title: '12. General Provisions',
        content: `
**12.1 Entire Agreement**

These Terms, together with our Privacy Protocols and any supplemental terms or policies incorporated by reference, constitute the entire agreement between you and the Company regarding your use of the Services and supersede all prior agreements and understandings, whether written or oral.

**12.2 Severability**

If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if modification is not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.

**12.3 Waiver**

The failure of the Company to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of the Company.

**12.4 Assignment**

You may not assign or transfer these Terms or any rights or obligations hereunder without the Company's prior written consent. The Company may freely assign or transfer these Terms without restriction. These Terms shall bind and inure to the benefit of the parties and their respective successors and permitted assigns.

**12.5 No Third-Party Beneficiaries**

These Terms do not create any third-party beneficiary rights, except that the Company's affiliates, distillery partners, and licensors are intended third-party beneficiaries of the provisions regarding intellectual property and limitation of liability.

**12.6 Notices**

(a) **Notices to You:** We may provide notices to you via email to the address associated with your account, by posting on the Services, or by other reasonable means. Notices sent by email are effective upon sending; notices posted on the Services are effective upon posting.

(b) **Notices to the Company:** Notices to the Company must be sent in writing to:

The Graine Ledger
c/o The Utility Company LLC
Attn: Legal Department
Email: legal@thegraineledger.com

**12.7 Force Majeure**

The Company shall not be liable for any failure or delay in performance resulting from causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, pandemics, supply chain disruptions, barrel shortages, grain supply issues, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.

**12.8 Relationship of the Parties**

Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and the Company. Neither party has authority to bind the other or to incur obligations on the other's behalf.

**12.9 Headings**

The headings in these Terms are for convenience only and shall not affect the interpretation of these Terms.

**12.10 Construction**

These Terms shall not be construed against the drafter. Any ambiguity shall be resolved without regard to which party drafted the language in question.
        `
    },
    {
        id: 'modifications',
        title: '13. Modifications to Terms',
        content: `
**13.1 Right to Modify**

The Company reserves the right to modify these Terms at any time in its sole discretion. When we make changes, we will:

(a) Post the updated Terms on our website with a new "Last Updated" date;

(b) Provide at least thirty (30) days' notice for material changes, via email or prominent notice on the Services;

(c) Maintain an archive of previous versions available upon request.

**13.2 Material Changes**

Material changes include but are not limited to:

(a) Changes to dispute resolution, arbitration, or class action waiver provisions;
(b) Modifications to limitation of liability or warranty provisions;
(c) Changes to NFT deed rights or cask ownership terms;
(d) New obligations or restrictions on your use of the Services;
(e) Changes to fee structures, royalty rates, or fulfillment terms;
(f) Changes to data processing or privacy practices that require separate consent.

**13.3 Acceptance of Modified Terms**

Your continued use of the Services following the posting of updated Terms (and, for material changes, following the notice period) constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using the Services and terminate your account.

**13.4 Disputes Under Prior Terms**

Disputes arising from events that occurred before the effective date of modified Terms shall be governed by the version of the Terms in effect at the time the disputed events occurred.
        `
    },
    {
        id: 'contact',
        title: '14. Contact Information',
        content: `
For questions, concerns, or notices regarding these Terms of Service:

**The Graine Ledger**
c/o The Utility Company LLC
Legal Department
Email: legal@thegraineledger.com

**General Inquiries:**
info@thegraineledger.com

**Privacy Matters:**
privacy@thegraineledger.com

**Parent Company:**
legal@theutilitycompany.co

---

**ACKNOWLEDGMENT**

BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS, TOGETHER WITH THE PRIVACY PROTOCOLS, REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN YOU AND THE COMPANY, AND SUPERSEDE ANY PROPOSAL OR PRIOR AGREEMENT, ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN YOU AND THE COMPANY RELATING TO THE SUBJECT MATTER OF THESE TERMS.

---

**The Graine Ledger**
*A Utility Company LLC Subsidiary — Own the Spirit of Innovation*

**© 2026 The Utility Company LLC. All Rights Reserved.**
        `
    }
];

export default function TermsOfServicePage() {
    return (
        <main className="bg-[#0d0800] text-white min-h-screen selection:bg-orange-500">
            <Navbar />
            <BackButton color={THEME_COLOR} label="Back Home" />

            {/* Hero */}
            <section className="relative pt-40 pb-16 px-6 border-b border-white/5">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-500/30 rounded-full blur-[150px]" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                            Legal Agreement
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                            Terms of <span className="text-tgl-amber">Service</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            The binding agreement governing your access to and use of all services, platforms, and products offered by The Graine Ledger, including NFT cask deeds and physical whiskey fulfillment.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-mono text-gray-500">
                            <span>Effective: April 16, 2026</span>
                            <span>•</span>
                            <span>Jurisdiction: New Mexico, USA</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-12 px-6 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">Table of Contents</h2>
                    <div className="grid md:grid-cols-2 gap-2">
                        {sections.map((section, i) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="text-gray-400 hover:text-tgl-amber transition-colors py-2 flex items-center gap-3"
                            >
                                <span className="text-orange-500/50 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                                <span>{section.title.replace(/^\d+\.\s*/, '')}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            id={section.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-16 scroll-mt-32"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
                                <span className="w-10 h-[2px] bg-tgl-amber"></span>
                                {section.title}
                            </h2>
                            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300">
                                {section.content.trim().split('\n\n').map((paragraph, i) => {
                                    const trimmed = paragraph.trim();

                                    // Handle all-caps paragraphs (legal emphasis)
                                    if (trimmed === trimmed.toUpperCase() && trimmed.length > 50) {
                                        return (
                                            <p key={i} className="text-orange-400/80 leading-relaxed mb-4 font-medium text-sm tracking-wide">
                                                {trimmed.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={j} className="text-orange-300">{part.slice(2, -2)}</strong>;
                                                    }
                                                    return part;
                                                })}
                                            </p>
                                        );
                                    }

                                    // Handle headers starting with **
                                    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes('\n') && trimmed.length < 100) {
                                        return (
                                            <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-4">
                                                {trimmed.slice(2, -2)}
                                            </h3>
                                        );
                                    }

                                    // Handle lettered/numbered lists
                                    if (/^\([a-z]\)/.test(trimmed) || /^\(\d+\)/.test(trimmed)) {
                                        const items = trimmed.split('\n').filter(l => l.trim());
                                        return (
                                            <div key={i} className="my-4 pl-4 border-l-2 border-orange-500/30">
                                                {items.map((item, j) => (
                                                    <p key={j} className="text-gray-300 mb-2">
                                                        {item.split(/(\*\*[^*]+\*\*)/).map((part, k) => {
                                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                                return <strong key={k} className="text-white">{part.slice(2, -2)}</strong>;
                                                            }
                                                            return part;
                                                        })}
                                                    </p>
                                                ))}
                                            </div>
                                        );
                                    }

                                    // Handle bullet lists starting with -
                                    if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
                                        const items = trimmed.split('\n').filter(l => l.trim());
                                        return (
                                            <ul key={i} className="list-none space-y-2 my-4">
                                                {items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-2">
                                                        <span className="text-tgl-amber mt-1">•</span>
                                                        <span className="text-gray-300">
                                                            {item.replace(/^[-•]\s*/, '').split(/(\*\*[^*]+\*\*)/).map((part, k) => {
                                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                                    return <strong key={k} className="text-white">{part.slice(2, -2)}</strong>;
                                                                }
                                                                return part;
                                                            })}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }

                                    // Regular paragraphs with bold support
                                    return (
                                        <p key={i} className="text-gray-300 leading-relaxed mb-4">
                                            {trimmed.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <strong key={j} className="text-white">{part.slice(2, -2)}</strong>;
                                                }
                                                return part;
                                            })}
                                        </p>
                                    );
                                })}
                            </div>

                            {index < sections.length - 1 && (
                                <div className="mt-12 pt-12 border-t border-white/5" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
