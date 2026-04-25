'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './IOSProcessTabs.module.css';
import MyButton from './MyButton';

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'In Project Planning, Our Business Analysts Work With Clients To Turn Their App Ideas And Business Needs Into A Clear Project Scope. We Allocate The Right Resources, Provide Accurate Cost And Time Estimates, And Explore Cost Optimization Options For Efficient Execution.',
        image: '/process-steps/step-01.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: 'Once the planning is complete, we move to wireframing. This phase involves creating a visual guide that represents the skeletal framework of your app, ensuring a seamless user experience and intuitive interface design.',
        image: '/process-steps/step-02.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Before full-scale development, we build an interactive prototype. This allows you to experience the flow and functionality of your app firsthand, giving you the opportunity to provide feedback and refine the user journey early on.',
        image: '/process-steps/step-03.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our expert developers bring your app to life using the latest coding standards and frameworks. We follow an agile development process, ensuring frequent updates and the flexibility to adapt to changing requirements.',
        image: '/process-steps/step-04.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We conduct rigorous testing to ensure your app is bug-free, secure, and performs flawlessly across all devices and platforms. Our QA team runs multiple performance and security audits to guarantee excellence.',
        image: '/process-steps/step-05.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'Finally, we handle the launch of your app on the App Store or Google Play. We manage the entire submission process, ensuring compliance with all guidelines and a smooth transition to a successful live environment.',
        image: '/process-steps/step-06.webp'
    }
];

const IOSProcessTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const activeContent = tabs.find(tab => tab.id === activeTab);

    return (
        <section className={styles.processTabsSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className={styles.headerArea}>
                            <h2 className={styles.heading}>
                                Our <span className={styles.purpleText}>App Development</span> Approach <br />
                                Makes It <span className={styles.purpleText}>Simple, Easy,</span> & Efficient
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className={styles.tabsContainer}>
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {activeTab === tab.id && <span className={styles.tabBorder}></span>}
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className={styles.contentCard}>
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-12">
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={activeContent.image}
                                            alt={activeContent.title}
                                            width={800}
                                            height={500}
                                            className={styles.contentImage}
                                        />
                                    </div>
                                    <div className={styles.textContent}>
                                        <h3 className={styles.contentTitle}>{activeContent.title}</h3>
                                        <p className={styles.paragraph}>{activeContent.description}</p>
                                        <div className="mt-4">
                                            <MyButton text="Explore More" className="btn_black" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IOSProcessTabs;
