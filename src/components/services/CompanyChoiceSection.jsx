import React from 'react';
import Image from 'next/image';
import styles from './CompanyChoiceSection.module.css';
import MyButton from '@/components/layout/MyButton';

const CompanyChoiceSection = () => {
    const cards = [
        {
            title: 'Strategy & Product Discovery',
            description: 'We start by understanding your users, business goals, and technical requirements, turning ideas into a clear product roadmap before development begins.',
            icon: '/services/icon-discovery-and-strategy.webp'
        },
        {
            title: 'Wearable UX/UI Design',
            description: "Design interfaces built for the wrist, where every interaction is intuitive, glanceable, and optimized for real-world use.",
            icon: '/services/icon-ux-ui-design.webp'
        },
        {
            title: 'Engineering & Integration',
            description: 'Develop native wearable apps, companion mobile experiences, and backend systems that work together seamlessly across devices.',
            icon: '/services/icon-development.webp'
        },
        {
            title: 'Testing, Launch & Growth',
            description: 'Validate performance, prepare for App Store and Google Play submission, and continue supporting your product as wearable platforms evolve.',
            icon: '/services/icon-launch-and-deployment.webp'
        }
    ];

    return (
        <section className={styles.companySection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>      
                                A Process  <span className={styles.purpleText}>Built Around</span> Your <span className={styles.purpleText}></span> Product<span className={styles.purpleText}></span>
                            </h2>
                            <p className={styles.description}>
                               Every wearable product has different goals, but successful launches follow the same disciplined process. From validating your idea to deployment and long-term support, we keep every stage focused, collaborative and transparent.
                            </p>
                            <div className={styles.btnRow}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.cardsGrid}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className={styles.col1}>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[0].icon} alt="icon" width={62} height={62} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[0].title}</h4>
                                            <p className={styles.cardDesc}>{cards[0].description}</p>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[1].icon} alt="icon" width={62} height={62} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[1].title}</h4>
                                            <p className={styles.cardDesc}>{cards[1].description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.col2}>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[2].icon} alt="icon" width={62} height={62} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[2].title}</h4>
                                            <p className={styles.cardDesc}>{cards[2].description}</p>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[3].icon} alt="icon" width={62} height={62} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[3].title}</h4>
                                            <p className={styles.cardDesc}>{cards[3].description}</p>
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

export default CompanyChoiceSection;
