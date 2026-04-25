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
    title: "Ecommerce App Development | Next App Inc",
    description: "Grow your online business with custom ecommerce mobile applications. From shopping apps to B2B platforms, we build high-converting retail solutions.",
};

const EcommerceAppPage = () => {
    const services = [
        {
            title: 'Custom Shopping <br/> Apps',
            description: 'Develop high-performance mobile shopping applications that offer seamless product browsing, secure checkout, and personalized recommendations.',
            active: false
        },
        {
            title: 'B2B Marketplace <br/> Development',
            description: 'Create robust B2B platforms featuring bulk ordering, vendor management, and complex pricing structures for seamless business operations.',
            active: false
        },
        {
            title: 'Inventory & Order <br/> Management',
            description: 'Streamline your retail operations with integrated systems that provide real-time tracking of stock levels, orders, and delivery statuses.',
            active: false
        },
        {
            title: 'Multi-Vendor <br/> Platforms',
            description: 'Build scalable multi-vendor marketplaces that allow multiple sellers to manage their own storefronts and products on a single platform.',
            active: false
        },
        {
            title: 'Loyalty & Reward <br/> Systems',
            description: 'Increase customer retention with custom loyalty programs, digital coupons, and personalized reward systems integrated into your app.',
            active: false
        },
        {
            title: 'Ecommerce <br/> Security',
            description: 'We build high-security ecommerce applications that protect user data and ensure secure transaction processing across all channels.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'checkout',
            title: 'Seamless Checkout',
            contentTitle: 'High-Converting Shopping Experiences',
            contentDesc: 'We prioritize a frictionless checkout process with multiple payment options, guest checkout features, and one-click purchasing to maximize your conversion rates and reduce cart abandonment.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp', 
            image: '/industries/accounting-app-development/tab-mockup-01.webp' 
        },
        {
            id: 'personalization',
            title: 'AI Personalization',
            contentTitle: 'Smart Product Recommendations',
            contentDesc: 'Our ecommerce solutions use AI to analyze user behavior and provide personalized product suggestions, tailored promotions, and relevant content to boost average order value.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'omnichannel',
            title: 'Omnichannel Retail',
            contentTitle: 'Unified Retail Management',
            contentDesc: 'Bridge the gap between online and offline shopping with omnichannel features like "buy online, pick up in-store" (BOPIS), real-time inventory sync, and unified customer profiles.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        },
        {
            id: 'analytics',
            title: 'Retail Analytics',
            contentTitle: 'Data-Driven Ecommerce Insights',
            contentDesc: 'Unlock the power of retail data with custom analytics dashboards. We provide sales trends, customer lifetime value reports, and marketing performance metrics for strategic growth.',
            icon: '/industries/accounting-app-development/tab-icon-01.webp',
            image: '/industries/accounting-app-development/tab-mockup-01.webp'
        }
    ];

    const solutions = [
        {
            title: 'Grocery Delivery Apps',
            description: 'High-performance apps featuring real-time inventory, route optimization for drivers, and seamless scheduled deliveries for local groceries.',
            image: '/industries/accounting-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Fashion & Beauty Apps',
            description: 'Engaging apps featuring virtual try-ons, high-quality product visuals, and personalized style recommendations for fashion brands.',
            image: '/industries/accounting-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'Electronics & Gadgets',
            description: 'Robust platforms featuring detailed product specifications, comparison tools, and secure tech support integration for electronics retailers.',
            image: '/industries/accounting-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'Subscription Box Apps',
            description: 'Recurring billing and subscription management platforms for brands offering curated monthly boxes and membership-based services.',
            image: '/industries/accounting-app-development/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Ecommerce Industry"
                mainTitle="Scaling Your Online Business with High-Performance Apps"
                highlightedPart="Ecommerce App Development"
                description="We build engaging, scalable, and high-converting ecommerce applications that redefine the digital shopping experience for modern consumers."
                bgImage="/industries/accounting-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="Our <span style='color: var(--primary-color)'>Ecommerce App</span> <br /> Development Services"
                description="Our Ecommerce App Development Services provide integrated tools and resources for modern retail management—from custom shopping apps to B2B marketplaces."
                servicesData={services}
                mockupImage="/industries/accounting-app-development/services-mockup.webp" 
            />

            <IndustryConsultationSection 
                title={<>Grow Your <br /> <span style={{ color: 'var(--primary-color)' }}>Online Store</span> <br /> with High-Converting Apps!</>}
                subLabel="Our Ecommerce App Development Services"
                description="We specialize in creating high-performance retail apps tailored to meet your business goals, ensuring customer satisfaction and sales growth."
            />

            <IndustryTabsSection 
                title={<>Innovating the Future of <span style={{ color: 'var(--primary-color)' }}>Retail</span> <br /> with <span style={{ color: 'var(--primary-color)' }}>Modern Tech</span></>}
                description="We Create Transformative Ecommerce Apps That Make Shopping Services Accessible, Personalized, And Highly Rewarding."
                tabsData={tabs}
            />

            <IndustryFeaturesSection 
                title={<>Ecommerce <span style={{ color: 'var(--primary-color)' }}>Mobile App </span> Features to Build Successful <span style={{ color: 'var(--primary-color)' }}>Retail Platforms</span></>}
                description="We deliver mission-critical retail projects successfully with our expert team of ecommerce developers."
            />

            <IndustrySolutionsSlider 
                title={<>Next-Gen <span style={{ color: 'var(--primary-color)' }}>Ecommerce App</span> Solutions <br /> For <span className="highlightWrapper"><span className="highlightText">Modern Retailers</span></span> Needs</>}
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

export default EcommerceAppPage;
