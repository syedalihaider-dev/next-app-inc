import IndustryBanner from '@/components/industries/IndustryBanner';
import IndustryServicesSection from '@/components/industries/IndustryServicesSection';
import IndustryConsultationSection from '@/components/industries/IndustryConsultationSection';
import IndustryTabsSection from '@/components/industries/IndustryTabsSection';
import IndustryFeaturesSection from '@/components/industries/IndustryFeaturesSection';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import IndustrySolutionsSlider from '@/components/industries/IndustrySolutionsSlider';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Education App Development | Next App Inc",
    description: "Empower learners and educators with custom EdTech mobile applications. From LMS to language learning apps, we build engaging educational solutions.",
};

const EducationAppPage = () => {
    const services = [
        {
            title: 'LMS <br/> Development',
            description: 'Develop robust Learning Management Systems that offer structured course delivery, progress tracking, and interactive assessment tools.',
            active: false
        },
        {
            title: 'Virtual Classroom <br/> Platforms',
            description: 'Create engaging virtual classrooms with real-time video interaction, collaborative whiteboards, and instant file sharing capabilities.',
            active: false
        },
        {
            title: 'Language Learning <br/> Apps',
            description: 'Build interactive language learning applications featuring speech recognition, gamified lessons, and personalized practice paths.',
            active: false
        },
        {
            title: 'Education <br/> Game Development',
            description: 'Develop educational games that make learning fun and engaging for students of all ages through interactive storytelling and challenges.',
            active: false
        },
        {
            title: 'Student & Parent <br/> Portals',
            description: 'Improve communication with secure portals that provide instant updates on attendance, grades, and school announcements.',
            active: false
        },
        {
            title: 'Custom eLearning <br/> Solutions',
            description: 'We build high-performance educational applications tailored to meet specific learning objectives and institutional goals.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'gamification',
            title: 'Gamified Learning',
            contentTitle: 'Engaging Educational Experiences',
            contentDesc: 'We integrate gamification elements like points, badges, and leaderboards to boost student motivation and retention. Our solutions transform traditional lessons into interactive and fun learning journeys.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp', 
            image: '/industries/accounting-app-development/tab-mockup-01.webp' 
        },
        {
            id: 'real-time',
            title: 'Interactive Tools',
            contentTitle: 'Real-time Collaboration Platforms',
            contentDesc: 'Our EdTech solutions offer interactive whiteboards, shared document editing, and real-time polling to create a truly collaborative learning environment for students and teachers.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'tracking',
            title: 'Progress Tracking',
            contentTitle: 'Data-Driven Student Performance',
            contentDesc: 'Provide educators with instant insights into student progress. Our apps offer automated grading, detailed performance reports, and personalized feedback tools for better learning outcomes.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'analytics',
            title: 'Education Analytics',
            contentTitle: 'Advanced Institutional Insights',
            contentDesc: 'Unlock the power of educational data with custom analytics dashboards. We provide student engagement trends, course effectiveness reports, and operational performance metrics.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        }
    ];

    const solutions = [
        {
            title: 'Skill Boosting Apps',
            description: 'Interactive platforms that provide professional development courses, certification training, and skill-based learning for career growth.',
            image: '/industries/accounting-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Early Childhood Learning',
            description: 'Engaging and colorful apps designed for young children to develop foundational skills in reading, math, and creative arts.',
            image: '/industries/accounting-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'STEM Education Apps',
            description: 'Specialized apps that provide interactive simulations, experiments, and lessons in Science, Technology, Engineering, and Math.',
            image: '/industries/accounting-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'Test Prep Platforms',
            description: 'Comprehensive platforms that offer practice exams, study materials, and personalized study plans for standardized tests and certifications.',
            image: '/industries/accounting-app-development/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Education Industry"
                mainTitle="Empowering the Future of Learning with Smart Apps"
                highlightedPart="Education App Development"
                description="We build engaging, scalable, and high-performance EdTech applications that redefine how students learn and educators teach in the digital age."
                bgImage="/industries/accounting-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="Our <span style='color: var(--primary-color)'>Education App</span> <br /> Development Services"
                description="Our EdTech App Development Services provide integrated tools and resources for modern educational management—from LMS to language learning apps."
                servicesData={services}
                mockupImage="/industries/accounting-app-development/services-mockup.webp" 
            />

            <IndustryConsultationSection 
                title={<>Transform the <br /> <span style={{ color: 'var(--primary-color)' }}>Learning Experience</span> <br /> with Engaging Apps!</>}
                subLabel="Our Education App Development Services"
                description="We specialize in creating high-performance educational apps tailored to meet your learning goals, ensuring student engagement and success."
            />

            <IndustryTabsSection 
                title={<>Innovating the Future of <span style={{ color: 'var(--primary-color)' }}>EdTech</span> <br /> with <span style={{ color: 'var(--primary-color)' }}>Interactive Tech</span></>}
                description="We Create Transformative Education Apps That Make Learning Services Accessible, Personalized, And Highly Engaging."
                tabsData={tabs}
            />

            <IndustryFeaturesSection 
                title={<>EdTech <span style={{ color: 'var(--primary-color)' }}>Mobile App </span> Features to Build Successful <span style={{ color: 'var(--primary-color)' }}>Learning Platforms</span></>}
                description="We deliver mission-critical educational projects successfully with our expert team of EdTech developers."
            />

            <IndustrySolutionsSlider 
                title={<>Next-Gen <span style={{ color: 'var(--primary-color)' }}>Education App</span> Solutions <br /> For <span className="highlightWrapper"><span className="highlightText">Modern Learners</span></span> Needs</>}
                solutionsData={solutions}
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

export default EducationAppPage;
