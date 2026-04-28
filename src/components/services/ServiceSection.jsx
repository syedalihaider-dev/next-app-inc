import React from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css'; // Reusing the same styling
import MyButton from '@/components/layout/MyButton';
import { SITE_CONFIG } from '@/configs/site-config';

const ServiceSection = ({
    heading,
    purpleText,
    description,
    features,
    mockupImage,
    mockupAlt = "Mockup"
}) => {
    return (
        <section className={styles.serviceSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>
                                {heading}
                                <span className={styles.purpleText}> {purpleText}</span>
                            </h2>
                            <p className={styles.description}>
                                {description}
                            </p>

                            <ul className={styles.features}>
                                {features.map((feature, index) => (
                                    <li key={index}>
                                        <Image src="/services/ios-check-icon.webp" alt="check" width={22} height={20} className={styles.checkIcon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.statsRow}>
                                <div className={styles.statValue}>15+</div>
                                <div className={styles.vLine}></div>
                                <div className={styles.statLabel}>
                                    Years Of Working Experience <br /> In This Company
                                </div>
                            </div>

                            <div className={styles.btnRow}>
                                <MyButton text="Get Started" className="btn_black" />
                                <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} className={styles.phoneBtn}>
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.mockupWrapper}>
                <div className={styles.mockupBg}></div>
                <Image
                    src={mockupImage}
                    alt={mockupAlt}
                    width={800}
                    height={800}
                    className={styles.mockupImg}
                />
            </div>
        </section>
    );
};

export default ServiceSection;
