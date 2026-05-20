import React from 'react';
import Image from 'next/image';
import styles from './CompanyChoiceSection.module.css';
import MyButton from '@/components/layout/MyButton';

const CompanyChoiceSection = () => {
    const cards = [
        {
            title: ' Discovery & Strategy',
            description: 'We get under the hood of your business understanding your goals, users, and competition before a single line of code is written.',
            icon: '/services/icon-discovery-and-strategy.webp'
        },
        {
            title: 'UX/UI Design',
            description: "Our designers craft intuitive, beautiful interfaces that guide users naturally and reflect your brand's personality at every touchpoint.",
            icon: '/services/icon-ux-ui-design.webp'
        },
        {
            title: 'Development',
            description: 'Our engineers build clean, scalable code using modern frameworks, delivering both performance and the flexibility your product needs to grow.',
            icon: '/services/icon-development.webp'
        },
        {
            title: 'Launch & Deployment',
            description: 'We handle app store submissions, server deployments, and go-live checklists so your launch is smooth and stress-free.',
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
                                A Process <span className={styles.purpleText}>Built for</span> Clarity,<span className={styles.purpleText}></span> Speed, and <span className={styles.purpleText}> Zero Surprises</span>
                            </h2>
                            <p className={styles.description}>
                               We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education, powered by technology that drives real results. And it is not just apps. 
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
