import ContactBanner from "@/components/contact/ContactBanner";
import ContactSection from "@/components/common/ContactSection";
import LocationSection from "@/components/contact/LocationSection";

export const metadata = {
    title: "Contact Us | Next App Inc",
    description: "Get in touch with Next App Inc for innovative mobile app solutions and tech consulting.",
};

export default function ContactUsPage() {
    return (
        <main>
            <ContactBanner />
            <ContactSection isNewDesign={true} />
            <LocationSection />
        </main>
    );
}
