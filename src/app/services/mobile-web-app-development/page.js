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
    title: "Mobile Web App Development | Next App Inc",
    description: "High-performance mobile web applications for a seamless browsing experience. Next App Inc builds responsive and fast mobile web apps.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Web Strategy',
        title: 'Web Strategy',
        description: 'Defining the tech stack and architecture for a high-performance web application that works flawlessly on mobile browsers.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Responsive Design',
        title: 'Responsive Design',
        description: 'Creating mobile-first designs that adapt perfectly to any screen size and orientation.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Web Demo',
        title: 'Web Demo',
        description: 'Developing a prototype to test the application\'s performance and accessibility on various mobile devices.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'Front-End Coding',
        title: 'Front-End Coding',
        description: 'Building the app using modern frameworks like React or Next.js, ensuring fast load times and smooth interactions.',
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Performance Audit',
        title: 'Performance Audit',
        description: 'Rigorous testing for speed, security, and cross-browser compatibility to ensure a premium user experience.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Cloud Launch',
        title: 'Cloud Launch',
        description: 'Deploying your mobile web application to the cloud with robust scaling and monitoring features.',
        image: '/process-steps/step-06.webp'
    }
];

const MobileWebAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Mobile Web App Development"
                title={
                    <>
                        Seamless <span className={styles.purpleText}>Mobile Web</span> <br className="d-none d-md-block" />
                        <span className={styles.greenText}>Applications.</span>
                    </>
                }
                underlineImage="/green-vector.webp"
                description="We develop responsive and high-speed mobile web applications that provide a native-like experience on any mobile browser."
                bgImage="/services/mobile-web-app-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="Modern Web Solutions"
                purpleText="Built for Performance"
                description="Our mobile web apps are designed to be fast, responsive, and highly accessible, providing your users with a seamless experience without the need for an app store download."
                features={[
                    "Progressive Web Apps (PWA)",
                    "Responsive Web Design",
                    "High-Speed Performance",
                    "SEO Optimized Solutions"
                ]}
                mockupImage="/services/ios-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading="Our Mobile Web Development Approach"
                purpleText="Makes It Fast & Efficient"
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

export default MobileWebAppDevelopmentPage;
