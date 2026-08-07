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
    title: "2D Game Development Company | Next App",
    description: "Next App is a trusted 2D game development company in the USA offering expert 2D game development services for iOS, Android, and cross-platform titles.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our analysts turn your game concept into a structured development plan. That means scope, mechanics, art style, platform targets, and budget mapped out clearly before work begins. Every engagement with our 2D game development company starts this way so both sides stay aligned from day one.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Before code or final art, we wireframe the full game UX: menus, onboarding flows, HUD layout, pause states, and key screens. This step keeps the non-gameplay experience as polished as the game itself, and it makes design decisions fast and cheap to change before a single pixel is placed.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a playable prototype of your core gameplay loop. The art is placeholder, but the mechanics are real. You play it, feel whether it works, and sign off on the direction before the full production budget is committed. Changes at this stage cost almost nothing compared to changes after launch.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers build your 2D Android game development project using Unity or Godot with clean architecture and optimized rendering pipelines. Every feature is built for consistent performance across budget and flagship devices alike.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test for bugs, frame rate consistency, input feel, crash scenarios, device compatibility, and store compliance across iOS and Android. Gameplay balance testing runs alongside technical QA to make sure the experience is genuinely fun before it goes live.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We handle full App Store and Google Play submissions: age ratings, content descriptions, trailer assets, and store listing copy. After launch, we monitor crash reports, reviews, and retention data so we can respond quickly to anything that needs attention.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const TwoDGameDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner
                badge="2D Game Development Company"
                title={
                    <>
                        Build 2D Games <span className={styles.purpleText}> Players Actually </span> Come Back <span className={styles.purpleText}> To</span> <span className={styles.purpleText}> </span><span className={styles.purpleText}></span>
                    </>
                }
                description="2D games look simple from the outside. They are anything but. Great 2D titles demand deliberate art direction, tight game feel, and the kind of engineering discipline that keeps frame rates smooth across every device on the market. As a trusted 2D game development company, we bring all three to every project we take on. Our team has shipped 2D titles across mobile and cross-platform environments, and we know exactly what separates a game that gets uninstalled in a week from one players genuinely return to. Whether you are building a casual puzzler, a side-scrolling action title, or something in between, our 2D game development services are structured to deliver on your vision without blowing up your timeline or your budget."
                bgImage="/services/wearable-app-banner-bg.png"
            />
            <ServiceSection
                heading="Experiences Designed   "
                purpleText="for Life in Motion"
                description="Our designs move with people, not slow them down.
                    We design and develop wearable experiences that bring real-time intelligence to the wrist,
                    transforming complex data into simple, actionable insights. From native watchOS and Wear OS
                    apps to connected IoT ecosystems, we build technology that feels effortless."
                features={[
                    "Character & Environment Design",
                    "Cross-Platform 2D Engine Development",
                    "Monetization & Live Ops Integration",
                    "Smooth Animation & Physics Systems"
                ]}
                mockupImage="/services/wearable-app-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Studios and Startups"
                purpleText="Choose Next App"
                description="Our team understands games, not just technology. As a recognized 2D game development company in the USA, we combine creative direction with solid engineering to produce 2D titles that earn strong reviews and keep players coming back long after the first session."
                features={[
                    "Genre-fluent 2D designers and developers",
                    "Direct access to US-based project leads",
                    "Built for performance across all device tiers",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Game"
                description="Every title has its own goals, but successful launches follow the same disciplined path. From the first concept call to post-launch live ops, we keep every stage focused, transparent, and built around what your players actually need."
                cards={[
                    {
                        title: 'Strategy & Concept Discovery',
                        description: 'We start by understanding your target audience, genre mechanics, monetization model, and platform priorities. Whether you are focused on Android 2D game development or a multi-platform release, your game starts with a clear design document before a single asset is produced.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'Art & Game Design',
                        description: "Design characters, environments, level layouts, and UI systems that bring your 2D world to life. Every visual decision is made with the player experience in mind and calibrated to the platform your game will run on.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Build your game with optimized sprite rendering, physics systems, and backend infrastructure. Our iOS 2D game development and Android teams work in parallel to ensure consistent performance and feature parity across platforms.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Validate performance with rigorous QA, prepare for App Store and Play Store submission, and stay engaged for post-launch support. Our 2D game development services team does not disappear when the build ships.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our 2D Game Development <span className={styles.purpleText}> Approach Makes</span> <span className={styles.purpleText}> It Simple,</span> Easy,<span className={styles.purpleText}> </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance, Built <span className={styles.purpleText}> Into Every Game</span>
                    </>
                }
                desc1="2D games that include in-app purchases, user accounts, or social features need more than a solid gameplay loop."
                desc2="Every solution we build includes encrypted transactions, GDPR-compliant data handling, and platform-specific compliance measures to keep your players protected at every touchpoint."
            />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment
                badge="Book An Appointment"
                heading={
                    <>
                        Your Next Big Game <span className={appointmentStyles.highlight}> Starts Here.</span> <br /> <span className={appointmentStyles.highlight}> </span>
                    </>
                }
                description="Whether you are launching your first 2D title or taking an existing game concept to a new platform, our team can scope it in a 10-minute call. No boardroom pitch. If you are ready to work with a 2D game development company that treats your project like a product and not just a ticket, let us know what you are building."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default TwoDGameDevelopmentPage;
