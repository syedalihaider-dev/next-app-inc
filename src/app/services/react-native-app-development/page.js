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
    title: "React Native App Development | Next App",
    description: "Next App offers expert React Native development for cross-platform iOS and Android apps with native UI, supported by Meta, trusted by Discord, Shopify, and Microsoft.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Device & Platform Discovery',
        title: 'Device & Platform Discovery',
        description: 'We evaluate your wearable ecosystem Apple Watch, Wear OS, Samsung Galaxy Watch, or a custom IoT device and outline the companion app architecture that links your wearable experience to the broader product.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Interaction & Complication Design',
        title: 'Interaction & Complication Design',
        description: "Wearable UX must adhere to strict constraints. Our designers create glanceable interfaces, tappable complications, and voice-command flows that work within the wearable screen's limits while providing full product value.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Sensor Integration & Health Data Access',
        title: 'Sensor Integration & Health Data Access',
        description: 'We integrate with Apple HealthKit, Google Fit, and device-native sensor APIs — heart rate, SpO2, accelerometer, GPS, sleep tracking, and activity data — connecting wearable hardware capabilities to your apps logic.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Companion App Development',
        title: 'Companion App Development',
        description: 'Most wearable experiences require a companion iOS or Android app for configuration, data visualization, and cloud sync. We build the full companion experience alongside the wearable app as a unified product.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Battery & Performance Optimization',
        title: 'Battery & Performance Optimization',
        description: 'Wearable apps run under strict power constraints. We optimize every data sync cycle, background task, and sensor polling interval to maximize battery life without compromising the responsiveness your users expect.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Testing & Certification',
        title: 'Testing & Certification',
        description: 'We test across physical devices and simulators, validate against Apple Watch OS and Wear OS certification requirements, and conduct end-to-end testing of the wearable-to-companion data pipeline before submission.',
        image: '/services/deployment-and-launch.webp'
    }
];

const WearableAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="React Native App Development"
                title={
                    <>
                    JavaScript Power. <span className={styles.purpleText}>Native Feel.</span> Both <span className={styles.purpleText}>Platforms.</span> <span className={styles.purpleText}></span><span className={styles.purpleText}></span>
                    </>
                }
                description="React Native is Meta's open-source framework that renders native UI components, not web views, on iOS and Android from a shared JavaScript codebase. It powers apps like Discord, Shopify, Microsoft Office, and Walmart. We build apps that feel native and scale by sharing one codebase."
                bgImage="/services/android-banner-bg.webp"
            />
            <ServiceSection  
                heading="JavaScript Efficiency With "
                purpleText="Native App Quality"
                description="React Native development combines the productivity of JavaScript with the performance of native components. Our React Native engineers bring full-stack mobile expertise, from architecture through App Store submission, to every engagement."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Wearable App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default WearableAppDevelopmentPage;
