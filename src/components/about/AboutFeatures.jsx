import Image from 'next/image';
import styles from './AboutFeatures.module.css';

const AboutFeatures = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={`container ${styles.featuresContainer}`}>
                <div className={`row ${styles.rowAlign}`}>
                    {/* Left Column */}
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <div className={styles.leftCard}>
                            <div className={styles.imageWrapper1}>
                                <Image
                                    src="/about/feature-1.webp"
                                    alt="Award Winning"
                                    width={500}
                                    height={500}
                                    className={styles.image1}
                                />
                            </div>
                            <div className={styles.leftContentBottom}>
                                <h3 className={styles.heading}>One Team Across Every Discipline</h3>
                                <p className={styles.paragraph}>
                                    Mobile, game, web, e-commerce, blockchain, AR/VR, and custom software. One team, one communication channel, one quality standard across everything. No handoffs between agencies. No gaps in accountability.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                        <div className={styles.middleCard}>
                            <Image
                                src="/about/feature-2.webp"
                                alt="Office Team"
                                width={600}
                                height={800}
                                className={styles.image2}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-3 col-md-12">
                        <div className={styles.rightCard}>
                            <div className={styles.rightContentTop}>
                                <h3 className={styles.heading}>100% Transparency on Every Project</h3>
                                <p className={styles.paragraph}>
                                    You see everything. Milestone reviews, sprint updates, testing reports, and deployment plans are shared with you in real time. Nothing happens behind closed doors.
                                </p>
                            </div>
                            <div className={styles.imageWrapper3}>
                                <Image
                                    src="/about/feature-3.webp"
                                    alt="Wireframes Design"
                                    width={500}
                                    height={400}
                                    className={styles.image3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;
