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
    return (
        <main>
            <IndustryBanner 
                industryLabel="Accounting Industry"
                mainTitle="Leading Accounting App Development for Seamless Finance"
                highlightedPart="Accounting App Development"
                description="iOS app development automates tasks, improves data management, and boosts efficiency with seamless workflows and tailored solutions."
                bgImage="/industries/accounting-app-development/banner-bg.webp"
            />
            
            <IndustryServicesSection />
            <IndustryConsultationSection />
            <IndustryTabsSection />
            <IndustryFeaturesSection />
            <IndustrySolutionsSlider />
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
