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
    title: "React Native App Development Company | Next App",
    description: "Next App is a top react native app development company. Hire react native app developers to build high-performance iOS and Android apps from one codebase.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'As a react native app development company, we map your product requirements against React Native’s capabilities, define the feature set, allocate resources, and set delivery milestones so both sides start aligned and stay that way.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Through mobile app development with react native, we sketch every screen and user path in wireframe form before writing code. This keeps design decisions fast, cheap, and free from the assumptions that cause costly revisions later.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Our react native app developers build a working prototype on the actual React Native stack so you can test interactions on a real device, validate the concept with stakeholders, and sign off before full development begins.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our react native app developers use the latest React Native, clean architecture, reusable hooks, and native modules for performance, resulting in a native-feeling app.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'With custom react native app development services, we test on real iOS and Android devices across multiple OS versions, checking for performance regressions, layout issues, and API integration stability before anything goes to production.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We prepare your builds for both App Store and Play Store via mobile app development with react native. We also handle submission requirements and stay with you through the review process until your app is live.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const ReactNativeAppDevelopmentServices = () => {
    return (
        <main className="react-native-page">
            <ServiceInnerBanner
                badge="React Native App Development Company"
                title={
                    <>
                        <span className={styles.purpleText}> React Native </span> Apps. <span className={styles.purpleText}>  </span> Native Performance. <span className={styles.purpleText}>  </span> Shared<span className={styles.purpleText}> Efficiency.</span>
                    </>
                }
                description="React Native is the technology of choice for teams that want real native performance without the overhead of two separate codebases. As a leading react native app development company, we build apps that feel truly native on both iOS and Android, faster, smarter, and more efficiently than most teams think possible."
                bgImage="/services/react-native-banner-bg.png"
            />
            <ServiceSection
                heading="Why React Native Is the  "
                purpleText="Right Choice for Your Product"
                description="React Native’s architecture bridges the gap between JavaScript speed and native performance, making it the preferred framework for startups and enterprises alike. Our custom react native app development services cover everything from initial architecture to App Store launch, giving your team a reliable technology foundation with a faster time-to-market than native development alone."
                features={[
                    "Native-Performance React Native Apps",
                    "Shared Codebase for iOS & Android",
                    "Custom Component Development",
                    "Third-Party API Integration"
                ]}
                mockupImage="/services/react-native-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Teams Choose     "
                purpleText="Next App for React Native"
                description="Our react native app development agency team brings deep JavaScript and native bridging expertise, so your app performs like it was built natively, even though it wasn’t."
                features={[

                    "Certified React Native engineers",
                    "Direct access to US-based experts",
                    "Flexible engagement: hire react native app developers or engage a full team",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="Whether you need to outsource react native app development services or build in-house with our support, we keep every stage focused, collaborative, and transparent."
                cards={[
                    {
                        title: 'Strategy & Architecture Planning',
                        description: 'We evaluate your product requirements and design a React Native architecture that balances shared code with platform-specific customization. Teams that hire react native app development agency experts from Next App get a scalable foundation built for long-term growth.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "Design platform-consistent interfaces that feel at home on both iOS and Android while maintaining a unified brand identity.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Build your app using mobile app development with react native best practices, integrating native modules, APIs, and backend systems as required.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Test on real devices across both platforms, prepare for dual store submission, and support your product through post-launch updates.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our React Native  <span className={styles.purpleText}>Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Every React Native app we build includes encrypted data handling, platform-specific permission management, GDPR-compliant controls, and secure API integration, protecting your users on both platforms."
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
                description="Whether you’re launching a first React Native app or migrating from a native codebase, our team can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default ReactNativeAppDevelopmentServices;