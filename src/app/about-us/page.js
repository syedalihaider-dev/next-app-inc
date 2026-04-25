import AboutBanner from "@/components/about/AboutBanner";
import AboutTabs from "@/components/about/AboutTabs";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutWhyChooseUs from "@/components/about/AboutWhyChooseUs";
import CaseStudy from "@/components/common/CaseStudy";
import CTASection from "@/components/common/CTASection";
import AboutTechSolutions from "@/components/about/AboutTechSolutions";
import AboutFAQ from "@/components/about/AboutFAQ";
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "About Us | Next App Inc",
    description: "Learn more about Next App Inc and our innovative mobile app solutions.",
};

export default function AboutUsPage() {
    return (
        <main>
            <AboutBanner />
            <AboutTabs />
            <AboutFeatures />
            <AboutWhyChooseUs />
            <CaseStudy />
            <CTASection />
            <AboutTechSolutions />
            <AboutFAQ />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
}
