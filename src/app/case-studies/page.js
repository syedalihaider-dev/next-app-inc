import CaseStudyBanner from '@/components/CaseStudyBanner';
import CaseStudyProject from '@/components/CaseStudyProject';
import YesTableProject from '@/components/YesTableProject';
import MarhoferProject from '@/components/MarhoferProject';
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export const metadata = {
    title: "Case Studies | Next App Inc",
    description: "Explore our successful projects and see how we help businesses grow with innovative mobile solutions.",
};

const CaseStudiesPage = () => {
    return (
        <main>
            <CaseStudyBanner />
            <CaseStudyProject />
            <YesTableProject />
            <MarhoferProject />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default CaseStudiesPage;
