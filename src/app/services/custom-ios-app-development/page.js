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
    title: "Custom iOS App Development | Next App",
    description: "Next App delivers expert custom iOS app development alongside web development, e-commerce, game development, and custom software. Get a free consultation today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our business analysts collaborate with you to define the full scope of your iOS app, translating your vision into a structured plan with clear milestones, resource allocation, realistic timelines, and a cost estimate that accounts for both quality and efficiency.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: 'We create detailed wireframes that map every screen, gesture, and interaction of your iOS app. This visual skeleton ensures the user experience is logical and elegant before we invest in high-fidelity design or development, keeping revisions fast and low-cost.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'You get a fully interactive iOS prototype to tap through before development begins. This hands-on preview lets you validate the user journey, refine navigation, and sign off on the experience, so what gets built matches exactly what you envisioned.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: "Our iOS engineers build your app using Swift and SwiftUI with Apple's latest frameworks. We follow an agile sprint model, delivering working builds regularly so you can track progress, test features, and provide feedback throughout the development cycle.",
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We put your iOS app through exhaustive testing across every supported iPhone and iPad model, iOS version, and use case. Our QA team checks for crashes, performance bottlenecks, security vulnerabilities, and App Store compliance before a single build is submitted.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'From TestFlight beta distribution to final App Store submission, we handle every step of the iOS launch process. We prepare your metadata, screenshots, and compliance documentation, ensuring a smooth review and a successful, high-visibility launch day.',
        image: '/process-steps/step-06.webp'
    }
];

const CustomIOSAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Custom iOS App Development"
                title={
                    <>
                    Apps Built for <span className={styles.purpleText}>Apple.</span> Designed for <span className={styles.greenText}>Humans.</span> Engineered to <span className={styles.purpleText}>Win.</span>
                    </>
                }
                underlineImage="/green-vector.webp"
                description="We craft iOS applications that feel at home on every Apple device — from the first tap to the hundredth session. Your users deserve a premium experience, and that's exactly what we deliver."
                bgImage="/services/custom-ios-app-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="What Sets an Exceptional "
                purpleText="iOS App Apart From the Rest"
                description="iOS users have high standards and so do we. Our Apple-certified developers build apps that respect Apple's Human Interface Guidelines while pushing the boundaries of what's possible on iOS. Whether it's a consumer app on the App Store or an enterprise tool for your team, we design every interaction with purpose."
                features={[
                    "Bespoke UI/UX Design",
                    "Advanced Swift Development",
                    "Exclusive Apple Features Integration",
                    "Scalable Enterprise Solutions"
                ]}
                mockupImage="/services/ios-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Custom iOS Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default CustomIOSAppDevelopmentPage;
