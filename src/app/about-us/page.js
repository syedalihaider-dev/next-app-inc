import AboutBanner from "@/components/AboutBanner";
import AboutTabs from "@/components/AboutTabs";
import AboutFeatures from "@/components/AboutFeatures";
import AboutWhyChooseUs from "@/components/AboutWhyChooseUs";
import CaseStudy from "@/components/CaseStudy";
import CTASection from "@/components/CTASection";
import AboutTechSolutions from "@/components/AboutTechSolutions";
import AboutFAQ from "@/components/AboutFAQ";
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

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
