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
    title: "Wearable App Development | Next App",
    description: "Next App builds expert wearable app development solutions, from Apple Watch and Wear OS apps to fitness trackers and IoT-connected wearables. Get a free consultation today.",
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
                badge="Wearable App Development"
                title={
                    <>
                    Your <span className={styles.purpleText}>Wrist.</span> Your <span className={styles.purpleText}>Data.</span> <span className={styles.purpleText}>Your </span> App. <span className={styles.purpleText}></span>
                    </>
                }
                description="Wearable technology is no longer a novelty, it is a primary data channel for healthcare, fitness, enterprise, and consumer brands. We build native and companion wearable apps for Apple Watch, Wear OS, Fitbit, and custom IoT devices that connect seamlessly with your iOS and Android ecosystem.."
                bgImage="/services/android-banner-bg.webp"
            />
            <ServiceSection 
                heading="Built for the Wrist, Designed  "
                purpleText="for Real-Time Use"
                description="Building for wearables requires a different discipline than building for phones. Every interaction must be faster, every screen more focused, and every data exchange more efficient. Here is how we approach every wearable development engagement."
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
