import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import MyButton from './MyButton';

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className="container">
                {/* Header Section */}
                <div className={styles.headerRow}>
                    <h2 className={styles.heading}>
                        Clients <span className={styles.highlight}>
                            Love
                            <img src="/blue-vector.png" alt="vector" className={styles.blueVector} />
                        </span> Our Work
                    </h2>
                    <div className={styles.viewMoreBtn}>
                        <MyButton text="View More" className="btn_black" />
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className={styles.testimonialsGrid}>
                    {/* Left Column */}
                    <div className={styles.sideCol}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Randy Jordan</h3>
                                <img src="/trustpilot-logo.png" alt="Trustpilot" className={styles.platformLogo} />
                            </div>
                            <p className={styles.testimonialText}>
                                Hi, I am Randy Jordan, the founder, and CEO of Go Hard Finish Strong. I want to let you guys know that working with Blitz Mobile Apps has been great.
                            </p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Rosie Warner</h3>
                                <img src="/clutch-logo.png" alt="Clutch" className={styles.platformLogo} />
                            </div>
                            <p className={styles.testimonialText}>
                                I'm glad that Blitz Mobile Apps was my first choice to create my app. I got timely delivery on every milestone and even when I needed a few changes here and there, the team was thoroughly professional and didn't let me down. I already have them booked for my next project.
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className={styles.centerImageCol}>
                        <div className={styles.centerImgWrapper}>
                            <img src="/testimonial-center.png" alt="Client" className={styles.centerImg} />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.sideCol}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Aurelie Danie</h3>
                                <img src="/trustpilot-logo.png" alt="Trustpilot" className={styles.platformLogo} />
                            </div>
                            <p className={styles.testimonialText}>
                                I always thought that creating an app would be tedious and time-consuming but Blitz Mobile Apps was always a step ahead on every milestone, whether it was the app screen designs or the monetization models to help me achieve the desired ROI through the app.
                            </p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Larry Oien</h3>
                                <img src="/clutch-logo.png" alt="Clutch" className={styles.platformLogo} />
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
