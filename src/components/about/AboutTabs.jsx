'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AboutTabs.module.css';

const tabs = [
    {
        id: 'mission',
        label: 'Mission',
        title: 'Mission',
        p1: 'At Next App Inc., We Transform Ideas Into High-Performing Mobile Applications. Our Team Of Experts Specializes In Custom App Development, UI/UX Design, Wearable App Solutions, And Scalable Mobile Strategies For Companies.',
        p2: 'We Have Proudly Worked With A Diverse Range Of Industries, Delivering Seamless Digital Experiences That Drive Engagement And Growth. With Innovation At Our Core, We Ensure Your Business Stays Ahead In The Mobile-First World.'
    },
    {
        id: 'vision',
        label: 'Vision',
        title: 'Vision',
        p1: 'Our Vision is to be the leading digital transformation partner for businesses worldwide, empowering them with innovative technology solutions that drive sustainable growth.',
        p2: 'We envision a future where every business, regardless of size, can leverage the power of advanced mobile applications and digital platforms to reach their full potential and create lasting impact.'
    },
    {
        id: 'values',
        label: 'Values',
        title: 'Values',
        p1: 'Integrity, Innovation, and Excellence are at the core of everything we do. We believe in building transparent relationships with our clients and delivering solutions that exceed expectations.',
        p2: 'Our commitment to continuous learning and adaptation ensures that we stay at the forefront of technological advancements, providing our clients with robust, scalable, and future-proof solutions.'
    }
];

const AboutTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const activeContent = tabs.find(tab => tab.id === activeTab);

    return (
        <section className={styles.aboutTabsSection}>
            <div className={styles.aboutTabsCard}>
                <div style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1920"
                        height="1086"
                        viewBox="0 0 1920 1086"
                        fill="none"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <g filter="url(#blur)">
                            <path
                                d="M1410.67 586.078C1640 462.849 1728.67 225.782 1758.67 135.3L1805.33 -75.3901C1706.22 37.9577 1600.67 287.682 1513.33 361.669C1238.61 594.407 942.718 576.456 661.333 657.614C379.333 738.95 263.226 817.291 170 934.451C82.6667 1044.21 48.8889 1322.02 44 1461.67C161.333 1067.33 390 911.502 496 865.854C752 755.609 1190 704.652 1410.67 586.078Z"
                                fill="#ffafa1ff"
                                fillOpacity="1"
                            />
                        </g>

                        <defs>
                            <filter
                                id="blur"
                                x="-200"
                                y="-200"
                                width="2400"
                                height="1800"
                                filterUnits="userSpaceOnUse"
                            >
                                <feGaussianBlur stdDeviation="62.6667" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="container position-relative z-1">
                    <div className={`row ${styles.statsRow}`}>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>15<span className={styles.plus}>+</span></h3>
                            <p className={styles.statLabel}>Years of Experience</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>200<span className={styles.plus}>+</span></h3>
                            <p className={styles.statLabel}>Projects Delivered</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>98<span className={styles.plus}>%</span></h3>
                            <p className={styles.statLabel}>Client Retention Rate</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>50<span className={styles.plus}>+</span></h3>
                            <p className={styles.statLabel}>Full-Time Specialists</p>
                        </div>
                    </div>

                    <div className="row mt-5 pt-lg-5">
                        <div className="col-md-5 col-lg-5">
                            <div className={styles.logoWrapper}>
                                <Image src="/about/black-logo.webp" alt="Nextappinc" width={301} height={83} className={styles.logoImage} />
                            </div>
                            <div className={styles.tabsContainer}>
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {activeTab === tab.id && <span className={styles.tabDash}>—</span>} {tab.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                            <div className={styles.contentWrapper}>
                                <p className={styles.paragraph}>{activeContent.p1}</p>
                                <p className={styles.paragraph}>{activeContent.p2}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Watermark text */}
                <div className={styles.watermark}>
                    Our {activeContent.title}
                </div>
            </div>
        </section>
    );
};

export default AboutTabs;
