import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/services/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/services/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Custom iOS App Development | Next App Inc",
    description: "Get a tailored iOS application designed for your unique business needs. Next App Inc provides end-to-end custom iOS development services.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'In Project Planning, Our Business Analysts Work With Clients To Turn Their App Ideas And Business Needs Into A Clear Project Scope. We Allocate The Right Resources, Provide Accurate Cost And Time Estimates, And Explore Cost Optimization Options For Efficient Execution.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: 'Once the planning is complete, we move to wireframing. This phase involves creating a visual guide that represents the skeletal framework of your app, ensuring a seamless user experience and intuitive interface design.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Before full-scale development, we build an interactive prototype. This allows you to experience the flow and functionality of your app firsthand, giving you the opportunity to provide feedback and refine the user journey early on.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our expert developers bring your app to life using the latest coding standards and frameworks. We follow an agile development process, ensuring frequent updates and the flexibility to adapt to changing requirements.',
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We conduct rigorous testing to ensure your app is bug-free, secure, and performs flawlessly across all devices and platforms. Our QA team runs multiple performance and security audits to guarantee excellence.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'Finally, we handle the launch of your app on the App Store or Google Play. We manage the entire submission process, ensuring compliance with all guidelines and a smooth transition to a successful live environment.',
        image: '/process-steps/step-06.webp'
    }
];

const CustomIOSAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Custom iOS App Development"
                title={
                    <>
                        Tailored <span className={styles.purpleText}>Custom iOS</span> <br className="d-none d-md-block" />
                        <span className={styles.greenText}>Applications.</span>
                    </>
                }
                underlineImage="/green-vector.webp"
                description="Our custom iOS app development services are designed to meet your specific business requirements with innovative and scalable solutions."
                bgImage="/services/custom-ios-app-development/banner-bg.webp"
            />
            <ServiceSection 
                heading="Bespoke Experiences"
                purpleText="Tailored for iOS"
                description="We provide high-end custom iOS app development that caters to the unique needs of your business, ensuring a premium feel and flawless execution on all Apple devices."
                features={[
                    "Bespoke UI/UX Design",
                    "Advanced Swift Development",
                    "Exclusive Apple Features Integration",
                    "Scalable Enterprise Solutions"
                ]}
                mockupImage="/services/ios-app-development/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading="Our Custom iOS Development Approach"
                purpleText="Makes It Simple & Efficient"
                tabs={tabs}
            />
            <WhyChooseAppSection />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default CustomIOSAppDevelopmentPage;
