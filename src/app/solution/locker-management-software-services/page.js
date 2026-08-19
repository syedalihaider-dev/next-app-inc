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
    title: "Locker Management Software | NextApp",
    description: "NextApp builds smart locker management software for workplaces, campuses, and enterprises. Secure access control, real-time monitoring, and full fleet visibility.",


};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We map your facility configuration, hardware specifications, access control requirements, and reporting needs. The result is a clear development plan for your locker management software with honest timelines and cost estimates that reflect the actual scope of your deployment.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "We wireframe every administrator screen and user-facing interface: locker assignment flows, access logs, device status dashboards, occupancy heat maps, audit reports, and multi-site views. Every flow is reviewed and signed off before development begins.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'You get an interactive prototype of your workspace locker management software to navigate before development begins. This is where you confirm the system works the way your team expects, and where changes still cost almost nothing to make.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers build your smart locker with device management software on modern frameworks with hardware integration, authentication protocols (PIN, RFID, QR, mobile app), real-time status monitoring, automated notifications, full audit logging, and a scalable backend designed to support multi-location deployments from day one. The platform operates in both online and offline modes so a connectivity interruption never locks out a user.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test your locker management software against real access scenarios: authentication accuracy across all credential types, hardware communication, occupancy status logic, alert triggers, offline mode reliability, multi-site data synchronization, and edge cases your users will run into in practice. Nothing goes to deployment until it clears every test.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We manage the rollout of your smart locker management software across your facility, provide administrator training, configure remote monitoring and alert thresholds, and monitor performance after launch. Access control software needs to work the first time and every time after that.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const LockerManagementServices = () => {
    return (
        <main className="locker-management-page">
            <ServiceInnerBanner
                badge="Locker Management Software Company "
                title={
                    <>
                        <span className={styles.purpleText}> Locker Software </span> That Works as <span className={styles.purpleText}> </span>  That Gives Facility  <span className={styles.purpleText}>  </span>  Managers <span className={styles.purpleText}> Real Control</span>
                    </>
                }
                description="NextApp builds smart locker management software for workplaces, campuses, and enterprises. Secure access control, real-time monitoring, and full fleet visibility."
                bgImage="/services/locker-banner.png"
            />
            <ServiceSection
                heading="Why Locker Management Software "
                purpleText="Needs to Be Smarter Than a Lock"
                description="Lockers shouldn’t be an issue in shared workspaces. NextApp builds smart locker management software that integrates with your access control systems, handles user authentication via PIN, RFID, QR, or mobile app, manages device check-in and check-out workflows, and gives administrators full visibility from a single centralized dashboard."
                features={[
                    "Access Control & User Authentication (PIN, RFID, QR, mobile app)",
                    "Device Check-In  Check-Out Workflows",
                    "Real-Time Occupancy & Status Monitoring",
                    "Full Audit Trail & Access Logging"
                ]}
                mockupImage="/services/locker-sec-1.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Facility Managers "
                purpleText="Choose NextApp"
                description="We build workspace locker management software that works the way your facility operates. Not a generic tool you have to bend to fit your processes, but software designed around your access control requirements, your devices, and the people who use them every day. Smart locker systems eliminate the cost and friction of physical key management, staff-assisted assignments, and manual audit trails. Our software enables no-downtime operation, running seamlessly in both online and offline modes, real-time battery and lock status monitoring from any authorized device, and remote locker management without requiring anyone to be on-site."
                features={[

                    "Deep experience in hardware and access control integration",
                    "Works across new installations and existing locker hardware",
                    "No PINs to remember, no mechanical keys to manage",
                    "Direct access to US-based engineers",
                    "Built for enterprise-grade security and compliance"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Product"
                description="Every facility has a different configuration, a different set of users, and a different set of compliance requirements. Our locker management software development process adapts to all of it while keeping every stage disciplined, transparent, and on schedule."
                cards={[
                    {
                        title: 'Strategy & Product Discovery',
                        description: 'We start by understanding your facility layout, locker types, access requirements, device workflows, user authentication setup, and integration dependencies.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "Whether your team is running one site or twenty, the interface needs to work without extensive training. We make it happen with exceptional UI/UX design.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Build your locker management software with the integrations that matter: RFID and QR authentication, PIN management, real-time occupancy monitoring, and more.    ',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Before deployment, our smart locker management software is tested to the level of precision your environment demands, because failure is non-negotiable.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Locker <span className={styles.purpleText}> Management Software Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Locker management software controls access to physical assets, sensitive devices, and secured spaces. Every solution we build includes role-based access controls, encrypted authentication at every credential type, full audit logging with user identity and timestamps, GDPR-compliant data handling, and compliance-aware architecture aligned with enterprise security standards, protecting your facility, your assets, and the people who use them every day."
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
                description="Whether you are deploying locker software across a single facility or managing access across multiple enterprise sites, our team can scope a solution in a 10-minute call. No boardroom pitch. Just a conversation about your facility and what your locker management software needs to do."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default LockerManagementServices;