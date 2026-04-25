import React from 'react';
import Image from 'next/image';
import styles from './IndustryConsultationSection.module.css';
import MyButton from '@/components/layout/MyButton';

const IndustryConsultationSection = () => {
    return (
        <section className={styles.consultationSection}>
            <Image
                src="/industries/industry-consultation-bg.webp"
                alt="Background"
                fill
                className={styles.bgImage}
            />
            <div className={`container ${styles.container}`}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentArea}>
                            <h2 className={styles.heading}>
                                Create Seamless <br />
                                <span className={styles.purpleText}>Financial Management</span> <br />
                                with Powerful Apps!
                            </h2>

                            <p className={styles.subLabel}>Our Accounting App Development Services</p>
                            <p className={styles.description}>
                                Our Accounting App Development Services provide integrated tools and
                                resources for smooth management—from initial ideation and concept
                                development to final delivery. We specialize in creating high-performance
                                finance apps tailored to meet your specific business goals.
                            </p>

                            <div className="mt-5">
                                <MyButton text="Free Consultation" className="btn_black" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/industries/consultation-woman.webp"
                                alt="Consultation"
                                width={800}
                                height={750}
                                className={styles.womanImg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryConsultationSection;
