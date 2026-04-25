import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import IOSAppSection from '@/components/services/IOSAppSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/services/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/services/CompanyChoiceSection';
import IOSProcessTabs from '@/components/services/IOSProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

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
                underlineImage="/green-vector.webp"
                description="iOS app development automates tasks, improves data management, and boosts efficiency with seamless workflows and tailored solutions."
                bgImage="/services/ios-app-development/banner-bg.webp"
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
