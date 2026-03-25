import React from 'react';
import Image from 'next/image';
import styles from './DevelopmentSolutionsSection.module.css';
import MyButton from './MyButton';

const features = [
    'Custom App Designs That Showcase Your Brand',
    'Cross-Platform Development To Reach More Users',
    'Smooth Integration With Your Existing Systems',
    'Thorough QA And Testing For A Perfect Launch',
    'Continuous Support For Hassle-Free Updates'
];

const DevelopmentSolutionsSection = () => {
    return (
        <section className={styles.solutionsSection}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/about-bg.png"
                    alt="background"
                    fill
                    className={styles.bgImg}
                />
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <div className={styles.badge}>
                                GET STARTED
                            </div>
                            <h2 className={styles.heading}>
                                Next App Inc <br />
                                <span className={styles.purpleText}>Development Solutions</span>
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

                            <ul className={styles.featureList}>
                                {features.map((feature, index) => (
                                    <li key={index} className={styles.featureItem}>
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src="/services/ios-check-icon.png"
                                                alt="check"
                                                width={22}
                                                height={20}
                                            />
                                        </div>
                                        <span className={styles.featureText}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.btnRow}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.mockupCol}>
                            <Image
                                src="/services/development-solutions-mockup.png"
                                alt="Next App Inc Mockup"
                                width={800}
                                height={800}
                                className={styles.mockupImg}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentSolutionsSection;
