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
    title: "Android App Development Company | Next App",
    description: "Partner with a leading Android app development agency in the USA. We offer custom Android app development services built to scale, perform, and deliver results.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our analysts help turn your Android app idea into a clear project scope, outlining features, resources, timelines, costs, and optimization opportunities, without sacrificing quality. Every engagement with our custom Android app development company begins with a plan built around your business.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Before coding, our Android app development agency sketches all screens and user journeys. Wireframes outline structure, navigation, and interactions for review and refinement before development.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We create a working prototype that lets stakeholders interact with the app before it is built. Then our Android app testing service demos it, collects feedback, and locks in decisions early so the development phase moves without detours.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our Android engineers from our custom Android app development service develop in Kotlin and Java with clean architecture. Each feature is optimized for performance across all Android devices, from budget to flagship models.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test on hundreds of device profiles, screen sizes, and Android versions. Our QA checks for crashes, performance issues, accessibility problems, and Play Store compliance before shipping.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'From Play Store listing setup to staged rollout and post-launch monitoring, our Android app development service manages every step of the release so your launch lands exactly as planned.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const TwoDGameDevelopmentPage = () => {
    return (
        <main className="android-app-page">
            <ServiceInnerBanner
                badge="Android App Development Services"
                title={
                    <>
                        Turn Your Idea <span className={styles.purpleText}> Into an Android </span>  App That Users <span className={styles.purpleText}> Can’t Put</span> <span className={styles.purpleText}> Down </span><span className={styles.purpleText}></span>
                    </>
                }
                description="From concept to the Play Store, we build Android apps that perform beautifully, scale effortlessly, and solve real problems for real people, across every device, every screen size. As a trusted Android app development agency, we bring the expertise your project deserves."
                bgImage="/services/android-banner-bg.png"
            />
            <ServiceSection
                heading="Why Android Development  Is  "
                purpleText=" More Than Just Writing Code"
                description="A great Android app requires deep knowledge of the platform, an eye for UX, and the engineering discipline to build something that scales. At Next App, our expert team operates as a top-ranked Android app development company, having shipped dozens of apps across retail, healthcare, fintech, and logistics, each one built for the full range of Android devices and user expectations. Whether you’re a startup or an enterprise, our custom Android app development services are engineered to match your vision exactly."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/android-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Businesses "
                purpleText="Choose Next App"
                description=""
                features={[
                    "Certified Android developers with platform-deep expertise",
                    "Direct access to US-based project leads",
                    "Built with security and compliance in mind",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="Every project has different goals, but successful launches follow the same disciplined process. From validating your idea to deployment and long-term support, we keep every stage focused, collaborative, and transparent. As a dedicated Android app development service company, we treat your roadmap with the same care we’d give our own."
                cards={[
                    {
                        title: 'Strategy & Concept Discovery',
                        description: 'We start by understanding your users, business goals, and technical requirements, turning ideas into a clear product roadmap before development begins.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "Design interfaces that are intuitive, visually consistent, and optimized for the diversity of Android screen sizes and OS versions.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Develop native Android apps with backend systems and third-party integrations that work together seamlessly across devices.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Validate performance with rigorous Android app testing service, prepare for Play Store submission, and continue supporting your product as the Android ecosystem evolves.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Android App Development <span className={styles.purpleText}> Approach Makes</span> <span className={styles.purpleText}> It </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Android apps often handle sensitive user data. Every solution we build includes encrypted data storage, GDPR-compliant privacy controls, role-based access management, and secure API connections to help protect users at every touchpoint."
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
                description="Whether you’re launching a first mobile product or scaling one that’s already live, our team at this Android app development agency can scope your project in a 10-minute call. No boardroom pitch, just a conversation about what you’re building and who it’s for."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default TwoDGameDevelopmentPage;
