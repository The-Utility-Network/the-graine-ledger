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
        title: '1. Introduction & Commitment',
        content: `
**The Graine Ledger** ("Company," "we," "our," or "us"), a subsidiary of The Utility Company LLC, is committed to protecting the privacy, security, and sovereignty of personal information entrusted to us by our users, NFT holders, cask investors, customers, and stakeholders ("you" or "your"). These Privacy Protocols establish the comprehensive framework governing our collection, processing, storage, transmission, and disposition of personal and organizational data across all Company operations.

These Protocols supersede traditional privacy policies by establishing **affirmative data sovereignty principles** that recognize your fundamental rights over your personal information. We do not merely comply with privacy regulations—we exceed them, treating data protection as a core organizational value rather than a compliance obligation.

**Effective Date:** April 16, 2026
**Last Updated:** April 16, 2026
**Version:** 1.0

These Privacy Protocols apply to:
- All websites, applications, and digital platforms operated by The Graine Ledger, including thegraineledger.com
- All NFT minting, trading, and cask ownership platforms
- All services related to the distillation, maturation, and fulfillment of physical whiskey products
- All blockchain-based interactions, including smart contract executions and on-chain voting
- All communications, marketing activities, and customer relationship management
- All business-to-business relationships and partner integrations within The Utility Network
        `
    },
    {
        id: 'principles',
        title: '2. Core Privacy Principles',
        content: `
Our Privacy Protocols are founded upon seven inviolable principles that govern all data-related activities:

**2.1 Data Sovereignty**
You own your data. Period. We are custodians, not proprietors. Your personal information remains your property at all times, and you retain the absolute right to access, export, correct, or delete it without restriction, penalty, or undue delay.

**2.2 Purpose Limitation**
We collect only the data necessary for explicitly stated purposes. We do not engage in speculative data collection, behavioral profiling for third-party benefit, or accumulation of information beyond operational necessity.

**2.3 Transparency by Default**
Every data collection point, processing activity, and sharing arrangement is documented and accessible. We maintain full transparency about how your data intersects with both traditional databases and immutable blockchain records.

**2.4 Security as Architecture**
Privacy protection is engineered into our systems from inception, not retrofitted as an afterthought. We employ defense-in-depth strategies, zero-trust architectures, and cryptographic protections at every layer—from our web platforms to our smart contracts.

**2.5 Minimal Retention**
Data is retained only for the duration necessary to fulfill its stated purpose or comply with legal obligations. Automated deletion protocols ensure timely disposition of information no longer required. Note: on-chain data is immutable by design and subject to the inherent properties of blockchain technology.

**2.6 Consent as Contract**
Your consent is not buried in dense legalese or obtained through dark patterns. Consent requests are presented clearly, separately from other terms, and may be withdrawn at any time without affecting your access to core services.

**2.7 Accountability Without Exception**
We accept full responsibility for data protection across our entire ecosystem, including all vendors, processors, distillery partners, and fulfillment agents who access data on our behalf. Their compliance is our responsibility.
        `
    },
    {
        id: 'collection',
        title: '3. Data Collection Framework',
        content: `
**3.1 Categories of Personal Data**

We collect and process the following categories of personal data, each subject to the protections outlined in these Protocols:

**Identity Data**
- Full legal name and any aliases or professional names
- Date of birth and age verification indicators (mandatory for alcohol-related products)
- Government-issued identification numbers (only when legally required for age verification, KYC, or shipping compliance)
- Biometric identifiers (only with explicit consent and for specific security purposes)

**Contact Data**
- Email addresses (primary and secondary)
- Telephone numbers (mobile and landline)
- Physical mailing and shipping addresses
- Professional contact information

**Account Data**
- Usernames and account identifiers
- Authentication credentials (stored only in cryptographically hashed form)
- Account preferences and settings
- Multi-factor authentication data

**Financial & Transaction Data**
- Payment card information (tokenized, never stored in raw form)
- Cryptocurrency wallet addresses (public keys only)
- NFT ownership records and transaction history
- Cask investment records and associated metadata
- Billing and invoicing information

**Blockchain Data**
- Public wallet addresses used to interact with our smart contracts
- On-chain transaction hashes relating to NFT minting, trading, or governance votes
- Token metadata including mashbill selections, char levels, and maturation parameters
- Voting and governance participation records

**Technical Data**
- IP addresses (anonymized after 90 days)
- Browser type and version
- Device identifiers and characteristics
- Operating system information
- Access timestamps and session data

**Usage Data**
- DApp interaction patterns and feature utilization
- Distillery dashboard engagement metrics
- Performance and error logs
- Search queries within our platforms

**Communication Data**
- Customer support inquiries and responses
- Email correspondence with Company representatives
- Chat transcripts and support tickets
- Feedback and survey responses

**3.2 Collection Methods**

Data is collected through the following mechanisms:

**Direct Provision:** Information you actively provide through forms, account creation, NFT purchases, cask configuration, or communications.

**Automated Collection:** Technical data gathered automatically through cookies, analytics tools, and server logs.

**Blockchain Observation:** Publicly available on-chain data associated with wallet addresses you connect to our platform.

**Third-Party Sources:** Information received from identity verification services, payment processors, age verification providers, or public databases, always with appropriate legal basis.

**Inference:** Limited derivations from collected data to improve service delivery, never for behavioral manipulation or discriminatory profiling.
        `
    },
    {
        id: 'processing',
        title: '4. Data Processing Activities',
        content: `
**4.1 Legal Bases for Processing**

All data processing activities are conducted pursuant to one or more of the following legal bases:

**Contractual Necessity:** Processing required to fulfill our contractual obligations to you, including NFT minting, cask management, distillation services, bottling fulfillment, and transaction processing.

**Legitimate Interests:** Processing necessary for our legitimate business interests, provided such interests do not override your fundamental rights. We conduct balancing tests for all legitimate interest claims and document our reasoning.

**Legal Compliance:** Processing required to comply with applicable laws, regulations—including alcohol production and distribution regulations, age verification requirements, tax obligations—court orders, or governmental requests.

**Explicit Consent:** Processing for purposes requiring your affirmative, informed consent, which may be withdrawn at any time.

**Vital Interests:** Processing necessary to protect vital interests of you or another person, limited to emergency situations.

**4.2 Specific Processing Purposes**

We process personal data for the following purposes:

**NFT & Cask Services**
- Minting and delivering NFT deeds representing cask ownership
- Recording mashbill selections, char levels, and aging parameters on-chain
- Processing governance votes on production decisions
- Tracking cask maturation and providing real-time updates
- Facilitating secondary market trades of NFT deeds
- Coordinating physical bottling and fulfillment

**Service Delivery**
- Provisioning and maintaining your accounts
- Processing transactions and fulfilling orders
- Providing customer support and responding to inquiries
- Delivering products, services, and digital content

**Age & Identity Verification**
- Verifying legal drinking age for all whiskey-related transactions
- Conducting Know Your Customer (KYC) checks as required by financial regulations
- Ensuring compliance with alcohol distribution laws across jurisdictions

**Security & Fraud Prevention**
- Detecting and preventing unauthorized access to wallets or accounts
- Identifying and mitigating fraudulent NFT activities
- Maintaining system integrity and smart contract security
- Conducting security audits and vulnerability assessments

**Legal & Compliance**
- Fulfilling tax reporting obligations for both traditional and crypto transactions
- Maintaining records as required by TTB (Alcohol and Tobacco Tax and Trade Bureau)
- Responding to lawful legal process
- Defending legal claims and enforcing agreements

**Communication**
- Sending transactional notices, cask maturation updates, and account alerts
- Providing service updates and distillery announcements
- Delivering marketing communications (with consent)
- Conducting surveys and soliciting feedback

**Improvement & Analytics**
- Analyzing platform performance and reliability
- Identifying and resolving technical issues
- Developing new features and enhancements
- Conducting aggregated, anonymized research

**4.3 Automated Decision-Making**

We employ automated decision-making systems in limited circumstances:

- **Fraud Detection:** Automated systems analyze transaction patterns to identify potentially fraudulent activity. Flagged transactions are subject to human review before adverse action.

- **Age Verification:** Automated systems verify age eligibility for alcohol-related products. Failed verifications are subject to manual review upon request.

- **Risk Assessment:** Automated risk scoring may be used for identity verification. You have the right to request human review of any automated decision affecting your access to services.

We do not engage in fully automated decision-making that produces legal effects or similarly significant impacts without human oversight and the opportunity for you to contest the decision.
        `
    },
    {
        id: 'blockchain',
        title: '5. Blockchain Data & Immutability',
        content: `
**5.1 Nature of Blockchain Data**

The Graine Ledger operates on blockchain technology. It is essential to understand that certain data, once recorded on a public blockchain, becomes **permanently immutable** and cannot be modified or deleted by any party, including us.

**5.2 What Goes On-Chain**

The following data may be recorded on blockchain networks:
- NFT token metadata (cask identifiers, mashbill specifications, char levels, bottling dates)
- Wallet addresses associated with NFT ownership
- Transaction records (mints, transfers, sales)
- Governance votes and production decisions
- Smart contract interaction logs

**5.3 What Stays Off-Chain**

We deliberately keep the following data off-chain to preserve your privacy:
- Personal identity information (names, addresses, emails)
- Payment card and banking details
- Age verification documents
- Customer support communications
- Account preferences and settings
- Shipping and fulfillment details

**5.4 Implications for Your Rights**

Due to the immutable nature of blockchain technology:

- **Right to Erasure:** We can delete all off-chain personal data upon request. However, on-chain data (transaction records, token metadata, wallet interactions) cannot be deleted from the blockchain. We will sever the link between your identity and on-chain data in our systems.

- **Right to Rectification:** Off-chain data can be corrected. On-chain metadata is immutable once recorded. If errors exist in on-chain data, we will record corrections in supplementary metadata where technically feasible.

- **Pseudonymity:** Wallet addresses provide a degree of pseudonymity. We recommend using dedicated wallets for privacy-sensitive interactions and exercising caution when publicly linking wallet addresses to personal identity.

**5.5 Wallet Privacy**

We do not publicly associate your wallet address with your personal identity. Any mapping between wallet addresses and personal data is stored securely in our off-chain databases and subject to the full protections of these Protocols.
        `
    },
    {
        id: 'sharing',
        title: '6. Data Sharing & Transfers',
        content: `
**6.1 Categories of Recipients**

We share personal data only with the following categories of recipients, subject to appropriate safeguards:

**Service Providers**
Vendors and contractors who process data on our behalf under written agreements that mandate equivalent privacy protections, including:
- Cloud infrastructure providers
- Payment and cryptocurrency payment processors
- Age verification services
- Customer support platforms
- Analytics services (with anonymization requirements)
- Email and communication services

**Distillery & Fulfillment Partners**
Licensed distillery operators, bottling facilities, and shipping carriers who require limited data (name, shipping address, age verification status) to fulfill physical whiskey orders.

**Affiliated Entities**
The Utility Company LLC and its subsidiaries within The Utility Network for integrated service delivery, subject to these Protocols.

**Regulatory Authorities**
The Alcohol and Tobacco Tax and Trade Bureau (TTB), state alcohol control boards, and other regulatory bodies as required by law for distilled spirits production and distribution.

**Legal Authorities**
Government agencies, courts, and law enforcement when required by valid legal process or to protect vital interests. We evaluate all requests for legal validity and notify affected users unless legally prohibited.

**Business Transfers**
Prospective acquirers or successors in the event of merger, acquisition, or asset sale, subject to confidentiality agreements and notification to affected users.

**6.2 What We Never Do**

We commit to never engaging in the following practices:

❌ Selling personal data to third parties for monetary compensation
❌ Sharing data with data brokers or marketing aggregators
❌ Providing data to third parties for their independent marketing purposes without explicit consent
❌ Disclosing data to government agencies without valid legal process
❌ Sharing biometric data without explicit, separate consent
❌ Transferring data to jurisdictions lacking adequate protections without supplementary safeguards
❌ Selling or sharing on-chain wallet activity profiles to third parties

**6.3 International Data Transfers**

When transferring data across international borders, we implement the following safeguards:

**Standard Contractual Clauses:** All cross-border transfers to processors are governed by EU-approved Standard Contractual Clauses or equivalent binding instruments.

**Adequacy Determinations:** We prioritize transfers to jurisdictions with recognized adequacy status under GDPR and equivalent frameworks.

**Supplementary Measures:** Where legal frameworks in destination countries present risks, we implement additional technical and organizational measures including enhanced encryption, pseudonymization, and access restrictions.

**Transfer Impact Assessments:** We conduct and document assessments of the legal landscape in each destination country, evaluating surveillance laws, judicial remedies, and enforcement practices.
        `
    },
    {
        id: 'security',
        title: '7. Security Protocols',
        content: `
**7.1 Technical Security Measures**

We implement comprehensive technical safeguards including:

**Encryption**
- AES-256 encryption for data at rest
- TLS 1.3 encryption for data in transit
- End-to-end encryption for sensitive communications
- Cryptographic key management with hardware security modules

**Smart Contract Security**
- Third-party audits of all smart contracts before deployment
- Formal verification of critical contract logic
- Multi-signature requirements for administrative contract functions
- Time-locked governance actions for critical parameter changes

**Access Controls**
- Role-based access control (RBAC) limiting data access to authorized personnel
- Multi-factor authentication for all administrative access
- Privileged access management with just-in-time provisioning
- Automated access reviews and deprovisioning

**Network Security**
- Enterprise-grade firewalls and intrusion detection systems
- DDoS protection and traffic analysis
- Network segmentation isolating sensitive systems
- Continuous vulnerability scanning and penetration testing

**7.2 Organizational Security Measures**

**Personnel Security**
- Background checks for personnel with data access
- Comprehensive security awareness training
- Confidentiality agreements and acceptable use policies
- Disciplinary procedures for policy violations

**Vendor Management**
- Security assessments prior to vendor engagement
- Contractual security requirements and audit rights
- Ongoing monitoring of vendor security posture
- Incident notification requirements in all data processing agreements

**Physical Security**
- Distillery facilities secured with access controls and monitoring
- Data center facilities with 24/7 security personnel
- Environmental controls and redundant power
- Video surveillance and access logging at production sites

**7.3 Incident Response**

Our Incident Response Protocol includes:

**Detection:** Continuous monitoring, automated alerting, and employee reporting channels.

**Containment:** Immediate isolation of affected systems and preservation of evidence.

**Assessment:** Rapid determination of scope, affected data subjects, and risk severity.

**Notification:** Affected individuals notified within 72 hours for high-risk incidents, with clear explanation of the incident, potential impacts, and remediation steps.

**Remediation:** Root cause analysis, system hardening, and implementation of preventive measures.

**Documentation:** Comprehensive incident reports maintained for regulatory compliance and continuous improvement.
        `
    },
    {
        id: 'rights',
        title: '8. Your Rights & How to Exercise Them',
        content: `
**8.1 Enumeration of Rights**

You possess the following rights with respect to your personal data:

**Right of Access**
You may request confirmation of whether we process your personal data and, if so, obtain a copy of such data along with information about how it is processed. We will provide this information in a commonly used electronic format.

**Right of Rectification**
You may request correction of inaccurate personal data or completion of incomplete data. We will verify and implement corrections within 30 days.

**Right of Erasure**
You may request deletion of your personal data when it is no longer necessary for its original purpose, when you withdraw consent, when you object to processing, or when processing is unlawful. Certain data may be retained where required by law (including TTB regulations) or for legitimate archival purposes. On-chain data cannot be erased due to blockchain immutability (see Section 5).

**Right to Restrict Processing**
You may request limitation of processing while we verify contested data accuracy, where processing is unlawful but you oppose erasure, where we no longer need the data but you require it for legal claims, or pending verification of overriding legitimate grounds.

**Right to Data Portability**
You may receive your personal data in a structured, commonly used, machine-readable format and transmit it to another controller. This includes export of your cask portfolio, maturation data, and investment history.

**Right to Object**
You may object to processing based on legitimate interests, and we will cease processing unless we demonstrate compelling legitimate grounds. You may object to direct marketing at any time, and we will immediately cease such processing.

**Right to Withdraw Consent**
Where processing is based on consent, you may withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing conducted prior to withdrawal.

**Right Regarding Automated Decisions**
You may request human intervention in automated decisions that significantly affect you, express your point of view, and contest the decision.

**8.2 How to Exercise Your Rights**

Submit requests through any of the following channels:

**Email:** privacy@thegraineledger.com
**Parent Company:** privacy@theutilitycompany.co

We will acknowledge your request within 5 business days and provide a substantive response within 30 days. Complex requests may require an additional 60 days, in which case we will notify you of the extension and reasons.

**Verification:** We will verify your identity before processing requests to prevent unauthorized access. Verification methods include email confirmation, wallet signature challenges, or government-issued identification for sensitive requests.

**No Fee:** We do not charge fees for processing rights requests unless requests are manifestly unfounded or excessive, in which case we may charge a reasonable fee or decline to act.

**8.3 Appeals Process**

If you are dissatisfied with our response to your request, you may:
1. Request reconsideration by our Chief Privacy Officer
2. File a complaint with your local data protection authority
3. Seek judicial remedy in courts of competent jurisdiction
        `
    },
    {
        id: 'retention',
        title: '9. Data Retention Schedules',
        content: `
**9.1 Retention Principles**

Data is retained only for the minimum period necessary to fulfill the purposes for which it was collected or as required by applicable law. Upon expiration of the retention period, data is securely deleted or irreversibly anonymized.

**9.2 Retention Schedule by Category**

| Data Category | Retention Period | Justification |
|---------------|------------------|---------------|
| Account Data | Duration of account + 3 years | Service delivery, legal claims |
| Transaction Records | 7 years from transaction | Tax and financial regulations |
| NFT/Cask Ownership Records | Duration of ownership + 7 years | Asset provenance, regulatory compliance |
| Age Verification Records | 3 years from verification | Alcohol distribution compliance |
| Customer Support | 3 years from resolution | Quality assurance, dispute resolution |
| Marketing Preferences | Until consent withdrawn | Ongoing consent validity |
| Access Logs | 90 days | Security monitoring |
| Analytics Data | 26 months (anonymized) | Service improvement |
| Distillery Production Records | Permanent (anonymized) | TTB regulatory requirements |
| On-Chain Data | Permanent (immutable) | Blockchain architecture |

**9.3 Deletion Procedures**

**Automated Deletion:** Systems are configured to automatically purge data upon expiration of retention periods. Deletion jobs run nightly with audit logging.

**Secure Destruction:** Data on physical media is destroyed using NIST 800-88 compliant methods. Certificates of destruction are maintained.

**Backup Disposal:** Backup media containing expired data is overwritten or destroyed within 90 days of retention period expiration.

**Third-Party Deletion:** Processors are contractually obligated to delete data upon our instruction and confirm compliance in writing.
        `
    },
    {
        id: 'cookies',
        title: '10. Cookies & Tracking Technologies',
        content: `
**10.1 Cookie Categories**

**Strictly Necessary Cookies**
Essential for website functionality, including authentication, wallet connection persistence, security, and accessibility. These cannot be disabled without impairing core functionality.

**Functional Cookies**
Enable personalization features such as language preferences, display settings, dashboard layout, and content recommendations. You may disable these, which may reduce personalization.

**Analytics Cookies**
We use Microsoft Clarity and Vercel Analytics to collect aggregated data about site usage, helping us understand traffic patterns and improve user experience. These services do not track individuals across sites.

**Marketing Cookies**
Used with your consent to deliver relevant advertising and measure campaign effectiveness. These are disabled by default and activated only with explicit opt-in.

**10.2 Cookie Management**

**Browser Settings:** You may configure your browser to block or delete cookies. Note that blocking strictly necessary cookies may prevent access to some features, including wallet connection.

**Do Not Track:** We honor Do Not Track browser signals by disabling non-essential tracking when detected.

**10.3 Third-Party Trackers**

We limit third-party trackers on our platforms. Any third-party scripts are vetted for privacy compliance and loaded only with appropriate consent. We do not permit third parties to place tracking cookies for their independent purposes.
        `
    },
    {
        id: 'age',
        title: '11. Age Verification & Alcohol Compliance',
        content: `
**11.1 Age Restrictions**

Due to the nature of our products (distilled spirits), our Services are strictly limited to individuals who are of legal drinking age in their jurisdiction. In the United States, you must be at least 21 years of age to purchase, receive, or take delivery of any whiskey products.

**NFT Ownership vs. Physical Product:** While NFT deed ownership may be available to individuals 18 years of age or older (subject to your jurisdiction's laws on digital asset ownership), the redemption, bottling, and physical delivery of whiskey products requires verification of legal drinking age.

**11.2 Verification Measures**

We implement rigorous age verification through:
- Date of birth collection and validation during account registration
- Third-party age verification services for physical product fulfillment
- Government-issued ID verification for high-value transactions or delivery
- Shipping carrier age verification upon delivery of physical products

**11.3 Discovery of Minor Data**

Upon discovering that we have collected data from an individual under the applicable legal age without verified consent, we will:
1. Immediately suspend processing of such data
2. Attempt to notify the parent or guardian
3. Delete the data within 48 hours
4. Cancel any pending physical product orders
        `
    },
    {
        id: 'regional',
        title: '12. Regional Privacy Frameworks',
        content: `
**12.1 European Economic Area (GDPR)**

For data subjects in the EEA, UK, and Switzerland:
- Our EU representative may be contacted at: eu-privacy@theutilitycompany.co
- Legal bases for processing are documented for each activity
- Cross-border transfers are governed by Standard Contractual Clauses
- You may lodge complaints with your national supervisory authority

**12.2 California (CCPA/CPRA)**

For California residents:
- You have the right to know what personal information we collect, disclose, and sell
- You may opt out of the sale or sharing of personal information (we do not sell personal information)
- You may limit use of sensitive personal information
- We do not discriminate based on exercise of privacy rights
- Authorized agents may submit requests on your behalf with written authorization

**12.3 Other U.S. States**

We comply with state privacy laws including:
- Virginia Consumer Data Protection Act (VCDPA)
- Colorado Privacy Act (CPA)
- Connecticut Data Privacy Act (CTDPA)
- Utah Consumer Privacy Act (UCPA)
- Additional state laws as they take effect

**12.4 Other Jurisdictions**

We monitor and comply with privacy regulations in all jurisdictions where we operate. Contact our Privacy Office for jurisdiction-specific information. Note that the physical fulfillment of whiskey products may be restricted in certain jurisdictions regardless of NFT ownership status.
        `
    },
    {
        id: 'changes',
        title: '13. Protocol Updates',
        content: `
**13.1 Notification of Changes**

We may update these Privacy Protocols to reflect changes in our practices, technologies, legal requirements, or business operations. When we make material changes:

- We will post the updated Protocols on this page with a new "Last Updated" date
- We will notify you via email (if you have provided one) at least 30 days before material changes take effect
- We will maintain an archive of previous versions accessible upon request

**13.2 What Constitutes Material Change**

Material changes include:
- New categories of personal data collected
- New purposes for processing
- New categories of third-party recipients
- Changes to your rights or how to exercise them
- Changes to data retention periods
- Changes to international transfer mechanisms
- Changes to blockchain data handling practices

**13.3 Continued Use**

Your continued use of our services after the effective date of updated Protocols constitutes acceptance. If you do not agree with changes, you may close your account and request deletion of your data.
        `
    },
    {
        id: 'contact',
        title: '14. Contact Information',
        content: `
**Data Protection Office**

For questions, concerns, or requests regarding these Privacy Protocols or your personal data:

**The Graine Ledger**
A subsidiary of The Utility Company LLC
Privacy Office
Email: privacy@thegraineledger.com

**The Utility Company LLC**
Chief Privacy Officer
Email: privacy@theutilitycompany.co

**Data Protection Officer (EEA)**
Email: dpo@theutilitycompany.co

**Response Times**
- General inquiries: 5 business days
- Rights requests: 30 days (up to 90 days for complex requests)
- Complaints: 15 business days

**Escalation**
If you are not satisfied with our response, you may escalate to:
1. Chief Privacy Officer
2. General Counsel
3. Your local data protection authority
4. Courts of competent jurisdiction

---

*These Privacy Protocols represent our commitment to respecting your data sovereignty and protecting your information with the highest standards of care. They are not merely legal compliance documents but affirmations of our core values.*

**The Graine Ledger**
*A Utility Company LLC Subsidiary — Own the Spirit of Innovation*
        `
    }
];

export default function PrivacyProtocolsPage() {
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
                            Data Sovereignty Framework
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                            Privacy <span className="text-tgl-amber">Protocols</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            A comprehensive framework governing the collection, processing, and protection of personal information across The Graine Ledger ecosystem.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-mono text-gray-500">
                            <span>Effective: April 16, 2026</span>
                            <span>•</span>
                            <span>Version 1.0</span>
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

                                    // Handle headers
                                    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes('\n')) {
                                        return (
                                            <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-4">
                                                {trimmed.slice(2, -2)}
                                            </h3>
                                        );
                                    }

                                    // Handle list items starting with - or ❌ or ✓ or numbered
                                    if (trimmed.startsWith('-') || trimmed.startsWith('❌') || trimmed.startsWith('✓') || /^\d+\./.test(trimmed)) {
                                        const items = trimmed.split('\n').filter(l => l.trim());
                                        return (
                                            <ul key={i} className="list-none space-y-2 my-4">
                                                {items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-2">
                                                        <span className="text-tgl-amber mt-1">
                                                            {item.trim().startsWith('❌') ? '❌' : item.trim().startsWith('✓') ? '✓' : '•'}
                                                        </span>
                                                        <span className="text-gray-300">
                                                            {item.replace(/^[-❌✓\d.]\s*/, '').split(/(\*\*[^*]+\*\*)/).map((part, k) => {
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

                                    // Handle tables
                                    if (trimmed.startsWith('|')) {
                                        const rows = trimmed.split('\n').filter(r => r.trim() && !r.includes('---'));
                                        return (
                                            <div key={i} className="overflow-x-auto my-6">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="border-b border-white/10">
                                                            {rows[0].split('|').filter(c => c.trim()).map((cell, j) => (
                                                                <th key={j} className="text-left py-3 px-4 text-tgl-amber font-semibold">
                                                                    {cell.trim()}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {rows.slice(1).map((row, j) => (
                                                            <tr key={j} className="border-b border-white/5">
                                                                {row.split('|').filter(c => c.trim()).map((cell, k) => (
                                                                    <td key={k} className="py-3 px-4 text-gray-300">
                                                                        {cell.trim()}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
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
