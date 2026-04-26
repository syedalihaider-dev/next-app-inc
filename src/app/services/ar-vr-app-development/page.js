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
    title: "AR/VR App Development | Next App Inc",
    description: "Experience the future with immersive AR/VR applications. Next App Inc delivers cutting-edge augmented and virtual reality solutions for businesses.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Concept & Planning',
        title: 'Concept & Planning',
        description: 'We define the AR/VR experience, identifying the core mechanics and immersion levels required to meet your business goals.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: '3D Modeling',
        title: '3D Modeling',
        description: 'Creating the visual assets and 3D environments that will form the backbone of your immersive experience.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype',
        title: 'Prototype',
        description: 'Building a functional prototype to test spatial interactions and user comfort in the virtual or augmented space.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'Core Development',
        title: 'Core Development',
        description: 'Developing the application using Unity or Unreal Engine, integrating sensors, and optimizing performance for target hardware.',
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Testing',
        title: 'Testing',
        description: 'Rigorous testing for motion sickness, latency, and interaction accuracy to ensure a high-quality user experience.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Launch',
        title: 'Launch',
        description: 'Deploying to platforms like Meta Quest, HTC Vive, or mobile AR platforms (ARKit/ARCore).',
        image: '/process-steps/step-06.webp'
    }
];

const ARVRAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="AR/VR App Development"
                title={
                    <>
                        Immersive <span className={styles.purpleText}>AR/VR</span> <br className="d-none d-md-block" />
                        <span className={styles.greenText}>Experiences.</span>
                    </>
                }
                underlineImage="/green-vector.webp"
                description="Transform your business with immersive AR/VR solutions that engage users in entirely new ways through augmented and virtual reality."
                bgImage="/services/ar-vr-app-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="Immersive Solutions"
                purpleText="Built for Reality"
                description="We create groundbreaking AR and VR applications that push the boundaries of technology. From training simulations to interactive marketing, our solutions are designed for maximum impact."
                features={[
                    "Expert Unity/Unreal Developers",
                    "Custom 3D Asset Creation",
                    "Spatial Interaction Design",
                    "Multi-Platform Support"
                ]}
                mockupImage="/services/ios-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading="Our AR/VR Development Approach"
                purpleText="Makes It Immersive & Efficient"
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

export default ARVRAppDevelopmentPage;
