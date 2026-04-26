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
    title: "Mobile Game Development | Next App Inc",
    description: "Create engaging and high-performance mobile games. Next App Inc offers full-cycle mobile game development for iOS and Android.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Game Concept',
        title: 'Game Concept',
        description: 'Developing the game mechanics, story, and characters that will engage your players and keep them coming back.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Game Design',
        title: 'Game Design',
        description: 'Creating the level designs, UI elements, and overall aesthetic of the game.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Playable Demo',
        title: 'Playable Demo',
        description: 'Building a prototype to test the core gameplay loop and gather feedback on the fun factor.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'Full Development',
        title: 'Full Development',
        description: 'Coding the game using industry-standard engines like Unity or Unreal, integrating assets and sound.',
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Beta Testing',
        title: 'Beta Testing',
        description: 'Extensive testing for bugs, performance issues, and balancing the difficulty levels.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Global Launch',
        title: 'Global Launch',
        description: 'Launching your game on the App Store and Google Play, managing updates and monetization features.',
        image: '/process-steps/step-06.webp'
    }
];

const MobileGameDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Mobile Game Development"
                title={
                    <>
                        Engaging <span className={styles.purpleText}>Mobile Game</span> <br className="d-none d-md-block" />
                        <span className={styles.greenText}>Development.</span>
                    </>
                }
                underlineImage="/green-vector.webp"
                description="Bring your game ideas to life with our expert mobile game development services, creating immersive and addictive gaming experiences."
                bgImage="/services/mobile-game-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="Gaming Excellence"
                purpleText="Built for Engagement"
                description="Our game development team combines creativity with technical expertise to build stunning 2D and 3D games that captivate audiences across the globe."
                features={[
                    "2D/3D Game Development",
                    "Unity & Unreal Engine Experts",
                    "Monetization Strategy",
                    "Cross-Platform Gameplay"
                ]}
                mockupImage="/services/ios-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading="Our Mobile Game Development Approach"
                purpleText="Makes It Fun & Efficient"
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

export default MobileGameDevelopmentPage;
