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
    title: "Cross Platform App Development | Next App Inc",
    description: "Reach a wider audience with high-quality cross-platform mobile apps. Next App Inc uses Flutter and React Native for seamless performance.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Unified Planning',
        title: 'Unified Planning',
        description: 'We plan for a single codebase that serves multiple platforms, ensuring feature parity and consistent design.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Shared UI/UX',
        title: 'Shared UI/UX',
        description: 'Designing a user interface that feels native on both iOS and Android while maintaining brand consistency.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Hybrid Prototype',
        title: 'Hybrid Prototype',
        description: 'Creating a prototype to test the application\'s performance and feel on different operating systems simultaneously.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'Framework Coding',
        title: 'Framework Coding',
        description: 'Developing the app using Flutter or React Native to leverage cross-platform efficiencies and performance.',
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Dual Testing',
        title: 'Dual Testing',
        description: 'Rigorous testing on both iOS and Android devices to ensure flawless performance and responsiveness.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Multi-Store Launch',
        title: 'Multi-Store Launch',
        description: 'Simultaneous deployment to the Apple App Store and Google Play Store for maximum reach.',
        image: '/process-steps/step-06.webp'
    }
];

const CrossPlatformAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Cross Platform App Development"
                title={
                    <>
                        Dynamic <span className={styles.purpleText}>Cross-Platform</span> <br className="d-none d-md-block" />
                        <span className={styles.greenText}>App Development.</span>
                    </>
                }
                underlineImage="/green-vector.webp"
                description="Deliver a consistent user experience across multiple platforms with our high-performance cross-platform mobile application development."
                bgImage="/services/cross-platform-app-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="Multi-Platform Efficiency"
                purpleText="Built for Everyone"
                description="Our cross-platform development approach saves time and budget without compromising on quality or performance. Reach all your users with a single codebase."
                features={[
                    "Flutter & React Native Experts",
                    "Single Codebase Efficiency",
                    "Native-Like Performance",
                    "Rapid Market Entry"
                ]}
                mockupImage="/services/ios-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading="Our Cross-Platform Development Approach"
                purpleText="Makes It Simple & Efficient"
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

export default CrossPlatformAppDevelopmentPage;
