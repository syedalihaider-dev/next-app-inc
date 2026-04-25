import React from 'react';
import Image from 'next/image';
import styles from './DevelopmentSolutionsSection.module.css';
import MyButton from '@/components/layout/MyButton';

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
            <div style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1920"
                    height="1086"
                    viewBox="0 0 1920 1086"
                    fill="none"
                    style={{ width: "100%", height: "100%" }}
                >
                    <g filter="url(#blur)">
                        <path
                            d="M1410.67 586.078C1640 462.849 1728.67 225.782 1758.67 135.3L1805.33 -75.3901C1706.22 37.9577 1600.67 287.682 1513.33 361.669C1238.61 594.407 942.718 576.456 661.333 657.614C379.333 738.95 263.226 817.291 170 934.451C82.6667 1044.21 48.8889 1322.02 44 1461.67C161.333 1067.33 390 911.502 496 865.854C752 755.609 1190 704.652 1410.67 586.078Z"
                            fill="#ffafa1ff"
                            fillOpacity="1"
                        />
                    </g>

                    <defs>
                        <filter
                            id="blur"
                            x="-200"
                            y="-200"
                            width="2400"
                            height="1800"
                            filterUnits="userSpaceOnUse"
                        >
                            <feGaussianBlur stdDeviation="62.6667" />
                        </filter>
                    </defs>
                </svg>
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

                            <ul className={styles.featureList}>
                                {features.map((feature, index) => (
                                    <li key={index} className={styles.featureItem}>
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src="/services/ios-check-icon.webp"
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
                                src="/services/development-solutions-mockup.webp"
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
