import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import '@/styles/service-page-overrides.css';
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
    title: "Mobile Game Development Company | Next App",
    description: "Next App is a leading mobile game development company offering iOS and Android game development services for engaging, high-performance gaming experiences.",
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our analysts help turn your game concept into a clear development plan, covering scope, mechanics, platform targets, art style, and budget. We’re recognized as one of the best game development companies for our ability to scope projects accurately and deliver without compromise.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "As a game app development company, before art and code, we wireframe the game’s core UX, menus, onboarding flows, HUD layout, and key screens. This ensures the non-gameplay experience is as polished as the game itself. Alongside wireframes, our game designers document core mechanics and level design concepts for team alignment.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a playable prototype of your core gameplay loop, stripped of final art but fully functional. You get to play it, feel the mechanics, and decide if the moment-to-moment experience is right before the full production budget is committed. Feedback at this stage is cheap; feedback post-launch isn’t.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our Android game developers build a playable prototype of your core gameplay loop, stripped of final art but fully functional. You get to play it, feel the mechanics, and decide if the moment-to-moment experience is right before the full production budget is committed. Feedback at this stage is cheap; feedback post-launch isn’t.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'Games require a different kind of QA. Our QA mobile game developers test for bugs, frame rate consistency, input responsiveness, crash scenarios, device compatibility, and store compliance, across iOS and Android. We also conduct gameplay balance testing to ensure the experience is fun and fair from the first session.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'Apart from mobile game development service, we manage full App Store and Google Play submissions, including age ratings, content descriptions, trailer assets, and store listing optimization. Post-launch, we monitor crash reports, user reviews, and retention metrics so we can act fast on anything that needs improvement.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const CrossPlatformAppDevelopmentServices = () => {
    return (
        <main className="mobile-game-page">
            <ServiceInnerBanner
                badge="Mobile Game Development Services"
                title={
                    <>
                        <span className={styles.purpleText}> Build Games </span> Players <span className={styles.purpleText}> Can’t Stop </span>  <span className={styles.purpleText}>  </span> Playing<span className={styles.purpleText}></span>
                    </>
                }
                description="From concept to launch, we build games that captivate, retain, and grow. As a dedicated mobile game development company, we turn your creative vision into a market-ready product, whether it’s a casual puzzle game or a fully immersive multiplayer experience."
                bgImage="/services/mobile-game-banner-bg.png"
            />
            <ServiceSection
                heading="Why Game Development  "
                purpleText="Requires More Than Just Code"
                description="A great mobile game requires the right blend of creative design, solid engineering, and platform expertise. Our team at Next App has shipped games across iOS, Android, and cross-platform environments, serving as both an iOS game development company and a premier Android game development company. We build every title to perform beautifully, monetize effectively, and deliver the kind of experience that earns five-star ratings."
                features={[
                    "2D/3D Game Design",
                    "Cross-Platform Development",
                    "Monetization Strategy",
                    "Live Operations Support"
                ]}
                mockupImage="/services/mobile-game-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Studios and Startups     "
                purpleText="Choose Next App"
                description="Our Android game development services and iOS game development services are delivered by a team that understands gaming, not just technology."
                features={[

                    "Genre-fluent game designers",
                    "Direct access to US-based experts",
                    "Built for performance across all device tiers",
                    "Support beyond launch"
                ]}
            />
            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="Game"
                description="Every title has different goals, but successful launches follow the same disciplined process. As a recognized game app development company, we keep every stage focused, collaborative, and transparent."
                cards={[
                    {
                        title: 'Strategy & Concept Discovery',
                        description: 'We start by understanding your target audience, genre mechanics, monetization model, and platform requirements, turning your idea into a clear game design document.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'Art & Game Design',
                        description: "Design visuals, animations, and level structures that bring your game world to life.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Engineering & Integration',
                        description: 'Build your game with optimized rendering, physics, and backend systems. Our Android game development and iOS engineering teams work in parallel to ensure feature parity across platforms.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Testing, Launch & Growth',
                        description: 'Validate performance with rigorous QA, prepare for App Store and Play Store submission, and provide custom mobile game development services for live ops, updates, and post-launch support.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />
            <ProcessTabs
                heading={<>Our Mobile Game  <span className={styles.purpleText}>Development Approach </span> Makes It <span className={styles.purpleText}>  </span> Simple, Easy,<span className={styles.purpleText}> And </span>  <span className={styles.purpleText}> Efficient.</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance,  <span className={styles.purpleText}> Built Into Every Game</span>
                    </>
                }
                desc1="Mobile games often handle in-app purchases, user accounts, and personal data. Every solution we build includes encrypted transactions, GDPR-compliant data handling, and platform-specific compliance measures to protect players at every touchpoint."
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
                description="Whether you’re building a first mobile title or scaling a live game, our team can scope it in a 10-minute call. Looking to hire mobile game development company experts? We’re ready. No boardroom pitch, just a conversation about what you’re building and who plays it."
            />
            <Testimonials />
            <AboutFAQ />
            <ContactSection />
        </main>
    );
};

export default CrossPlatformAppDevelopmentServices;