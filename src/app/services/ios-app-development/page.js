import ServiceInnerBanner from '@/components/ServiceInnerBanner';
import styles from '@/components/ServiceInnerBanner.module.css';
import IOSAppSection from '@/components/IOSAppSection';
import AwardsSection from '@/components/AwardsSection';
import ServicesListSection from '@/components/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/CompanyChoiceSection';
import IOSProcessTabs from '@/components/IOSProcessTabs';
import WhyChooseAppSection from '@/components/WhyChooseAppSection';
import CaseStudy from "@/components/CaseStudy";
import TechStackSection from '@/components/TechStackSection';
import IndustriesSection from '@/components/IndustriesSection';
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export const metadata = {
    title: "iOS App Development | Next App Inc",
    description: "Build high-performance, secure, and user-friendly iOS applications with Next App Inc. We offer end-to-end development services for all Apple devices.",
};

const IOSAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="iOS App Development"
                title={
                    <>
                        Mobile <span className={styles.purpleText}>Apps</span> People <br className="d-none d-md-block" />
                        <span className={styles.greenText}>Actually Love.</span>
                    </>
                }
                underlineImage="/green-vector.png"
                description="iOS app development automates tasks, improves data management, and boosts efficiency with seamless workflows and tailored solutions."
                bgImage="/services/ios-app-development/banner-bg.png"
            />
            <IOSAppSection />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <IOSProcessTabs />
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

export default IOSAppDevelopmentPage;
