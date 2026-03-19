"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ContactSection.module.css';
import MyButton from './MyButton';

const ContactSection = () => {
    const [selectedServices, setSelectedServices] = useState(['Unity Game Development']);

    const services = [
        { id: 'unity', name: 'Unity Game Development', icon: '/Vector.png' },
        { id: 'react', name: 'React Native Development', icon: '/Vector (1).png' },
        { id: 'flutter', name: 'Flutter Development', icon: '/Vector (2).png' },
        { id: 'fullstack', name: 'Full Stack Development', icon: '/service-icon-fullstack.png' },
        { id: 'marketing', name: 'Mobile App Marketing', icon: '/service-icon-marketing.png' },
        { id: 'ecommerce', name: 'Any Ecommerce', icon: '/service-icon-ecommerce.png' },
    ];

    const toggleService = (name) => {
        if (selectedServices.includes(name)) {
            setSelectedServices(selectedServices.filter(s => s !== name));
        } else {
            setSelectedServices([...selectedServices, name]);
        }
    };

    return (
        <section className={styles.contactSection}>
            {/* Grid Background */}
            <div className={styles.gridBg}>
                <Image src="/services-bg.png" alt="Grid Background" layout="fill" objectFit="cover" />
            </div>

            <div className="container">
                {/* Header Section */}
                <div className={styles.header}>
                    <span className={styles.badge}>CONTACT US</span>
                    <h2 className={styles.heading}>
                        Your Partner in <span className={styles.highlight}>Mobile Strategy,</span><br />
                        <span className={styles.highlight}>Design</span>, and Development.
                    </h2>
                    <div className={styles.vectorWrapper}>
                        <Image src="/green-vector.png" alt="Vector" width={400} height={15} />
                    </div>
                </div>

                <div className="row align-items-center mt-5">
                    {/* Left Column: Info & Socials */}
                    <div className="col-lg-5">
                        <div className={styles.infoCol}>
                            <h3 className={styles.subHeading}>Contact Us</h3>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6a55ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <span className={styles.contactText}>info@example.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6a55ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <span className={styles.contactText}>+123 456 7890</span>
                            </div>

                            <h4 className={styles.socialHeading}>Follow Us</h4>
                            <div className={styles.socialIcons}>
                                <a href="#" className={styles.socialLink}><img src="/social-fb.png" alt="Facebook" /></a>
                                <a href="#" className={styles.socialLink}><img src="/social-linkedin.png" alt="LinkedIn" /></a>
                                <a href="#" className={styles.socialLink}><img src="/social-insta.png" alt="Instagram" /></a>
                                <a href="#" className={styles.socialLink}><img src="/social-x.png" alt="X" /></a>
                            </div>

                            <h4 className={styles.achievementsHeading}>Our Achievements</h4>
                            <div className={styles.achievementBadges}>
                                <img src="/badge-brand-of-year.png" alt="Brand of year" />
                                <img src="/badge-expertise.png" alt="Expertise" />
                                <img src="/badge-goodfirms.png" alt="GoodFirms" />
                                <img src="/badge-clutch.png" alt="Clutch" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="col-lg-7">
                        <div className={styles.formCol}>
                            <h3 className={styles.servicesTitle}>Services</h3>
                            <div className={styles.servicesPills}>
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`${styles.pill} ${selectedServices.includes(service.name) ? styles.pillActive : ''}`}
                                        onClick={() => toggleService(service.name)}
                                    >
                                        <img src={service.icon} alt={service.name} className={styles.pillIcon} />
                                        {service.name}
                                    </div>
                                ))}
                            </div>

                            <form className={styles.contactForm}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                Full name*
                                            </label>
                                            <input type="text" placeholder="Your full name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                Phone*
                                            </label>
                                            <input type="tel" placeholder="Your phone number" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                Email address*
                                            </label>
                                            <input type="email" placeholder="info@example.com" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                                Select Your Budget
                                            </label>
                                            <select>
                                                <option>$200k</option>
                                                <option>$500k</option>
                                                <option>$1M+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                                Project Details
                                            </label>
                                            <textarea placeholder="Write a message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.submitBtn}>
                                    <MyButton text="Submit Now" className="btn_black" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
