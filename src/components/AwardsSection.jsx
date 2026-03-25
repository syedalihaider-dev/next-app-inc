import React from 'react';
import Image from 'next/image';
import styles from './AwardsSection.module.css';

const awards = [
    {
        icon: '/services/award-clutch.png',
        year: '2023',
        title: 'Top App Performers Award'
    },
    {
        icon: '/services/award-appfutura.png',
        year: '2023',
        title: 'Top App Performers Award'
    },
    {
        icon: '/services/award-upcity.png',
        year: '2023',
        title: 'Top App Performers Award'
    },
    {
        icon: '/services/award-expertise.png',
        year: '2023',
        title: 'Top App Performers Award'
    }
];

const AwardsSection = () => {
    return (
        <section className={styles.awardsSection}>
            {/* Background trophy image */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/services/awards-section-bg.png"
                    alt="awards background"
                    fill
                    className={styles.bgImg}
                    priority
                />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className={styles.contentHeader}>
                            <h2 className={styles.heading}>
                                Awards That Validate <br />
                                Our Impactful <span className={styles.purpleText}>App Solutions</span>
                            </h2>
                            <div className={styles.underlineWrapper}>
                                <Image
                                    src="/blue-vector.png"
                                    alt="underline"
                                    width={400}
                                    height={40}
                                    className={styles.purpleVector}
                                />
                            </div>
                            <p className={styles.desc}>
                                We've Received Awards And Recognition For Our Quality-First
                                Approach, Delivering Complex Projects Successfully With Our Skilled
                                Team Of Developers, Designers, And Project Managers.
                            </p>
                        </div>

                        <div className={styles.awardsGrid}>
                            <div className="row g-4">
                                {awards.map((award, index) => (
                                    <div className="col-md-3 col-6" key={index}>
                                        <div className={styles.awardCard}>
                                            <div className={styles.iconBox}>
                                                <Image
                                                    src={award.icon}
                                                    alt="award icon"
                                                    width={130}
                                                    height={130}
                                                    className={styles.awardLogo}
                                                />
                                            </div>
                                            <div className={styles.awardInfo}>
                                                <h4 className={styles.year}>{award.year}</h4>
                                                <p className={styles.title}>{award.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
