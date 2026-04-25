import IndustryBanner from '@/components/industries/IndustryBanner';
import IndustryServicesSection from '@/components/industries/IndustryServicesSection';
import IndustryConsultationSection from '@/components/industries/IndustryConsultationSection';
import IndustryTabsSection from '@/components/industries/IndustryTabsSection';
import IndustryFeaturesSection from '@/components/industries/IndustryFeaturesSection';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import IndustrySolutionsSlider from '@/components/industries/IndustrySolutionsSlider';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Accounting App Development | Next App Inc",
    description: "Build custom accounting app development solutions that automate tasks, improve data management and boost efficiency.",
};

const AccountingAppPage = () => {
    const services = [
        {
            title: 'Corporate Tax <br/> & Audit Solutions',
            description: 'Comprehensive accounting app development services providing integrated tools and resources for smooth corporate tax management and auditing.',
            active: false
        },
        {
            title: 'Real-time Billing <br/> & Invoicing',
            description: 'Automate your financial cycles with robust invoicing and billing systems tailored to your specific business requirements and workflows.',
            active: false
        },
        {
            title: 'Financial Data <br/> Analytics',
            description: 'Unlock insights with advanced data analytics features, allowing for real-time tracking of financial health and informed decision-making.',
            active: false
        },
        {
            title: 'Expense & Payroll <br/> Management',
            description: 'Streamline employee salaries and company expenses with an intuitive mobile application that ensures accuracy and compliance.',
            active: false
        },
        {
            title: 'Security & Compliance <br/> Monitoring',
            description: 'We build high-security accounting applications that protect sensitive financial data and ensure adherence to international financial standards.',
            active: false
        },
        {
            title: 'Cloud Accounting <br/> Solutions',
            description: 'Specializing in secure, cloud-based accounting apps that offer seamless access to financial data anytime and anywhere.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'invoicing',
            title: 'Invoicing & Billing Management',
            contentTitle: 'Custom Invoicing & Billing Platforms',
            contentDesc: 'In Project Planning, Our Business Analysts Work With Clients To Turn Their App Ideas And Business Needs Into A Clear Project Scope. We Allocate The Right Resources, Provide Accurate Cost And Time Estimates, And Explore Cost Optimization Options For Efficient Execution.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'auditing',
            title: 'Transaction & Audit Tracking',
            contentTitle: 'Advanced Transaction Auditing Systems',
            contentDesc: 'We develop robust transaction tracking solutions that ensure every penny is accounted for. Our systems provide real-time auditing capabilities, historical data analysis, and automated compliance reporting for financial transparency.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'payroll',
            title: 'Payroll & Compensation Systems',
            contentTitle: 'Seamless Payroll & HR Integration',
            contentDesc: 'Our payroll solutions automate complex compensation structures, tax withholdings, and employee benefits. We integrate with existing HR systems to provide a unified platform for managing workforce costs and financial obligations.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'analytics',
            title: 'Financial Reporting & Analytics',
            contentTitle: 'Predictive Financial Analytics Dashboards',
            contentDesc: 'Unlock the power of your financial data with custom analytics dashboards. We provide predictive modeling, trend analysis, and comprehensive reporting tools that help business leaders make informed strategic decisions based on real-time data.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        }
    ];

    const solutions = [
        {
            title: 'Content Authoring Tools',
            description: 'We develop custom tools that allow accounting firms to create and manage financial content, tax guides, and educational resources for their clients.',
            image: '/industries/accounting-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Employee Engagement Apps',
            description: 'Boost productivity within your finance team with apps designed for internal communication, task management, and knowledge sharing.',
            image: '/industries/accounting-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'Skill Boosting Apps',
            description: 'Provide your accountants with the latest training and certification tools through interactive mobile learning platforms.',
            image: '/industries/accounting-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'Financial Learning Apps',
            description: 'Educate your clients on financial literacy and tax planning with engaging mobile applications tailored to their needs.',
            image: '/industries/accounting-app-development/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Accounting Industry"
                mainTitle="Leading Accounting App Development for Seamless Finance"
                highlightedPart="Accounting App Development"
                description="iOS app development automates tasks, improves data management, and boosts efficiency with seamless workflows and tailored solutions."
                bgImage="/industries/accounting-app-development/banner-bg.webp"
            />
            
            <IndustryServicesSection 
                title="Our <span style='color: var(--primary-color)'>Accounting App</span> <br /> Development Services"
                description="Our Accounting App Development Services provide integrated tools and resources for smooth management—from initial ideation and concept development to final delivery."
                servicesData={services}
                mockupImage="/industries/accounting-app-development/services-mockup.webp"
            />

            <IndustryConsultationSection 
                title={<>Create Seamless <br /> <span style={{ color: 'var(--primary-color)' }}>Financial Management</span> <br /> with Powerful Apps!</>}
                subLabel="Our Accounting App Development Services"
                description="We specialize in creating high-performance finance apps tailored to meet your specific business goals, ensuring security and compliance."
            />

            <IndustryTabsSection 
                title={<>Empowering the Future of <span style={{ color: 'var(--primary-color)' }}>Accounting</span> <br /> with <span style={{ color: 'var(--primary-color)' }}>Modern App</span> Development</>}
                description="We Create Transformative Accounting Apps That Make Financial Management Accessible, Personalized, And Engaging."
                tabsData={tabs}
            />

            <IndustryFeaturesSection 
                title={<>Accounting <span style={{ color: 'var(--primary-color)' }}>Mobile App </span> Features to Build Successful <span style={{ color: 'var(--primary-color)' }}>Finance Platforms</span></>}
                description="We deliver complex projects successfully with our skilled team of developers and designers."
            />

            <IndustrySolutionsSlider 
                title={<>Next-Gen <span style={{ color: 'var(--primary-color)' }}>Accounting App</span> Solutions <br /> For <span className="highlightWrapper"><span className="highlightText">Modern Business</span></span> Needs</>}
                solutionsData={solutions}
            />

            <WhyChooseAppSection 
                // mockupImage="/industries/accounting-app-development/services-mockup.webp"
            />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default AccountingAppPage;
