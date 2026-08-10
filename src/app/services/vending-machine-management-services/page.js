import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
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
    title: "Vending Machine Management Software | NextApp",
    description: "NextApp builds custom vending machine management software with real-time inventory tracking, route optimization, and smart vending fleet control for operators.",
    robots: {
    index: false,
    follow: false,
  },
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We assess your fleet size, machine types, stocking workflows, reporting needs, and integration requirements. The output is a detailed plan for your custom vending machine management software with accurate timelines and cost estimates your team can plan around from day one.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "We wireframe every screen: the machine status dashboard, per-coil inventory views, low-stock and machine-fault alerts, route planner, pre-kitting pick lists, sales reports, cash reconciliation views, and admin controls. Everything is laid out and reviewed before development touches a single line of code.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'You get an interactive prototype of your smart vending machine software to click through before development begins. This is where you confirm the interface works the way your team expects, and where feedback is still fast and inexpensive to act on. Route drivers, warehouse staff, and managers all get a chance to validate their respective views before build starts.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers build your vending machine software programs using modern frameworks with real-time machine communication, a scalable backend, pre-kitting and route optimization logic, cashless payment integrations, and reporting pipelines that keep your team informed without adding manual work to their day.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test your vending machine inventory software against simulated fleet conditions, checking data accuracy, connectivity reliability, alerting logic, cash reconciliation, pick list generation, and reporting consistency. Low-stock scenarios, machine outages, driver collection discrepancies- every edge case your team could encounter in the field gets covered before go-live.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We roll out your vending machine tracking software across your fleet in a controlled sequence, provide training support for route drivers, warehouse staff, and managers, and monitor performance post-launch to catch and address anything that surfaces in real-world conditions.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const KioskSoftwareDevelopmentServices = () => {
    return (
        <main>
            <ServiceInnerBanner
                badge="Kiosk Software Development Company "     
                title={    
                    <>   
                        <span className={styles.purpleText}> Stop Running </span> Your Vending <span className={styles.purpleText}> </span>  Operation  <span className={styles.purpleText}>  </span>   <span className={styles.purpleText}> Blind</span>
                    </> 
                }
                description="NextApp builds custom vending machine management software with real-time inventory tracking, route optimization, and smart vending fleet control for operators."
                bgImage="/services/react-native-banner-bg.png"
            />
            <ServiceSection
                heading="Why Vending Machine Software"
                purpleText=" Needs to Be Built for the Job"
                description="Running a vending machine business is useless without the proper software backing it up. NextApp builds advanced vending machine software that connects all aspects of a vending machine into a singular place. That includes: live inventory data, machine health alerts, sales analytics, and more. "
                features={[
                    "Real-Time Machine Monitoring",
                    "Remote Inventory & Stock Control",
                    "Sales Data & Revenue Reporting",
                    "Route Optimization & Restocking Alerts"
                ]}
                mockupImage="/services/react-native-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Operators "
                purpleText="Choose NextApp"
                description="We build vending machine software programs that work the way your operation works, not a generic dashboard packed with features your team will never use, but a purpose-built tool your route drivers, warehouse staff, and managers will actually rely on every single day. Unlike off-the-shelf solutions, our software is engineered around your machine types, stocking patterns, and reporting requirements. We understand what operators actually need: to know what’s in every coil of every machine before the truck leaves the depot, to get alerted the moment a machine jams or goes offline, and to close the week knowing exactly where every dollar went."
                features={[

                    "Built around real vending operation workflows",
                    "Direct access to US-based project leads",
                    "Scalable from small fleets to enterprise networks",
                    "Works with mixed fleets and existing telemetry providers",
                    "Support beyond launch"
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
                        description: 'Our approach to vending machine inventory software begins by understanding your entire operation before we design a single screen. ',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'UX/UI Design',
                        description: "Once we have all core requirements understood, we design the dashboards and field interfaces that put the right information in front of the right person at the right time. ",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'We then proceed with building the vending machine inventory management software with live telemetry connections, cashless payment processor integrations, and more.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'It’s crucial that no hitches come forward after deployment, so the software is tested under conditions that reflect how your machines and your people actually behave in the field.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Vending <span className={styles.purpleText}> Machine Software Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Vending machine software handles payment data, cash reconciliation records, and sensitive operational data. Every solution we build includes encrypted data pipelines, PCI-compliant payment handling, role-based access controls for drivers, managers, and admins, and secure API integrations to protect your business and your customers at every point in the workflow."
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
                description="Whether you are managing a small local network or scaling a national fleet, our team can scope a custom vending machine management software solution in a 10-minute call. No boardroom pitch. Just a conversation about how your operation runs and what you need it to do better."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default KioskSoftwareDevelopmentServices;