import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import CaseStudy from "@/components/common/CaseStudy";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/common/IndustriesSection";
// import Blog from "@/components/home/Blog";
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";
import CTASection from "@/components/common/CTASection";

export const metadata = {
  title: "Next App | Mobile Apps, Web & Software Development Company",
  description:
    "Next App builds mobile apps, e-commerce platforms, web solutions, custom software, and games that solve real problems. Get a free consultation today.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Next App Inc.",
  "alternateName": "Best Mobile App Development Company in USA",
  "url": "https://www.nextappinc.com/",
  "logo": "https://www.nextappinc.com/_next/image?url=%2Flogo.webp&w=640&q=75",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-347-384-5097",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/NextAppINC",
    "https://x.com/NextAppInc_",
    "https://www.linkedin.com/company/next-app-inc/",
    "https://www.instagram.com/nextappinc/"
  ]
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Banner />
      <About />
      <Services />
      <CaseStudy />
      <CTASection />
      <ProcessSection />
      <IndustriesSection />
      {/* <Blog /> */}
      <Appointment />
      <Testimonials />
      <ContactSection />
    </main>
  );
}