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
    title: "Web Application Development Company | Next App",
    description: "Next App is a custom web application development company in the USA offering fast, scalable web app development solutions for startups and growing businesses.",
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Web Application Development Services",
    "description": "Next App Inc. builds secure, responsive, and scalable web applications that streamline operations and improve digital experiences.",
    "brand": {
        "@type": "Brand",
        "name": "Next App Inc."
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1783"
    }
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We evaluate your business case, define the full project scope, core features, offline capabilities, integration requirements, and hosting strategy. As your dedicated web application development services partner, you receive a clear plan with accurate cost estimates and a realistic launch timeline from day one.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Mobile web apps demand a different design discipline; every screen must work perfectly in a browser while feeling like a native app. As a mobile game development company, our wireframing phase maps out every user flow with this in mind, producing a visual guide that balances mobile UX best practices with your brand’s identity.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a working prototype of your PWA that you can open in any mobile browser and interact with directly. This gives you a true preview of load speed, offline behavior, and overall feel, allowing for real feedback before full development investment is made.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our game app development engineers build your PWA using modern frameworks like React, Vue, or Next.js with full-service worker implementation, web app manifests, and API integration. Agile delivery means you receive working builds throughout, testable in any browser, on any device, at every sprint.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test your mobile web app across every major browser, device type, and network condition, including offline and slow-connection scenarios. Performance audits using Lighthouse ensure your PWA meets the highest standards for speed, accessibility, and SEO before going live.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'There’s no App Store review for a PWA, which means faster deployment and simpler updates. We handle server configuration, CDN setup, HTTPS certification, and go-live monitoring, ensuring your mobile web app launches cleanly and performs reliably from the moment users arrive.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const WebApplicationDevelopmentServices = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema)
                }}
            />

            <main className="web-app-page">
                <ServiceInnerBanner
                    badge="WEB APPLICATION DEVELOPMENT SERVICES"
                    title={
                        <>
                            <span className={styles.purpleText}> Your Website </span> Shouldn’t Feel <span className={styles.purpleText}> </span>  Like a Website.  <span className={styles.purpleText}>  </span> It Should <span className={styles.purpleText}> Feel Like an App.</span>
                        </>
                    }
                    description="Progressive web apps blur the line between browser and native experience. As a leading web application development company, we build mobile web apps that load instantly, work offline, and behave like the real thing, no App Store required."
                    bgImage="/services/react-native-banner-bg.png"
                />
                <ServiceSection
                    heading="Why Progressive Web Apps  "
                    purpleText="Are the Smart Choice for Growing Businesses"
                    description="Not every product needs to be in the App Store. Our custom web application development services give your users an app-like experience directly from their browser, with offline access, push notifications, and home screen installation. They’re faster to build, easier to update, and more accessible than native apps. As a trusted web app development company in the USA, we design every solution for performance, usability, and scale."
                    features={[
                        "Progressive Web Apps (PWA)",
                        "Responsive Web Design",
                        "High-Speed Performance",
                        "SEO Optimized Solutions"
                    ]}
                    mockupImage="/services/react-native-hand-mockup.png"
                />
                <AwardsSection />
                <ServicesListSection />
                <DevelopmentSolutionsSection
                    badge="Built Differently. Delivered Better."
                    headingText="Why Leaders Choose      "
                    purpleText="Choose Next App"
                    description="Our experienced web application developers bring deep expertise across frameworks, hosting environments, and performance optimization, ensuring every product we build is production-ready from day one."
                    features={[

                        "Progressive-first architecture",
                        "Direct access to US-based experts",
                        "Built with security and compliance in mind",
                        "Support beyond launch"
                    ]}
                />
                <CompanyChoiceSection
                    headingText="A Process "
                    purpleText="Built Around"
                    headingText2=" Your "
                    purpleText2="Product"
                    description="Every product has different goals, but successful launches follow the same disciplined process. As a full-service custom web application development company, we keep every stage focused, collaborative, and transparent."
                    cards={[
                        {
                            title: 'Strategy & Product Discovery',
                            description: 'We start by understanding your users, business goals, and technical requirements, turning ideas into a clear product roadmap before development begins.',
                            icon: '/services/icon-discovery-and-strategy.webp'
                        },
                        {
                            title: 'UX/UI Design',
                            description: "Our best web app developers design interfaces that are fast, intuitive, and optimized for mobile-first interactions.",
                            icon: '/services/icon-ux-ui-design.webp'
                        },
                        {
                            title: 'Engineering & Integration',
                            description: 'Build performant progressive web apps with backend systems and APIs that work together seamlessly across browsers and devices.',
                            icon: '/services/icon-development.webp'
                        },
                        {
                            title: 'Testing, Launch & Growth',
                            description: 'Validate performance, prepare for deployment, and continue supporting your product as web standards evolve.',
                            icon: '/services/icon-launch-and-deployment.webp'
                        }
                    ]}
                />
                <ProcessTabs
                    heading={<>Our Mobile  <span className={styles.purpleText}>  Web App Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                    tabs={tabs}
                />
                <WhyChooseAppSection
                    title={
                        <>
                            Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                        </>
                    }
                    desc1="Whether you’re building an e-commerce PWA or an enterprise dashboard, our web application development company in the USA ensures every solution includes encrypted connections, GDPR-compliant privacy controls, role-based access, and secure API management to protect your users at every touchpoint."
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
                    description="Whether you’re launching a first web product or scaling one that’s already live, our team at this custom web application development services company in the USA can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building and who it’s for."
                />
                <Testimonials />
                <AboutFAQ />
                <ContactSection />
            </main>
        </>
    );
};

export default WebApplicationDevelopmentServices;