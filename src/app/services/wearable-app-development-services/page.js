import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/services/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/services/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Wearable App Development | Next App",
    description: "Next App builds expert wearable app development solutions, from Apple Watch and Wear OS apps to fitness trackers and IoT-connected wearables. Get a free consultation today..",
};

const tabs = [
    {
        id: 'Healthcare',
        label: 'Healthcare',
        title: 'Healthcare',
        description: 'Enable remote patient monitoring, medication reminders, and connected care with secure wearable solutions that deliver real-time health data to patients, caregivers and providers.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Finance',
        label: 'Finance',
        title: 'Finance',
        description: "Strengthen authentication, streamline approvals and deliver secure notifications with wearable experiences designed for financial services and digital banking.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Insurance',
        label: 'Insurance',
        title: 'Insurance',
        description: 'Support wellness programs, claims, and usage-based insurance with wearable integrations that securely capture health and activity data while maintaining user trust.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Ecommerce',
        label: 'Ecommerce',
        title: 'Ecommerce',
        description: 'Create connected shopping experiences with wearable notifications, loyalty features, order updates and personalized recommendations that keep customers engaged beyond the smartphone.',
        image: '/services/development.webp'
    },
    {
        id: 'Education',
        label: 'Education',
        title: 'Education',
        description: 'Build wearable learning experiences that support attendance, training, notifications and real-time engagement for students, educators, and enterprise training programs.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Agencies',
        label: 'Agencies',
        title: 'Agencies',
        description: 'Give teams instant access to project updates, approvals, client notifications and collaboration tools through companion wearable experiences that keep work moving anywhere.',
        image: '/services/deployment-and-launch.webp'
    }
];

const WearableAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Wearable App Development Company"
                title={
                    <>
                    Your <span className={styles.purpleText}> App </span> on <span className={styles.purpleText}> Every</span> <span className={styles.purpleText}> </span> Wrist <span className={styles.purpleText}></span>
                    </>
                }
                description="Every second counts on the wrist. Your wearable app should feel fast, intuitive, and reliable
                from the very first interaction. We build applications that turn ambitious ideas into wearable
                experiences people can rely on."
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
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/wearable-app-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Wearable <span className={styles.purpleText}> Solutions</span> <span className={styles.purpleText}> Across</span>, <span className={styles.purpleText}></span> Industries<span className={styles.purpleText}></span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default WearableAppDevelopmentPage;
