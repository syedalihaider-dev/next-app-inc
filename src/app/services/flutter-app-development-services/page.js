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
    title: "Flutter App Development Company | Next App",
    description: "Next App is a top Flutter app development company in the USA offering expert Flutter app development services for iOS, Android, and web. Get a free quote today.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'As a Flutter app development service, we assess whether Flutter is the right fit for your product, define the feature roadmap, set platform targets, and plan the Dart architecture before a single widget is built.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Every screen, component, and navigation pattern is wireframed and approved before development begins. Flutter’s widget model makes design decisions binding early, speeding up the process.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Our Flutter app developer quickly spins up a prototype using hot reload, so you can see and feel the real app on a device. Stakeholders get to interact before the full build, which makes feedback faster and cheaper.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our Flutter app developers write clean Dart code with well-structured state management, custom widgets, and seamless API integrations. The output is a single codebase that performs natively on every platform.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'As a Flutter mobile app development service, we test on real iOS and Android devices, checking rendering consistency, performance under load, and integration stability. Flutter’s single codebase means fixes apply everywhere at once.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We package your Flutter app for App Store and Play Store, handle signing and compliance, and walk you through the submission process until your app is live on every targeted platform.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const CrossPlatformAppDevelopmentServices = () => {
    return (
        <main className="flutter-app-page">
            <ServiceInnerBanner
                badge="Flutter App Development Company"
                title={
                    <>
                        <span className={styles.purpleText}> Flutter Apps  </span> That Look Native. <span className={styles.purpleText}> Feel Native. </span> Perform Native. <span className={styles.purpleText}>  </span><span className={styles.purpleText}></span>
                    </>
                }
                description="Flutter is the future of cross-platform development, and we’re fluent in it. Our Flutter app development services deliver pixel-perfect, high-performance applications on iOS, Android, web, and desktop from a single codebase."
                bgImage="/services/flutter-banner-bg.png"
            />
            <ServiceSection
                heading="Why Flutter Is the Smart  "
                purpleText="Choice for Modern App Development"
                description="Flutter gives businesses the best of both worlds: the speed of cross-platform development with the performance and visual quality of a native app. As a leading Flutter app development company, we build Flutter applications that are fast to ship, easy to maintain, and delightful to use. Whether you’re a startup or an enterprise, our Flutter mobile app development services cover every stage from concept to launch."
                features={[
                    "Cross-Platform Flutter Development",
                    "Custom Widget Development",
                    "High-Performance Animations",
                    "Flutter Web & Desktop Support"
                ]}
                mockupImage="/services/flutter-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Teams Choose    "
                purpleText="Next App for Flutter"
                description="Our Flutter app development agency team combines deep Dart expertise with strong UX principles to build apps that stand out in any app store."
                features={[

                    "Certified Flutter engineers",
                    "Direct access to US-based experts",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="Every Flutter project has different goals, but successful launches follow the same disciplined process. We keep every stage focused, collaborative, and transparent."
                cards={[
                    {
                        title: 'Strategy & Architecture Planning',
                        description: 'We evaluate your product requirements and design a Flutter architecture that maximizes performance and maintainability.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "Design custom Flutter widgets and interfaces that deliver a premium user experience across all target platforms.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Build your app using Flutter’s robust framework, integrating APIs, native device features, and backend systems. Want to hire Flutter app developers with proven experience? Our team is ready.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Test on real devices, prepare for store submission, and support your product through updates and iterations. If you need to hire Flutter app developer specialists for a specific phase, we offer flexible engagement models.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Flutter App  <span className={styles.purpleText}>Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Every Flutter app we build includes encrypted data handling, platform-specific permission management, GDPR-compliant controls, and secure API integration, protecting your users on every platform."
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
                description="Whether you’re launching a first Flutter app or migrating an existing product, our team can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default CrossPlatformAppDevelopmentServices;