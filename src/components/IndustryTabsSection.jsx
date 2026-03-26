'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './IndustryTabsSection.module.css';

const tabs = [
    {
        id: 'invoicing',
        title: 'Invoicing & Billing Management',
        contentTitle: 'Custom Invoicing & Billing Platforms',
        contentDesc: 'In Project Planning, Our Business Analysts Work With Clients To Turn Their App Ideas And Business Needs Into A Clear Project Scope. We Allocate The Right Resources, Provide Accurate Cost And Time Estimates, And Explore Cost Optimization Options For Efficient Execution.',
        icon: '/industries/accounting-app-development/tab-icon-01.png',
        image: '/industries/accounting-app-development/tab-mockup-01.png'
    },
    {
        id: 'auditing',
        title: 'Transaction & Audit Tracking',
        contentTitle: 'Advanced Transaction Auditing Systems',
        contentDesc: 'We develop robust transaction tracking solutions that ensure every penny is accounted for. Our systems provide real-time auditing capabilities, historical data analysis, and automated compliance reporting for financial transparency.',
        icon: '/industries/accounting-app-development/tab-icon-01.png',
        image: '/industries/accounting-app-development/tab-mockup-01.png'
    },
    {
        id: 'payroll',
        title: 'Payroll & Compensation Systems',
        contentTitle: 'Seamless Payroll & HR Integration',
        contentDesc: 'Our payroll solutions automate complex compensation structures, tax withholdings, and employee benefits. We integrate with existing HR systems to provide a unified platform for managing workforce costs and financial obligations.',
        icon: '/industries/accounting-app-development/tab-icon-01.png',
        image: '/industries/accounting-app-development/tab-mockup-01.png'
    },
    {
        id: 'analytics',
        title: 'Financial Reporting & Analytics',
        contentTitle: 'Predictive Financial Analytics Dashboards',
        contentDesc: 'Unlock the power of your financial data with custom analytics dashboards. We provide predictive modeling, trend analysis, and comprehensive reporting tools that help business leaders make informed strategic decisions based on real-time data.',
        icon: '/industries/accounting-app-development/tab-icon-01.png',
        image: '/industries/accounting-app-development/tab-mockup-01.png'
    }
];

const IndustryTabsSection = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className={styles.tabsSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.headerArea}>
                    <h2 className={styles.heading}>
                        Empowering the Future of <span className={styles.purpleText}>Accounting</span> <br />
                        with <span className={styles.purpleText}>Modern App</span> Development
                    </h2>
                    <div className={styles.underlineWrapper}>
                        <Image 
                            src="/blue-vector.png" 
                            alt="underline" 
                            width={350} 
                            height={25} 
                            className={styles.purpleVector}
                        />
                    </div>
                    <p className={styles.headerDescription}>
                        We Create Transformative Accounting Apps That Make Financial Management Accessible, 
                        Personalized, And Engaging. Designed For Firms, CPAs, And Finance Teams, 
                        Our Mobile Solutions Redefine How Data Is Analyzed and Shared.
                    </p>
                </div>

                <div className={styles.tabsWrapper}>
                    <div className={styles.tabsContainer}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tabBtn} ${activeTab.id === tab.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.contentWrapper}>
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className={styles.imageBox}>
                                <Image 
                                    src={activeTab.image} 
                                    alt={activeTab.contentTitle} 
                                    width={600} 
                                    height={500} 
                                    className={styles.mockupImg}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.contentText}>
                                <div className={styles.iconBox}>
                                    <Image 
                                        src={activeTab.icon} 
                                        alt="Tab Icon" 
                                        width={45} 
                                        height={45} 
                                    />
                                </div>
                                <h3 className={styles.contentTitle}>{activeTab.contentTitle}</h3>
                                <p className={styles.contentDesc}>
                                    {activeTab.contentDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryTabsSection;
