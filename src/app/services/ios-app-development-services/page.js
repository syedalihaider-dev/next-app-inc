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
    title: "iOS App Development Company USA | Next App",
    description: "Next App is a trusted iOS app development company in the USA offering custom iOS app development services for startups and enterprises. Get a free consultation.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our business analysts collaborate with you to define the full scope of your iOS app, translating your vision into a structured plan with clear milestones, resource allocation, realistic timelines, and a cost estimate that accounts for both quality and efficiency. Partnering with a dedicated custom iOS app development company means you never have to guess what comes next.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "As an iOS app development service, we create detailed wireframes that map every screen, gesture, and interaction of your iOS app. This visual skeleton ensures the user experience is logical and elegant before we invest in high-fidelity design or development, keeping revisions fast and low-cost.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'You get a fully interactive iOS prototype to tap through before development begins. This hands-on preview lets you validate the user journey, refine navigation, and sign off on the experience, so what gets built matches exactly what you envisioned.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our iOS app development service engineers build your app using Swift and SwiftUI with Apple’s latest frameworks. We follow an agile sprint model, delivering working builds regularly so you can track progress, test features, and provide feedback throughout the development cycle.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We put your iOS app through exhaustive testing across every supported iPhone and iPad model with our iOS app testing service, iOS version, and use case. Our QA team checks for crashes, performance bottlenecks, security vulnerabilities, and App Store compliance before a single build is submitted.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'From TestFlight beta distribution to final App Store submission, we handle every step of the iOS launch process. We prepare your metadata, screenshots, and compliance documentation, ensuring a smooth review and a successful, high-visibility launch day.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const iosAppDevelopmentServices = () => {
    return (
        <main className="ios-app-page">

            {/* Product Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "iOS App Development Services",
                        "description": "Next App Inc. develops secure, high-performance iOS apps with intuitive interfaces for seamless iPhone and iPad experiences.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Next App Inc."
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "ratingCount": "1624"
                        }
                    })
                }}
            />

            <ServiceInnerBanner
                badge="Custom iOS App Development"
                title={
                    <>
                        <span className={styles.purpleText}> Apps Built  </span> for Apple. Designed for <span className={styles.purpleText}>  </span>  <span className={styles.purpleText}> Humans. Engineered </span> to Win.<span className={styles.purpleText}></span>
                    </>
                }
                description="We craft iOS app development services that feel at home on every Apple device, from the first tap to the hundredth session. Your users deserve a premium experience, and that’s exactly what we deliver."
                bgImage="/services/ios-banner-bg.png"
            />

            <ServiceSection
                heading="What Sets an Exceptional   "
                purpleText="iOS App Apart From the Rest"
                description="iOS users have high standards, and so do we. As a leading iOS app development company in the USA, our Apple-certified developers build apps that respect Apple’s Human Interface Guidelines while pushing the boundaries of what’s possible on iOS. Whether it’s a consumer app on the App Store or an enterprise tool for your team, we design every interaction with purpose. Our custom iOS app development services cover everything from ideation to App Store launch."
                features={[
                    "Bespoke UI/UX Design",
                    "Advanced Swift Development",
                    "Exclusive Apple Features Integration",
                    "Scalable Enterprise Solutions"
                ]}
                mockupImage="/services/ios-hand-mockup.png"
            />

            <AwardsSection />

            <ServicesListSection />

            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Leaders    "
                purpleText="Choose Next App"
                description="As a trusted iOS mobile app development company, we combine deep Apple platform expertise with a design-first philosophy that puts users at the center of every decision."
                features={[
                    "Apple-certified development team",
                    "Direct access to US-based experts",
                    "Built with compliance and App Store guidelines in mind",
                    "Ongoing support beyond launch"
                ]}
            />

            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="Every product has different goals, but successful launches follow the same disciplined process. As a full-service iOS mobile app development services provider, we keep every stage focused, collaborative, and transparent, from validating your idea to deployment and long-term support."
                cards={[
                    {
                        title: 'Strategy & Architecture Planning',
                        description: 'We start by understanding your users, business goals, and technical requirements, turning ideas into a clear product roadmap before development begins.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "Design interfaces built for the wrist, where every interaction is intuitive, glanceable, and optimized for real-world use.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Develop native iOS apps, companion experiences, and backend systems that work together seamlessly across Apple devices.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Validate performance with rigorous iOS app testing service protocols, prepare for App Store submission, and continue supporting your product as Apple platforms evolve.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />

            <ProcessTabs
                heading={
                    <>
                        Our Custom iOS  <span className={styles.purpleText}>Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span>
                    </>
                }
                tabs={tabs}
            />

            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="iOS apps handle sensitive data, from payment credentials to personal health records. Every solution we build includes encrypted data storage, GDPR-compliant privacy controls, role-based access management, and strict adherence to Apple’s app review guidelines to help protect users at every touchpoint."
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
                description="Whether you’re launching a first iOS product or modernizing one that’s already live, our iOS app developers can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building and who it’s for."
            />

            <Testimonials />

            <AboutFAQ />

            <ContactSection />

        </main>
    );
};

export default iosAppDevelopmentServices;