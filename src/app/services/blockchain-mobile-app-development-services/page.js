import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/common/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/common/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import AboutFAQ from "@/components/about/AboutFAQ";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Blockchain App Development Services | Next App",
    description: "Next App is a trusted blockchain app development company in the USA, delivering enterprise blockchain app development and secure mobile blockchain solutions.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Projects need more upfront clarity. Our Blockchain mobile app development analysts help define the right blockchain protocol, consensus, tokenomics, and regulations. We scope smart contract architecture, mobile interface, and backend, then provide a detailed plan with cost and timeline estimates.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Blockchain UX is tough, with wallets, gas fees, transaction confirmations, and key management confusing users. Our blockchain app builders use wireframing to map user flows and make blockchain interactions simple. This way, we provide a visual guide users can navigate easily.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Our blockchain app development services create an interactive front-end prototype of your blockchain app, linked to a test network for simulation without stakes. This clarifies the user journey before smart contract development, minimizing costly later changes.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our Blockchain app builders develop secure smart contracts in Solidity, Rust, or Move, and build the mobile app simultaneously, integrating wallet connectivity (MetaMask, WalletConnect), token management, and on-chain data feeds. Agile sprints ensure you receive working builds throughout.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'In Blockchain mobile app development, QA extends beyond typical app testing by auditing smart contracts for issues like reentrancy, overflow, and access flaws. The mobile app undergoes testing across devices, wallets, and network scenarios. Security penetration tests are performed prior to deploying code on a live blockchain.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We handle mainnet smart contract deployment, app store submissions, and Web3 setup like nodes, IPFS pinning, and indexers. Post-launch, we monitor on-chain activity, contract health, and app performance to address issues early.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const BlockchainMobileAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner
                badge="Blockchain Mobile App Development Services"
                title={
                    <>
                        <span className={styles.purpleText}> Build the </span>  Future on<span className={styles.purpleText}>  </span> <span className={styles.purpleText}>  Blockchain </span><span className={styles.purpleText}></span>
                    </>
                }
                description="Decentralized. Secure. Unstoppable. Our blockchain app development services help businesses harness the power of distributed ledger technology, from crypto wallets and smart contracts to NFT platforms and DeFi applications."
                bgImage="/services/app-store-optimization-banner-bg.png"
            />
            <ServiceSection
                heading="Why Blockchain Development  "
                purpleText="Requires a Specialized Partner"
                description="Blockchain is not just a technology trend; it’s a fundamental shift in how digital transactions, ownership, and trust work. As a leading enterprise blockchain app development company, we bring deep expertise across Ethereum, Solana, Polygon, and other major chains, building solutions that are secure, scalable, and production-ready."
                features={[
                    "Smart Contract Development",
                    "Crypto Wallet Integration",
                    "NFT Platform Development",
                    "DeFi Application Development"
                ]}
                mockupImage="/services/app-store-optimization-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Businesses Choose  "
                purpleText="Next App for Blockchain"
                description="Our AR/VR app development team combines creative 3D design with robust engineering to produce experiences that feel real, even on mobile hardware."
                features={[

                    "Multi-chain development expertise",
                    "Direct access to US-based blockchain engineers",
                    "Security-first architecture",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="Every blockchain mobile app development project has unique requirements. We keep every stage focused, collaborative, and transparent, from whitepaper review to mainnet deployment."
                cards={[
                    {
                        title: 'Strategy & Technical Discovery',
                        description: 'We evaluate your use case, select the right chain and consensus mechanism, and define the architecture before any code is written.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'Smart Contract Design & Development',
                        description: "Develop and audit smart contracts that execute your business logic securely and efficiently on-chain.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Mobile App & Integration Development',
                        description: 'Build the mobile layer using our blockchain app builder capabilities, connecting wallets, contracts, and user interfaces into a seamless experience.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Audit & Launch',
                        description: 'Conduct security audits, functional testing, and performance validation before deployment, then support the product through its live lifecycle.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Blockchain App  <span className={styles.purpleText}>Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Blockchain apps handle real assets and financial transactions. Every solution we build includes rigorous smart contract audits, multi-signature wallet support, encrypted data layers, and compliance-aware architecture to protect your users and your business."
                desc2=""
            />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment
                badge="Book An Appointment"
                heading={
                    <>
                        Your Next Big Idea  <span className={appointmentStyles.highlight}> Starts Here.</span> <br /> <span className={appointmentStyles.highlight}> </span>
                    </>
                }
                description="Whether you’re launching a first Web3 product or integrating blockchain into an existing platform, our team can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default BlockchainMobileAppDevelopmentPage;