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
                <Image
                    src="/about-bg.png"
                    alt="about Background"
                    fill
                    priority
                    className={styles.backgroundImage}
                />
                <div className="container position-relative z-1">
                    {/* Stats Row */}
                    <div className={`row ${styles.statsRow}`}>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>600<span className={styles.plus}>+</span></h3>
                            <p className={styles.statLabel}>Super Happy Clients</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>900<span className={styles.plus}>+</span></h3>
                            <p className={styles.statLabel}>Successful Projects</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>200<span className={styles.plus}>+</span></h3>
                            <p className={styles.statLabel}>Adv Awards Winners</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>900<span className={styles.plus}>+</span></h3>
                            <p className={styles.statLabel}>Super Happy Clients</p>
                        </div>
                    </div>

                    <div className="row mt-5 pt-lg-5">
                        <div className="col-md-5 col-lg-5">
                            <div className={styles.logoWrapper}>
                                <Image src="/about/purple-logo.png" alt="Nextappinc" width={300} height={100} className={styles.logoImage} />
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
