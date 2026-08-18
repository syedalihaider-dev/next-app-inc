import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import '@/styles/service-page-overrides.css';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/common/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/common/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import AboutFAQ from "@/components/about/AboutFAQ";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Cross Platform App Development Services | Next App",
    description: "Next App offers expert cross-platform app development services for iOS and Android. Ship faster with a single codebase without sacrificing performance.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our cross-platform app development services begin by assessing whether Flutter or React Native is the right fit for your product, audience, and business goals. Our analysts define the project scope, create a shared feature roadmap for both platforms, and produce cost and timeline estimates that reflect the true efficiency of cross-platform development.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Using cross-platform app development frameworks, we then design a unified wireframe that works beautifully across iOS and Android, accounting for platform-specific conventions while maintaining a consistent experience. This shared visual blueprint speeds up the design process and ensures both platforms feel intentional, not compromised.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'With cross-platform app development services, you get an interactive prototype that works on both iOS and Android simultaneously, letting you experience the cross-platform result firsthand. Feedback gathered here shapes the final product before development begins, reducing costly revisions and keeping the project on track.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our cross-platform mobile app development service engineers build your app using Flutter or React Native, writing shared business logic while handling platform-specific nuances where needed. Agile sprints keep you involved throughout, with regular builds delivered to both iOS and Android for testing and review at every stage.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'Cross-platform doesn’t mean half-tested. As a trusted cross-platform app development company, we run full QA cycles on both iOS and Android, checking for platform-specific rendering issues, performance parity, and native integration accuracy. Every device type, screen size, and OS version is covered before we call it done.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We manage simultaneous submission to both the App Store and Google Play, coordinating review cycles, preparing store assets for both platforms, and ensuring a synchronized launch. Your app goes live on iOS and Android at the same time, with no delays and no shortcuts.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const CrossPlatformAppDevelopmentServices = () => {
    return (
        <main className="cross-platform-page">
            <ServiceInnerBanner
                badge="Cross Platform App Development Company"
                title={
                    <>
                        <span className={styles.purpleText}> One  </span> Codebase. <span className={styles.purpleText}> Every </span> Platform. Zero <span className={styles.purpleText}> Compromise.  </span><span className={styles.purpleText}></span>
                    </>
                }
                description="Why build twice when you can build once? Our cross-platform app development services let you ship a high-performance app on both iOS and Android, from a single, well-maintained codebase, without sacrificing the quality your users expect."
                bgImage="/services/cross-platform-banner-bg.png"
            />
            <ServiceSection
                heading="Why Cross-Platform Is the Right  "
                purpleText="Strategy for Many Businesses"
                description="For many businesses, the smartest path to market is cross-platform. As a leading cross-platform app development company, we build with Flutter and React Native, the two most mature and widely adopted cross-platform app development frameworks available today. The result is a native-feeling experience on both platforms at a fraction of the time and cost of building two separate apps."
                features={[
                    "Flutter & React Native Development",
                    "Shared Business Logic",
                    "Platform-Consistent UI/UX",
                    "Unified QA & Testing"
                ]}
                mockupImage="/services/cross-platform-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Teams Choose   "
                purpleText="Next App for Cross-Platform"
                description="Our cross-platform mobile app development service combines the speed of a shared codebase with the polish of a native app, giving your users an experience they can’t tell apart from a platform-specific build."
                features={[

                    "Deep expertise in Flutter and React Native",
                    "Direct access to US-based engineers",
                    "Full Android and iOS cross-platform app development capability",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="Every blockchain mobile app development project has unique requirements. We keep every stage focused, collaborative, and transparent, from whitepaper review to mainnet deployment."
                cards={[
                    {
                        title: 'Strategy & Architecture Planning',
                        description: 'We evaluate your product requirements, choose the right framework, and design a shared architecture that maximizes code reuse without sacrificing performance.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "Design a consistent visual experience that feels at home on both iOS and Android, respecting each platform’s conventions while maintaining a unified brand identity.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Build your app using battle-tested cross-platform technologies, integrating native device capabilities, APIs, and backend systems as needed.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Test on real devices across both platforms, prepare for dual store submission, and provide our cross-platform solutions for mobile app development support team for post-launch updates and iterations.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Cross-Platform App  <span className={styles.purpleText}>Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Our cross-platform app development services include encrypted data handling, platform-specific permission management, GDPR-compliant controls, and secure API integration to protect your users on both iOS and Android."
                desc2=""
            />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment
                badge="Book An Appointment"
                heading={
                    <>
                        Your Next Big Idea  <span className={appointmentStyles.highlight}> Starts Here.</span> <br /> <span className={appointmentStyles.highlight}> </span>
                    </>
                }
                description="Whether you’re launching a first cross-platform product or migrating from separate native codebases, our team can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building and who it’s for."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default CrossPlatformAppDevelopmentServices;