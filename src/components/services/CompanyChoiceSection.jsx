import React from 'react';
import Image from 'next/image';
import styles from './CompanyChoiceSection.module.css';
import MyButton from '@/components/layout/MyButton';

const CompanyChoiceSection = () => {
    const cards = [
        {
            title: ' Real-Time Health & Biometric Monitoring',
            description: 'Live heart rate, SpO2, blood glucose, stress, and sleep data surfaces through your wearable interface with threshold-based alerts and trend visualization delivered directly on the wrist.',
            icon: '/services/icon-discovery-and-strategy.webp'
        },
        {
            title: 'Offline & Background Sync',
            description: "Wearable apps must function without constant phone connection. We build offline-capable data storage, background sync, and conflict resolution into every wearable product from the first sprint.",
            icon: '/services/icon-ux-ui-design.webp'
        },
        {
            title: 'Custom Complications & Watch Faces',
            description: 'Native Apple Watch complications and Wear OS tiles that surface your most important data steps, metrics, task counts, alerts — directly on the watch face without opening the full app.',
            icon: '/services/icon-development.webp'
        },
        {
            title: 'Push Notifications & Haptic Feedback',
            description: 'Context-aware push notifications and custom haptic patterns that deliver information at the right moment without interrupting the user experience on the primary phone.',
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
                                Wearable App <span className={styles.purpleText}>Features That</span>Keep Users Connected,<span className={styles.purpleText}></span>Informed, <span className={styles.purpleText}>and Healthy</span>
                            </h2>
                            <p className={styles.description}>
                                We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education — powered by technology that drives real results.
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
