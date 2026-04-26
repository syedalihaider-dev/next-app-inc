import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/services/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/services/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Blockchain Mobile App Development | Next App Inc",
    description: "Secure and decentralized mobile applications powered by Blockchain technology. Next App Inc offers expert blockchain development services.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Concept & Whitepaper',
        title: 'Concept & Whitepaper',
        description: 'We define the blockchain architecture, consensus mechanisms, and tokenomics that will drive your decentralized application.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Smart Contracts',
        title: 'Smart Contracts',
        description: 'Developing secure and efficient smart contracts that handle the core logic of your blockchain application.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Alpha Testing',
        title: 'Alpha Testing',
        description: 'Deploying to a testnet to verify the integrity of smart contracts and the user interface in a real-world scenario.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'App Integration',
        title: 'App Integration',
        description: 'Building the mobile front-end and integrating it with the blockchain back-end via Web3 libraries.',
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Security Audit',
        title: 'Security Audit',
        description: 'Conducting comprehensive security audits to ensure your application is resistant to common blockchain vulnerabilities.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Mainnet Launch',
        title: 'Mainnet Launch',
        description: 'Deploying the final product to the mainnet and providing ongoing maintenance and scaling support.',
        image: '/process-steps/step-06.webp'
    }
];

const BlockchainMobileAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Blockchain Mobile App Development"
                title={
                    <>
                        Secure <span className={styles.purpleText}>Blockchain</span> <br className="d-none d-md-block" />
                        <span className={styles.greenText}>Mobile Solutions.</span>
                    </>
                }
                underlineImage="/green-vector.webp"
                description="Leverage the power of decentralized technology with our secure and transparent blockchain mobile application development services."
                bgImage="/services/blockchain-mobile-app-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="Decentralized Future"
                purpleText="Built on Trust"
                description="Our blockchain experts build secure, decentralized applications that provide transparency and security for your business operations."
                features={[
                    "Smart Contract Development",
                    "DApp Architecture Design",
                    "Crypto Wallet Integration",
                    "Blockchain Security Audits"
                ]}
                mockupImage="/services/ios-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading="Our Blockchain Development Approach"
                purpleText="Makes It Secure & Efficient"
                tabs={tabs}
            />
            <WhyChooseAppSection />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default BlockchainMobileAppDevelopmentPage;
