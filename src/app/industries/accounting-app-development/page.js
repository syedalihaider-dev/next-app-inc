import IndustryBanner from '@/components/IndustryBanner';
import IndustryServicesSection from '@/components/IndustryServicesSection';
import IndustryConsultationSection from '@/components/IndustryConsultationSection';
import IndustryTabsSection from '@/components/IndustryTabsSection';
import IndustryFeaturesSection from '@/components/IndustryFeaturesSection';
import WhyChooseAppSection from '@/components/WhyChooseAppSection';
import IndustrySolutionsSlider from '@/components/IndustrySolutionsSlider';
import CaseStudy from "@/components/CaseStudy";
import TechStackSection from '@/components/TechStackSection';
import IndustriesSection from '@/components/IndustriesSection';
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

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
