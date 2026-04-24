import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import MyButton from './MyButton';

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
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
                <div className={styles.headerRow}>
                    <h2 className={styles.heading}>
                        Clients <span className={styles.highlight}>Love </span> Our Work
                    </h2>
                    <div className={styles.viewMoreBtn}>
                        <MyButton text="View More" className="btn_black" />
                    </div>
                </div>

                <div className={styles.testimonialsGrid}>
                    <div className={styles.sideCol}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Randy Jordan</h3>
                                <img src="/trustpilot-logo.webp" alt="Trustpilot" className={styles.platformLogo} />
                            </div>
                            <p className={styles.testimonialText}>
                                Hi, I am Randy Jordan, the founder, and CEO of Go Hard Finish Strong. I want to let you guys know that working with Blitz Mobile Apps has been great.
                            </p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Rosie Warner</h3>
                                <img src="/clutch-logo.webp" alt="Clutch" className={styles.platformLogo} />
                            </div>
                            <p className={styles.testimonialText}>
                                I'm glad that Blitz Mobile Apps was my first choice to create my app. I got timely delivery on every milestone and even when I needed a few changes here and there, the team was thoroughly professional and didn't let me down. I already have them booked for my next project.
                            </p>
                        </div>
                    </div>

                    <div className={styles.centerImageCol}>
                        <div className={styles.centerImgWrapper}>
                            <img src="/testimonial-center.webp" alt="Client" className={styles.centerImg} />
                        </div>
                    </div>

                    <div className={styles.sideCol}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Aurelie Danie</h3>
                                <img src="/trustpilot-logo.webp" alt="Trustpilot" className={styles.platformLogo} />
                            </div>
                            <p className={styles.testimonialText}>
                                I always thought that creating an app would be tedious and time-consuming but Blitz Mobile Apps was always a step ahead on every milestone, whether it was the app screen designs or the monetization models to help me achieve the desired ROI through the app.
                            </p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Larry Oien</h3>
                                <img src="/clutch-logo.webp" alt="Clutch" className={styles.platformLogo} />
                            </div>
                            <p className={styles.testimonialText}>
                                Hi, I am Larry Andrew Olen. My wife and I both have the same initials LAO, thus the name LAO Games. We decided on developing games and getting the pricey parts done.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
