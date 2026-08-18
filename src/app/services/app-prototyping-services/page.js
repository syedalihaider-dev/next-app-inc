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
    title: "App Prototyping Services | Next App",
    description: "Next App offers expert app prototyping services and mobile app prototyping solutions to validate your concept before full development. Start with clarity.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our mobile app prototyping analysts help map your app concept into a clear prototype plan, identifying core screens, user journeys, and interaction patterns before design begins.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Our mobile app prototyping services begin with low-fidelity wireframes to outline user flow and screen structure, allowing quick, cost-effective changes before finalizing the architecture.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a high-fidelity interactive prototype in Figma or directly in your target framework. You get something that looks and behaves like the real app, so feedback is specific, not speculative.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our mobile app prototype developers build functional prototypes in the actual tech stack, making them the foundation of the real product with no throwaway work or translation loss.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'With our app prototyping services, we review prototypes for flow, interaction, and edge cases before presenting them. A confusing prototype isn’t useful feedback but a design problem to fix first.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We share prototypes via shareable links, TestFlight builds, or live staging environments, whichever gets the right feedback from the right people fastest.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const AppProtoTypingServices = () => {
    return (
        <main className="app-prototyping-page">
            <ServiceInnerBanner
                badge="App Proto Typing Services"
                title={
                    <>
                        Validate Your Idea <span className={styles.purpleText}> Before </span>  You  <span className={styles.purpleText}> Build It </span> <span className={styles.purpleText}>  </span><span className={styles.purpleText}></span>
                    </>
                }
                description="The best apps start with clarity. Our app prototyping services help you visualize, test, and refine your concept before a single line of production code is written, saving time, money, and missteps."
                bgImage="/services/app-prototyping-banner-bg.png"
            />
            <ServiceSection
                heading="Why Prototyping Is the  "
                purpleText=" Smartest Investment You Can Make"
                description="Skipping prototyping is the fastest way to build the wrong product. Our mobile app prototyping process bridges the gap between your idea and a working product, giving you a tangible, interactive model to test with real users, share with stakeholders, and align your team around before development begins. It’s the step that prevents costly revisions down the road."
                features={[
                    "Interactive Wireframes",
                    "User Flow Mapping",
                    "Clickable Prototypes",
                    "Stakeholder-Ready Demos"
                ]}
                mockupImage="/services/app-prototyping-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Teams Choose  "
                purpleText="Next App for Prototyping"
                description=""
                features={[
                    "Rapid turnaround on interactive demos",
                    "Direct access to US-based design experts",
                    "Built with developer handoff in mind",
                    "Support from prototype through production"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Concept"
                description="Every great product starts as an idea. Our prototyping process turns that idea into something you can see, touch, and test before committing to full development."
                cards={[
                    {
                        title: 'Discovery & Requirements',
                        description: 'We start by understanding your users, business goals, and key user flows, building a shared understanding before design begins.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Prototyping',
                        description: "Our designers create interactive prototypes that capture the look, feel, and flow of your future app. Mobile app prototyping services at Next App are built for real feedback, not just internal sign-off.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'User Testing & Iteration',
                        description: 'Validate your prototype with real users, collect structured feedback, and iterate rapidly to sharpen the experience before development begins.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Developer Handoff',
                        description: 'Deliver a polished prototype package, including annotated screens, interaction specs, and asset files, that gives your development team everything they need to build right from the start. We offer top solutions for mobile app prototyping that translate directly into production-ready work.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our App Prototyping <span className={styles.purpleText}> Approach Makes</span> <span className={styles.purpleText}> It </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Even at the prototype stage, we build with the end in mind. Every prototype is designed with privacy, accessibility, and platform compliance in mind to ensure a smooth transition into production."
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
                description="Whether you’re validating a first concept or pressure-testing an existing product, our prototyping team can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building and who it’s for."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default AppProtoTypingServices;
