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
    title: "Kiosk Software Development Company | NextApp",
    description: "NextApp delivers custom kiosk software development for self-service, digital, and payment kiosks. Secure, scalable software built for 24/7 public environments.",



};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We assess your environment, hardware specifications, user flows, and integration requirements. Our custom software development for kiosks process starts with a detailed plan that covers the full deployment lifecycle, not just the build phase. You get accurate timelines, clear scope, and cost estimates that reflect what a real deployment actually involves, hardware selection guidance, PoC validation, and integration architecture included.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "We map every screen and interaction path your customers will encounter. Touchscreen UX has its own rules, tap targets, session timeouts, error states, idle screens, and we apply them from the start. Wireframes are approved before development begins so design changes stay fast and inexpensive to make.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'You get an interactive prototype of your software for self-service kiosks to test on an actual touchscreen device before development begins. This is where you confirm the experience works the way you intended, and where feedback costs almost nothing to act on. We validate with real users in your environment whenever possible.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers build your software for kiosks on proven frameworks suited to kiosk environments- React, Electron, Angular, or native OS implementations- integrating payment processors, content management systems, remote monitoring tools, and any other systems your operation relies on into a single stable platform. Security controls are applied at every layer: the application, the device controller, and the management backend.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test your software for digital kiosks under simulated deployment conditions: transaction accuracy, offline resilience, touchscreen responsiveness, hardware compatibility, security hardening, and accessibility compliance. Load tests simulate peak traffic. Every scenario gets covered before a unit goes live.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We support your fleet rollout, manage system integrations, and stay engaged after launch. Real-world deployments always surface something unexpected: a printer firmware edge case, a payment processor timeout, a connectivity gap in a specific location. We are already there when they do. If you are still evaluating the cost of CMS software for digital kiosks as part of your planning, our team can walk you through what a realistic build actually looks like for your specific deployment.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const KioskSoftwareDevelopmentServices = () => {
    return (
        <main className="kiosk-software-page">
            <ServiceInnerBanner
                badge="Kiosk Software Development Company "
                title={
                    <>
                        <span className={styles.purpleText}> Kiosk Software </span> That Works as <span className={styles.purpleText}> </span>  Hard as the  <span className={styles.purpleText}>  </span> Environment It <span className={styles.purpleText}> Runs In</span>
                    </>
                }
                description="NextApp delivers custom kiosk software development for self-service, digital, and payment kiosks. Secure, scalable software built for 24/7 public environments."
                bgImage="/services/kiosk-banner.png"
            />
            <ServiceSection
                heading="Why Kiosk Software Development   "
                purpleText="Has to Be Purpose-Built"
                description="A kiosk is only as good as the software driving it. NextApp provides kiosk software development practices to develop specialized software to perform under real-world conditions. Whether you need software for self-service kiosks in a retail environment or a check-in station for a hospital waiting room, we engineer solutions."
                features={[
                    "Payment & Transaction Processing",
                    "Remote Device & Content Management",
                    "Multi-Language & Accessibility Support",
                    "Real-Time Fleet Monitoring & Reporting"
                ]}
                mockupImage="/services/kiosk-sec-1.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Businesses Choose NextApp "
                purpleText="for Kiosk Software"
                description="Our team brings real depth in custom software development for kiosks, from payment processing and offline resilience to kiosk lockdown security, CMS-driven content management, and remote diagnostics. We build kiosk software that operators can manage centrally from a dashboard, and customers can use without needing any guidance. Our approach covers the full kiosk stack: the customer-facing touchscreen application, the device-control middleware that keeps sessions stable and secure, and the backend management platform your operations team uses to monitor, update, and report across your entire fleet."
                features={[

                    "Proven experience across retail, healthcare, hospitality, and transit",
                    "Direct access to US-based engineers",
                    "Kiosk lockdown and security hardening built in from day one",
                    "ADA and WCAG accessibility compliance",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="No two kiosk deployments are the same. Whether you are piloting a single unit or rolling out to hundreds of locations, we keep every stage of our kiosk software development process disciplined, transparent, and focused on what your customers and your team actually need."
                cards={[
                    {
                        title: 'Strategy & Product Discovery',
                        description: 'Before developing your software for kiosks, we get a read on your kiosk environment: the hardware specification, the use case, the user profile, location, and integrations you need.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "We then work on the interface and understand how the machine communicates in the real environment. We make sure accessibility is built into the design.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'We then build the software around the integrations your operation depends on: payment processors (EMV, NFC, QR), inventory systems, content management platforms, and more.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'To prevent tampering, we validate performance under real-world conditions before deployment: transaction accuracy, offline resilience, touchscreen responsiveness, and more.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Kiosk   <span className={styles.purpleText}> Software Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Kiosk software handles payment credentials, personal data, and business-sensitive transactions in public environments. Every solution we build includes PCI DSS-compliant payment handling, encrypted data pipelines, kiosk lockdown mode, role-based access controls, remote monitoring, and ADA-compliant interface design, protecting your customers, your brand, and your business at every touchpoint."
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
                description="Whether you are running a single kiosk pilot or planning a multi-location deployment, our team can scope a solution in a 10-minute call. No boardroom pitch, just a conversation about your environment, your customers, and what your kiosk software development project needs to succeed."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default KioskSoftwareDevelopmentServices;