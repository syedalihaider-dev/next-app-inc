import ContactBanner from "@/components/ContactBanner";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

export const metadata = {
    title: "Contact Us | Next App Inc",
    description: "Get in touch with Next App Inc for innovative mobile app solutions and tech consulting.",
};

export default function ContactUsPage() {
    return (
        <main>
            <ContactBanner />
            <ContactSection />
            <CTASection />
        </main>
    );
}
