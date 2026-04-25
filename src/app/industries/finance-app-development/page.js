import IndustryBanner from '@/components/industries/IndustryBanner';
import IndustryServicesSection from '@/components/industries/IndustryServicesSection';
import IndustryConsultationSection from '@/components/industries/IndustryConsultationSection';
import IndustryTabsSection from '@/components/industries/IndustryTabsSection';
import IndustryFeaturesSection from '@/components/industries/IndustryFeaturesSection';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import IndustrySolutionsSlider from '@/components/industries/IndustrySolutionsSlider';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Finance App Development | Next App Inc",
    description: "Next App builds secure fintech solutions, digital wallets, and banking apps. We specialize in secure financial software development for modern markets.",
};

const FinanceAppPage = () => {
    const services = [
        {
            title: 'Digital Wallet <br/> Development',
            description: 'Create secure, user-friendly digital wallets that support instant peer-to-peer transfers, contactless payments, and multi-currency management.',
            active: false
        },
        {
            title: 'Digital Banking <br/> Platforms',
            description: 'Modernize traditional banking with robust mobile platforms featuring real-time transaction tracking, bill payments, and investment tools.',
            active: false
        },
        {
            title: 'Trading & <br/> Investment Apps',
            description: 'Develop high-performance trading platforms that offer real-time market data, automated trading algorithms, and secure asset management.',
            active: false
        },
        {
            title: 'Payment Gateway <br/> Integration',
            description: 'Seamlessly integrate secure payment processing systems that support global currencies, credit cards, and alternative payment methods.',
            active: false
        },
        {
            title: 'Crypto & <br/> Blockchain Solutions',
            description: 'Build decentralized financial applications (DeFi) and crypto-asset management tools using the latest blockchain technology.',
            active: false
        },
        {
            title: 'Security & <br/> Compliance',
            description: 'We build high-security financial applications that protect user data and ensure adherence to international fintech regulations.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'security',
            title: 'Secure Transactions',
            contentTitle: 'Bank-Grade Security Architectures',
            contentDesc: 'Our finance solutions prioritize security with multi-factor authentication, biometric verification, and end-to-end encryption for every transaction. We ensure your financial data remains impenetrable to cyber threats.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp', 
            image: '/industries/accounting-app-development/tab-mockup-01.webp' 
        },
        {
            id: 'real-time',
            title: 'Instant Tracking',
            contentTitle: 'Real-time Financial Intelligence',
            contentDesc: 'Provide users with instant visibility into their financial health. Our apps offer real-time spending alerts, automated budget tracking, and predictive cash flow analysis for better financial control.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'automation',
            title: 'Smart Automation',
            contentTitle: 'Automated Financial Workflows',
            contentDesc: 'Streamline repetitive financial tasks with AI-driven automation. From automated bill payments to recurring investment plans, we build systems that save time and reduce manual errors.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'analytics',
            title: 'Fintech Analytics',
            contentTitle: 'Advanced Market & User Insights',
            contentDesc: 'Unlock the power of financial data with custom analytics dashboards. We provide market trend forecasting, user behavior analysis, and portfolio performance metrics for strategic growth.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        }
    ];

    const solutions = [
        {
            title: 'Personal Finance Manager',
            description: 'Engaging apps that help users manage their personal wealth, set saving goals, and track expenses across multiple accounts.',
            image: '/industries/accounting-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Corporate Expense Tools',
            description: 'Custom platforms for businesses to manage employee expenses, corporate credit cards, and real-time financial reporting.',
            image: '/industries/accounting-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'Insurance Tech (InsurTech)',
            description: 'Digital solutions for insurance companies to automate policy management, claim processing, and customer support.',
            image: '/industries/accounting-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'Crowdfunding Platforms',
            description: 'Secure, scalable platforms that connect startups with investors, featuring transparent fund tracking and legal compliance.',
            image: '/industries/accounting-app-development/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Finance Industry"
                mainTitle="Building the Future of Fintech with Secure Apps"
                highlightedPart="Finance App Development"
                description="We develop secure, scalable, and high-performance financial applications that redefine how users manage, invest, and transfer money."
                bgImage="/industries/accounting-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="Our <span style='color: var(--primary-color)'>Finance App</span> <br /> Development Services"
                description="Our Fintech App Development Services provide integrated tools and resources for modern financial management—from digital wallets to decentralized finance."
                servicesData={services}
                mockupImage="/industries/accounting-app-development/services-mockup.webp" 
            />

            <IndustryConsultationSection 
                title={<>Empower Your <br /> <span style={{ color: 'var(--primary-color)' }}>Financial Growth</span> <br /> with Secure Apps!</>}
                subLabel="Our Finance App Development Services"
                description="We specialize in creating high-performance fintech apps tailored to meet your business goals, ensuring maximum security and regulatory compliance."
            />

            <IndustryTabsSection 
                title={<>Innovating the Future of <span style={{ color: 'var(--primary-color)' }}>Fintech</span> <br /> with <span style={{ color: 'var(--primary-color)' }}>Secure Tech</span></>}
                description="We Create Transformative Finance Apps That Make Banking Services Accessible, Personalized, And Highly Secure."
                tabsData={tabs}
            />

            <IndustryFeaturesSection 
                title={<>Fintech <span style={{ color: 'var(--primary-color)' }}>Mobile App </span> Features to Build Successful <span style={{ color: 'var(--primary-color)' }}>Digital Platforms</span></>}
                description="We deliver mission-critical financial projects successfully with our expert team of fintech developers."
            />

            <IndustrySolutionsSlider 
                title={<>Next-Gen <span style={{ color: 'var(--primary-color)' }}>Fintech App</span> Solutions <br /> For <span className="highlightWrapper"><span className="highlightText">Modern Finance</span></span> Needs</>}
                solutionsData={solutions}
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

export default FinanceAppPage;
