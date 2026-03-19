import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import ProcessSection from "@/components/ProcessSection";
import Blog from "@/components/Blog";
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <CaseStudy />
      <CTASection />
      <ProcessSection />
      <Blog />
      <Appointment />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
