import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/common/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/common/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import AboutFAQ from "@/components/about/AboutFAQ";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "AR VR App Development Company | Next App",
    description: "Next App is a leading AR VR app development company delivering immersive AR VR app development services for mobile and enterprise applications. Contact us.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'As an AR VR app development company, AR and VR projects require careful planning; early wrong technical choices can ruin the experience. Our team defines your use case, hardware, tracking needs, and content strategy, then scopes the project with honest estimates for development, 3D assets, and testing timelines.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Immersive experience design differs from flat-screen apps by creating spatial wireframes and storyboards that guide user movement, object placement, interaction triggers, and flow. This phase clarifies concepts and aligns your team before 3D work begins.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'With AR VR app development, we create a functional AR or VR prototype that can be worn or used with a phone. This proof-of-concept showcases core spatial interactions, allowing you to validate the experience aligned with your goals before full production.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our VR/AR developers build your AR or VR application using Unity or Unreal Engine, integrating ARKit, ARCore, or WebXR based on your target platforms. 3D modelers, animators, and engineers work in parallel sprints, delivering iterative builds for testing throughout, not just at the end.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'AR and VR QA tests dimensions standard app testing doesn’t cover, such as tracking stability, latency, motion sickness risk, spatial accuracy, and rendering performance on various devices. We test on all supported headsets and mobiles, optimize frame rates, and ensure comfort during extended use.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We handle app store submissions for iOS, Android AR, Meta Quest, SteamVR, and other platform VR deployments. Post-launch, we monitor performance, gather user feedback, and iterate, as immersive tech evolves fast and your product should too.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const ArVrDevelopmentServices = () => {
    return (
        <main>
            <ServiceInnerBanner
                badge="AR VR App Development Company"
                title={
                    <>
                        <span className={styles.purpleText}> Build Experiences </span>  That Go Beyond <span className={styles.purpleText}>  </span> <span className={styles.purpleText}> the Screen </span><span className={styles.purpleText}></span>
                    </>
                }
                description="Augmented and virtual reality are reshaping how users interact with products, spaces, and brands. As a dedicated AR/VR app development company, we build immersive experiences that captivate users, differentiate your product, and deliver measurable business value."
                bgImage="/services/app-store-optimization-banner-bg.png"
            />
            <ServiceSection
                heading="Why Immersive Technology  "
                purpleText="Requires the Right Partner"
                description="AR and VR development is technically demanding and creatively intensive. Our team brings experience across retail, healthcare, real estate, and training environments, delivering AR VR app development services that are engineered for performance, designed for users, and built to run reliably across mobile and headset platforms."
                features={[
                    "Augmented Reality (AR) Experiences",
                    "Virtual Reality (VR) Applications",
                    "3D Environment Design",
                    "Cross-Platform XR Development"
                ]}
                mockupImage="/services/app-store-optimization-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Innovators Choose "
                purpleText="Next App for AR/VR"
                description="Our AR/VR app development team combines creative 3D design with robust engineering to produce experiences that feel real, even on mobile hardware."
                features={[

                    "Platform-agnostic XR expertise (iOS, Android, Meta, HoloLens)",
                    "Direct access to US-based experts",
                    "Specialized in real-time 3D rendering and spatial UX",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Experience"
                description="Every immersive product has different goals. From VR app development for enterprise training to consumer AR experiences on mobile, we keep every stage focused, collaborative, and transparent."
                cards={[
                    {
                        title: 'Strategy & Concept Discovery',
                        description: 'We start by understanding your users, use case, and platform requirements, mapping the experience architecture before any 3D work begins.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: '3D Design & Environment Build',
                        description: "Create the environments, assets, and interactions that bring your AR/VR experience to life.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Build your experience on the right SDK (ARKit, ARCore, Unity, Unreal), integrating backend systems and real-world data feeds as needed. We’re equally strong as a virtual reality game app development company and a mobile AR solutions provider.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Validate performance across target hardware, prepare for platform submission, and provide post-launch support. Whether it’s AR/VR app development for a consumer app or an enterprise deployment, we support your product as the XR ecosystem evolves.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our AR/VR  <span className={styles.purpleText}>Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="With AR/VR app development, our AR/VR apps often access device cameras, spatial data, and user environments. Every solution we build includes privacy-first data handling, GDPR-compliant controls, and platform-specific compliance measures to protect your users at every touchpoint."
                desc2=""
            />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment
                badge="Book An Appointment"
                heading={
                    <>
                        Your Next Big Idea  <span className={appointmentStyles.highlight}> Starts Here.</span> <br /> <span className={appointmentStyles.highlight}> </span>
                    </>
                }
                description="Whether you’re building a first AR experience or a full VR application, our team can scope it in a 10-minute call. No boardroom pitch, just a conversation about what you’re building and who it’s for."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default ArVrDevelopmentServices;
