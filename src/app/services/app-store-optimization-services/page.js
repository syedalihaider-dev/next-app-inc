import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import '@/styles/service-page-overrides.css';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/common/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/common/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
// import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import AboutFAQ from "@/components/about/AboutFAQ";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "App Store Optimization Services | Next App",
    description: "Next App is a top app store optimization company offering advanced ASO strategies for iPhone, Google Play, and Android apps. Boost visibility and downloads.",
};

const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "App Store Optimization Services",
    "description": "Next App Inc. improves app visibility, rankings, downloads, and conversions through effective ASO strategies and keyword research.",
    "brand": {
        "@type": "Brand",
        "name": "Next App Inc."
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1196"
    }
};

const tabs = [
    {
        id: 'Project Planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'With our app store optimization services, we audit your current store listing, benchmark against top competitors in your category, and define an ASO strategy that targets the keywords, creatives, and rating triggers most likely to move your rankings.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'Wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "As an app store optimization company, we design screenshot sequences, preview video storyboards, and feature graphic layouts that communicate your app’s value in under three seconds, which is all the attention most store visitors give before they decide.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'Prototype Demo',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Before rolling out changes to your live listing, we test creative variants with store page experiments to measure which title, icon, and screenshots drive the highest conversion rate against real search traffic.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'Development',
        label: 'Development',
        title: 'Development',
        description: 'Our app store optimization agency implements the full optimized listing, writing keyword-rich titles and descriptions, uploading conversion-tested creatives, and configuring localized metadata for every target market you want to rank in.',
        image: '/services/development.webp'
    },
    {
        id: 'Quality Control',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'Every listing change is tracked for impact on impressions, conversion rate, and organic installs. We review performance data weekly and iterate rapidly to keep your ranking moving in the right direction.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'Deployment and Launch',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'App store optimization services are ongoing, not a one-time setup. We monitor algorithm changes, seasonal keyword shifts, and competitor moves to keep your listing optimized and your install volume growing month over month.',
        image: '/services/deployment-and-launch.webp'
    }
];

import appointmentStyles from '@/components/common/Appointment.module.css';

const AppStoreOptimizationServices = () => {
    return (
        <main className="app-store-page">

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema),
                }}
            />

            <ServiceInnerBanner
                badge="App Store Optimization Services"
                title={
                    <>
                        <span className={styles.purpleText}> Get Found. </span> Get Downloaded. <span className={styles.purpleText}> Get </span> <span className={styles.purpleText}> Results. </span><span className={styles.purpleText}></span>
                    </>
                }
                description="Building a great app is only half the battle. Our expert app store optimization services ensure your app ranks higher, reaches the right users, and converts browsers into loyal downloaders, on both iOS and Android."
                bgImage="/services/app-store-optimization-banner-bg.png"
            />

            <ServiceSection
                heading="Why ASO Is the ROI-Multiplier  "
                purpleText="Your App Is Missing"
                description="Most apps never reach their potential simply because they’re invisible in the store. As a leading app store optimization company, we combine keyword research, creative optimization, and conversion rate analysis to systematically improve your app’s visibility and download rates. From iPhone app store optimization to Google Play app store optimization, we cover every platform where your users are searching."
                features={[
                    "Keyword Research & Optimization",
                    "Screenshot & Creative Optimization",
                    "Ratings & Reviews Strategy",
                    "Conversion Rate Analysis"
                ]}
                mockupImage="/services/app-store-optimization-hand-mockup.png"
            />

            <AwardsSection />

            <ServicesListSection />

            <DevelopmentSolutionsSection
                badge="Built Differently. Delivered Better."
                headingText="Why Brands Choose"
                purpleText="Next App for ASO"
                description="Our team functions as a full-service app store optimization agency, combining technical ASO expertise with creative strategy to improve rankings, drive installs, and maximize your store’s performance."
                features={[
                    "Data-driven keyword targeting",
                    "Direct access to US-based ASO experts",
                    "Ongoing monitoring and iteration",
                    "Support from strategy through execution"
                ]}
            />

            <CompanyChoiceSection
                headingText="A Process "
                purpleText="Built Around"
                headingText2=" Your "
                purpleText2="App’s Growth"
                description="Our advanced app store optimization process is built on data, tested on real apps, and refined through continuous iteration."
                cards={[
                    {
                        title: 'Audit & Competitive Analysis',
                        description: 'We start by auditing your current store presence and analyzing competitors to identify quick wins and long-term keyword opportunities.',
                        icon: '/services/icon-discovery-and-strategy.webp'
                    },
                    {
                        title: 'Keyword Strategy & Metadata Optimization',
                        description: "Optimize your app title, subtitle, description, and keyword fields for maximum search visibility on both Apple’s App Store and Google Play.",
                        icon: '/services/icon-ux-ui-design.webp'
                    },
                    {
                        title: 'Creative Optimization',
                        description: 'Test and refine your screenshots, preview videos, and icon to maximize conversion rates from store visitors.',
                        icon: '/services/icon-development.webp'
                    },
                    {
                        title: 'Monitoring & Iteration',
                        description: 'Track rankings, download metrics, and competitive shifts, iterating continuously to maintain and improve your app’s search position.',
                        icon: '/services/icon-launch-and-deployment.webp'
                    }
                ]}
            />

            <ProcessTabs
                heading={
                    <>
                        Our App Store <span className={styles.purpleText}> Optimization Approach </span> Makes It <span className={styles.purpleText}> </span> Simple, Easy,<span className={styles.purpleText}> And </span> <span className={styles.purpleText}> Efficient.</span>
                    </>
                }
                tabs={tabs}
            />

            {/*
            <WhyChooseAppSection
                title={
                    <>
                        Security & Compliance, <span className={styles.purpleText}> Built Into Every App</span>
                    </>
                }
                desc1="Even at the prototype stage, we build with the end in mind. Every prototype is designed with privacy, accessibility, and platform compliance in mind to ensure a smooth transition into production."
                desc2=""
            />
            */}

            <CaseStudy />

            <TechStackSection />

            <IndustriesSection />

            <Appointment
                badge="Book An Appointment"
                heading={
                    <>
                        Your Next Big Idea <span className={appointmentStyles.highlight}> Starts Here.</span> <br /> <span className={appointmentStyles.highlight}> </span>
                    </>
                }
                description="Whether you’re launching a new app or reviving one that’s underperforming, our ASO team can scope a strategy in a 10-minute call. No boardroom pitch, just a conversation about your app and who you’re trying to reach."
            />

            <Testimonials />

            <AboutFAQ />

            <ContactSection />

        </main>
    );
};

export default AppStoreOptimizationServices;