import React from 'react';
import Image from 'next/image';
import styles from './CompanyChoiceSection.module.css';
import MyButton from '@/components/layout/MyButton';

const defaultCards = [
    {
        title: 'Strategy & Concept Discovery',
        description: 'We start by understanding your target audience, genre mechanics, monetization model, and platform priorities. Whether you are focused on Android 2D game development or a multi-platform release, your game starts with a clear design document before a single asset is produced.',
        icon: '/services/icon-discovery-and-strategy.webp'
    },
    {
        title: 'Art & Game Design',
        description: "Design characters, environments, level layouts, and UI systems that bring your 2D world to life. Every visual decision is made with the player experience in mind and calibrated to the platform your game will run on.",
        icon: '/services/icon-ux-ui-design.webp'
    },
    {
        title: 'Engineering & Integration',
        description: 'Build your game with optimized sprite rendering, physics systems, and backend infrastructure. Our iOS 2D game development and Android teams work in parallel to ensure consistent performance and feature parity across platforms.',
        icon: '/services/icon-development.webp'
    },
    {
        title: 'Testing, Launch & Growth',
        description: 'Validate performance with rigorous QA, prepare for App Store and Play Store submission, and stay engaged for post-launch support. Our 2D game development services team does not disappear when the build ships.',
        icon: '/services/icon-launch-and-deployment.webp'
    }
];

const CompanyChoiceSection = ({
    headingText = "A Process ",
    purpleText = "Built Around",
    headingText2 = " Your ",
    purpleText2 = "Game",
    heading, // Custom React node override
    description = "Every title has its own goals, but successful launches follow the same disciplined path. From the first concept call to post-launch live ops, we keep every stage focused, transparent, and built around what your players actually need.",
    cards = defaultCards,
    btnText = "Get Started"
}) => {
    return (
        <section className={styles.companySection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>
                                {heading ? heading : (
                                    <>
                                        {headingText} <span className={styles.purpleText}>{purpleText}</span>
                                        {headingText2} <span className={styles.purpleText}>{purpleText2}</span>
                                    </>
                                )}
                            </h2>
                            <p className={styles.description}>
                                {description}
                            </p>
                            {btnText && (
                                <div className={styles.btnRow}>
                                    <MyButton text={btnText} className="btn_black" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.cardsGrid}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className={styles.col1}>
                                        {cards[0] && (
                                            <div className={styles.card}>
                                                <div className={styles.iconBox}>
                                                    <Image src={cards[0].icon} alt="icon" width={62} height={62} />
                                                </div>
                                                <h4 className={styles.cardTitle}>{cards[0].title}</h4>
                                                <p className={styles.cardDesc}>{cards[0].description}</p>
                                            </div>
                                        )}
                                        {cards[1] && (
                                            <div className={styles.card}>
                                                <div className={styles.iconBox}>
                                                    <Image src={cards[1].icon} alt="icon" width={62} height={62} />
                                                </div>
                                                <h4 className={styles.cardTitle}>{cards[1].title}</h4>
                                                <p className={styles.cardDesc}>{cards[1].description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.col2}>
                                        {cards[2] && (
                                            <div className={styles.card}>
                                                <div className={styles.iconBox}>
                                                    <Image src={cards[2].icon} alt="icon" width={62} height={62} />
                                                </div>
                                                <h4 className={styles.cardTitle}>{cards[2].title}</h4>
                                                <p className={styles.cardDesc}>{cards[2].description}</p>
                                            </div>
                                        )}
                                        {cards[3] && (
                                            <div className={styles.card}>
                                                <div className={styles.iconBox}>
                                                    <Image src={cards[3].icon} alt="icon" width={62} height={62} />
                                                </div>
                                                <h4 className={styles.cardTitle}>{cards[3].title}</h4>
                                                <p className={styles.cardDesc}>{cards[3].description}</p>
                                            </div>
                                        )}
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
