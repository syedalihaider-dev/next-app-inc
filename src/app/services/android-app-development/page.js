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
    title: "Android App Development | Next App",
    description: "Next App delivers expert android app development alongside web development, e-commerce, game development, and custom software. Get a free consultation today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our business analysts sit down with you to turn your Android app idea into a concrete project scope. We map out features, allocate the right development resources, provide accurate timelines and cost estimates, and identify opportunities to optimize delivery without cutting corners.',
        image: '/process-steps/android-app/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "With the plan locked in, we move into wireframing, creating a detailed visual blueprint of your Android app's screens and user flows. This phase ensures every interaction is intuitive and that the interface is designed for real Android users before a single line of code is written.",
        image: '/process-steps/android-app/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Before committing to full development, we build a clickable Android prototype. You get to experience the actual flow, tap through the key journeys, and give feedback early, saving time, money, and misalignment down the line.',
        image: '/process-steps/android-app/step-03.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our Android engineers bring the approved design to life using Kotlin, Java, and the latest Android SDK best practices. We follow an agile process with sprint-based delivery, frequent builds for your review, and the flexibility to adapt as requirements evolve.',
        image: '/process-steps/android-app/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'Every build goes through rigorous QA — tested across a wide range of Android devices, screen sizes, and OS versions. We run functional, performance, and security audits to ensure your app launches without bugs and holds up under real-world usage.',
        image: '/process-steps/android-app/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We manage the entire Google Play Store submission process, from preparing your store listing and assets to passing review and going live. Once launched, we monitor performance and are on hand to address anything that needs attention post-release.',
        image: '/process-steps/android-app/step-06.webp'
    }
];

const AndroidAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Android App Development"
                title={
                    <>
                    Turn Your <span className={styles.purpleText}>Idea</span> Into an <span className={styles.purpleText}>Android</span> App That <span className={styles.purpleText}>Users</span> Can't Put <span className={styles.purpleText}>Down</span>
                    </>
                }
                description="From concept to the Play Store, we build Android apps that perform beautifully, scale effortlessly, and solve real problems for real people, across every device, every screen size."
                bgImage="/services/android-app-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="Why Android Development Is More "
                purpleText="Than Just Writing Code"
                description="A great Android app requires deep knowledge of the platform, an eye for UX, and the engineering discipline to build something that scales. At Next App, our Android developers have shipped dozens of apps across retail, healthcare, fintech, and logistics. "
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/android-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Android App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default AndroidAppDevelopmentPage;
