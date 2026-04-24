'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './IndustryFeaturesSection.module.css';

const col1Features = [
    { title: 'Multi-Currency Support', content: 'Automate transaction recording across different currencies with real-time exchange rate updates and automatic conversion.' },
    { title: 'Tax Calculation & Compliance', content: 'Automated tax computations based on the latest regional laws and regulations to ensure full financial compliance.' },
    { title: 'Bank Reconciliation', content: 'Sync with your bank accounts for seamless matching of transactions and bank statements in real-time.' },
    { title: 'Audit Trail Tracking', content: 'Comprehensive logging of all financial changes for accountability, internal auditing, and regulatory compliance.' },
    { title: 'Mobile Invoicing & Billing', content: 'Create and send professional invoices directly from your mobile device with automated follow-up reminders.' },
    { title: 'Financial Reporting Dashboards', content: 'Generate balance sheets, P&L statements, and cash flow reports on the go with interactive visualizations.' }
];

const col2Features = [
    { title: 'Real-time Payment Notifications', content: 'Stay updated with instant alerts for incoming payments, overdue invoices, and budget threshold alerts.' },
    { title: 'Budget Planning & Control', content: 'Set budgets for departments or projects and track spending in real-time to prevent over-expenditure.' },
    { title: 'Payroll Integration', content: 'Seamlessly manage employee salaries, bonuses, and tax deductions with direct deposit capabilities.' },
    { title: 'Data Visualization & Charts', content: 'Interactive charts and graphs provide a clear view of your financial performance at a single glance.' },
    { title: 'Secure Data Encryption', content: 'Industry-standard AES-256 encryption to protect your sensitive financial information from unauthorized access.' },
    { title: 'Cloud-Based Data Sync', content: 'Safe and reliable cloud backup for all your financial documents and records with instant multi-device sync.' }
];

const IndustryFeaturesSection = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (title) => {
        setOpenItem(openItem === title ? null : title);
    };

    return (
        <section className={styles.featuresSection}>
            <Image
                src="/process-bg.webp"
                alt="Background"
                fill
                className={styles.bgImage}
            />

            <div className={`container ${styles.container}`}>
                <div className="row align-items-center mb-5 pb-lg-5">
                    <div className="col-lg-7">
                        <div className={styles.header}>
                            <h2 className={styles.heading}>
                                Accounting <span className={styles.greenText}>Mobile App</span> <br />
                                Features to Build Successful <br />
                                <span className={styles.greenText}>Finance Platforms</span>
                            </h2>
                            <p className={styles.description}>
                                We&apos;ve Received Awards And Recognition For Our Quality-First Approach,
                                Delivering Complex Projects Successfully With Our Skilled Team Of
                                Developers, Designers, And Project Managers.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.mockupWrapper}>
                            <Image
                                src="/industries/feature-phones.webp"
                                alt="Feature Phones"
                                width={600}
                                height={600}
                                className={styles.phonesMockup}
                            />
                        </div>
                    </div>
                </div>

                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className={styles.accordionList}>
                            {col1Features.map((item) => (
                                <div key={item.title} className={styles.accordionItem}>
                                    <div
                                        className={styles.accordionHeader}
                                        onClick={() => toggleItem(item.title)}
                                    >
                                        <h4 className={styles.itemTitle}>{item.title}</h4>
                                        <div className={`${styles.icon} ${openItem === item.title ? styles.open : ''}`}>
                                            {openItem === item.title ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                                                    <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                                                    <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                                                    <path d="M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <div className={`${styles.accordionContent} ${openItem === item.title ? styles.contentOpen : ''}`}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.accordionList}>
                            {col2Features.map((item) => (
                                <div key={item.title} className={styles.accordionItem}>
                                    <div
                                        className={styles.accordionHeader}
                                        onClick={() => toggleItem(item.title)}
                                    >
                                        <h4 className={styles.itemTitle}>{item.title}</h4>
                                        <div className={`${styles.icon} ${openItem === item.title ? styles.open : ''}`}>
                                            {openItem === item.title ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
                                                    <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                                                    <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                                                    <path d="M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <div className={`${styles.accordionContent} ${openItem === item.title ? styles.contentOpen : ''}`}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryFeaturesSection;
