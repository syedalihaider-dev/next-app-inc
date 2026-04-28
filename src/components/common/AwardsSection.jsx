import React from 'react';
import Image from 'next/image';
import styles from './AwardsSection.module.css';

const awards = [
    {
        icon: '/services/award-clutch.webp',
        year: '2023',
        title: 'Top App Performers Excellence Award'
    },
    {
        icon: '/services/award-appfutura.webp',
        year: '2023',
        title: 'Top Developer Expertise - Best Firm'
    },
    {
        icon: '/services/award-upcity.webp',
        year: '2023',
        title: 'Top App Performers UpCity Award'
    },
    {
        icon: '/services/award-expertise.webp',
        year: '2023',
        title: 'Top App Performers Expertise Award'
    }
];

const AwardsSection = () => {
    return (
        <section className={styles.awardsSection}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/services/awards-section-bg.webp"
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
                                Results That Speak <br />
                                <span className={styles.purpleText}>Louder</span> Than <span className={styles.purpleText}>Promises</span>
                            </h2>
                            <p className={styles.desc}>
                                We've earned recognition for our quality-first approach and successful delivery of complex digital projects across mobile, web, e-commerce, game, and software domains — with skilled developers, designers, and project managers working as one team.
                            </p>
                        </div>

                        <div className={styles.awardsGrid}>
                            <div className="row g-4">
                                {awards.map((award, index) => (
                                    <div className="col-12 col-sm-6 col-md-3" key={index}>
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
